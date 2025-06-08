import mitt from 'mitt';
import { AddNotificationOptions, UNotificationColor } from '../notifications.typings';

type Events = {
  notify: {
    color: UNotificationColor;
    text: string;
    options?: AddNotificationOptions;
  };
};

export const notificationEmitter = mitt<Events>();

