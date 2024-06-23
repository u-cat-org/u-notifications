import { createContext, useContext, useState } from 'react';
import { UNotificationColor } from '../components/u-notification';
import { INotification, INotificationContext, UNotificationsProviderProps } from '../notifications.typings';
import { UNotificationsContainer } from '../components/u-notifications-container';


const DEFAULT_NOTIFICATIONS_CONTEXT: INotificationContext = {
  primary: () => undefined,
  secondary: () => undefined,
  warning: () => undefined,
  danger: () => undefined,
  dark: () => undefined,
  success: () => undefined,
  light: () => undefined,
  info: () => undefined
};
const NotificationsContext = createContext(DEFAULT_NOTIFICATIONS_CONTEXT);

export const useNotifications = () => {
  return useContext(NotificationsContext);
};

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
    // @ts-ignore
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

