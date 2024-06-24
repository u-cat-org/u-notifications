import React, { createContext, useContext } from 'react';


export interface INotification {
  color: UNotificationColor;
  text: string;
  // TODO. closeable?
  // TODO. timerToClose?
}


export interface INotificationContext {
  primary: (text: string) => void;
  secondary: (text: string) => void;
  warning: (text: string) => void;
  danger: (text: string) => void;
  dark: (text: string) => void;
  success: (text: string) => void;
  light: (text: string) => void;
  info: (text: string) => void;
}


export type UNotificationsPosition =
  'rightBottom'
  | 'leftBottom'
  | 'rightTop'
  | 'leftTop'
  | 'centerTop'
  | 'centerBottom';


export interface UNotificationsProviderProps extends React.PropsWithChildren {
  position: UNotificationsPosition;
}


export enum UNotificationColor {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  info = 'info',
  light = 'light',
  dark = 'dark',
}


export interface UNotificationProps {
  color?: UNotificationColor;
  text: string;
  onToggle: () => void;
}


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

export const NotificationsContext = createContext(DEFAULT_NOTIFICATIONS_CONTEXT);

export const useNotifications = () => {
  return useContext(NotificationsContext);
};