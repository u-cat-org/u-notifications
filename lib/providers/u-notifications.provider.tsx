import { useState } from 'react';
import {
  AddNotificationOptions,
  DEFAULT_CLOSE_TIMEOUT,
  INotification,
  UNotificationColor,
  UNotificationsProviderProps
} from '../notifications.typings';
import { UNotificationsContainer } from '../components/u-notifications-container';
import { NotificationsContext } from './../notifications.typings.ts';
import { v4 as uuidv4 } from 'uuid';


export const UNotificationsProvider = ({
                                         position,
                                         closeTimeout,
                                         children
                                       }: UNotificationsProviderProps) => {
  const [ notifications, setNotifications ] = useState<INotification[]>([]);

  // TimeRegistry could be potentially used for preventing notifications close
  // https://github.com/u-cat-org/u-notifications/issues/22
  const timeRegistry = new Map<string, NodeJS.Timeout>();

  function __addNotification(color: UNotificationColor, text: string, options: AddNotificationOptions): void {
    const newNotification: INotification = {
      color,
      text,
      __id: uuidv4(),
      ...options
    };

    setNotifications([ ...notifications, newNotification ]);

    const timeout = options?.closeTimeout || closeTimeout || DEFAULT_CLOSE_TIMEOUT;

    if (timeout !== 0) {
      timeRegistry.set(newNotification.__id, setTimeout(() => {
        removeNotification(newNotification);
      }, timeout));
    }
  }

  function primary(text: string, options: AddNotificationOptions = {}): void {
    __addNotification(UNotificationColor.primary, text, options);
  }

  function secondary(text: string, options: AddNotificationOptions = {}): void {
    __addNotification(UNotificationColor.secondary, text, options);
  }

  function danger(text: string, options: AddNotificationOptions = {}): void {
    __addNotification(UNotificationColor.danger, text, options);
  }

  function dark(text: string, options: AddNotificationOptions = {}): void {
    __addNotification(UNotificationColor.dark, text, options);
  }

  function success(text: string, options: AddNotificationOptions = {}): void {
    __addNotification(UNotificationColor.success, text, options);
  }

  function light(text: string, options: AddNotificationOptions = {}): void {
    __addNotification(UNotificationColor.light, text, options);
  }

  function info(text: string, options: AddNotificationOptions = {}): void {
    __addNotification(UNotificationColor.info, text, options);
  }

  function warning(text: string, options: AddNotificationOptions = {}): void {
    __addNotification(UNotificationColor.warning, text, options);
  }

  function removeNotification(notification: INotification): void {
    setNotifications(
      (notifications) => [ ...notifications.filter((n) => n.__id !== notification.__id) ]
    );
  }

  return <NotificationsContext.Provider
    value={ { primary, secondary, warning, danger, dark, success, light, info } }>
    { children }
    <UNotificationsContainer notifications={ notifications }
                             onToggleHandler={ removeNotification }
                             position={ position || 'rightBottom' }></UNotificationsContainer>
  </NotificationsContext.Provider>;
};

