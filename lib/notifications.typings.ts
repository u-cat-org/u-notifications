import { UNotificationColor } from './components/u-notification';
import React from 'react';


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

export type UNotificationsPosition = 'rightBottom' | 'leftBottom' | 'rightTop' | 'leftTop' | 'centerTop' | 'centerBottom';


export interface UNotificationsProviderProps extends React.PropsWithChildren {
  position: UNotificationsPosition;
}