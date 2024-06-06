import { UNotificationColor } from './components/u-notification';

export interface INotification {
  color: UNotificationColor;
  text: string;
  // TODO. closeable?
  // TODO. timerToClose?
}
