import React, { createContext, useContext, useState } from 'react';
import { UNotificationColor } from '../components/u-notification';
import { INotification } from '../notifications.typings';
import { UNotificationsContainer } from '../components/u-notifications-container';


interface INotificationContext {
  addNotification: (color: UNotificationColor, text: string) => void;
  primary: (text: string) => void;
  secondary: (text: string) => void;
  danger: (text: string) => void;
  dark: (text: string) => void;
  success: (text: string) => void;
  light: (text: string) => void;
  info: (text: string) => void;
}


const DEFAULT_NOTIFICATIONS_CONTEXT: INotificationContext = {
  addNotification: () => undefined,
  primary: () => undefined,
  secondary: () => undefined,
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

export const UNotificationsProvider = ({ children }: React.PropsWithChildren) => {
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


  function removeNotification(index: number): void {
    // @ts-ignore
    setNotifications([ ...notifications.filter((n, i) => i !== index) ]);
  }

  return <NotificationsContext.Provider
    value={ { addNotification, primary, secondary, danger, dark, success, light, info } }>
    { children }
    <UNotificationsContainer notifications={ notifications }
                             onToggleHandler={ removeNotification }></UNotificationsContainer>
  </NotificationsContext.Provider>;
};

