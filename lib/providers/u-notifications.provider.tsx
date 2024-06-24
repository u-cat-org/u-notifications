import { useState } from 'react';
import { INotification, UNotificationColor, UNotificationsProviderProps } from '../notifications.typings';
import { UNotificationsContainer } from '../components/u-notifications-container';
import { NotificationsContext } from './../notifications.typings.ts';


export const UNotificationsProvider = ({ position, children }: UNotificationsProviderProps) => {
  const [ notifications, setNotifications ] = useState<INotification[]>([]);

  function addNotification(color: UNotificationColor, text: string): void {
    setNotifications([ ...notifications, { color, text } ]);
  }

  function primary(text: string): void {
    addNotification(UNotificationColor.primary, text);
  }

  function secondary(text: string): void {
    addNotification(UNotificationColor.secondary, text);
  }

  function danger(text: string): void {
    addNotification(UNotificationColor.danger, text);
  }

  function dark(text: string): void {
    addNotification(UNotificationColor.dark, text);
  }

  function success(text: string): void {
    addNotification(UNotificationColor.success, text);
  }

  function light(text: string): void {
    addNotification(UNotificationColor.light, text);
  }

  function info(text: string): void {
    addNotification(UNotificationColor.info, text);
  }

  function warning(text: string): void {
    addNotification(UNotificationColor.warning, text);
  }


  function removeNotification(index: number): void {
    // @ts-expect-error. Typescript gives here an error because we are not using "n" argument.
    setNotifications([ ...notifications.filter((n, i) => i !== index) ]);
  }

  return <NotificationsContext.Provider
    value={ { primary, secondary, warning, danger, dark, success, light, info } }>
    position: { position }
    { children }
    <UNotificationsContainer notifications={ notifications }
                             onToggleHandler={ removeNotification }
                             position={ position || 'rightBottom' }></UNotificationsContainer>
  </NotificationsContext.Provider>;
};

