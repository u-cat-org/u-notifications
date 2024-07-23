import React, { createContext, MutableRefObject, useContext } from 'react';


export interface INotification {
  color: UNotificationColor;
  text: string;
  __id: string;
  closeTimeout?: number;
}


export interface UNotificationProps {
  color?: UNotificationColor;
  text: string;
  onToggle: () => void;
}


export type UNotificationsPosition =
  'rightBottom'
  | 'leftBottom'
  | 'rightTop'
  | 'leftTop'
  | 'centerTop'
  | 'centerBottom';


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


export interface INotificationContext {
  primary: (text: string, options?: AddNotificationOptions) => void;
  secondary: (text: string, options?: AddNotificationOptions) => void;
  warning: (text: string, options?: AddNotificationOptions) => void;
  danger: (text: string, options?: AddNotificationOptions) => void;
  dark: (text: string, options?: AddNotificationOptions) => void;
  success: (text: string, options?: AddNotificationOptions) => void;
  light: (text: string, options?: AddNotificationOptions) => void;
  info: (text: string, options?: AddNotificationOptions) => void;
}


export interface UNotificationsProviderProps extends React.PropsWithChildren {
  position?: UNotificationsPosition;
  closeTimeout?: number;
  containerStyles?: React.CSSProperties;
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

export const DEFAULT_CLOSE_TIMEOUT = 5000;


export interface AddNotificationOptions {
  closeTimeout?: number;
}


export interface UNotificationContainerProps {
  position: UNotificationsPosition;
  containerStyles?: React.CSSProperties;
  closeTimeout?: number;
  addNotificationRef: MutableRefObject<((color: UNotificationColor, text: string, options?: AddNotificationOptions | undefined) => void) | undefined>;
}
