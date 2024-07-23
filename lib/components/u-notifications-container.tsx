import { useEffect, useState } from 'react';
import { UNotification } from './u-notification';
import styles from './u-notifications-container.module.css';
import {
  UNotificationContainerProps,
  INotification,
  UNotificationColor,
  DEFAULT_CLOSE_TIMEOUT, AddNotificationOptions
} from '../notifications.typings.ts';
import { v4 as uuidv4 } from 'uuid';


export function UNotificationsContainer({
                                          addNotificationRef,
                                          closeTimeout = DEFAULT_CLOSE_TIMEOUT,
                                          position = 'rightBottom',
                                          containerStyles = {}
                                        }: UNotificationContainerProps) {
  const [ notifications, setNotifications ] = useState<INotification[]>([]);

  useEffect(() => {
    if (addNotificationRef) {
      // @ts-ignore
      // TODO. Find the way to do not assign readonly `current` property.
      addNotificationRef.current = __addNotification;
    }
  }, [ addNotificationRef ]);

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

    setNotifications((notifications) => [ ...notifications, newNotification ]);

    const timeout = options?.closeTimeout || closeTimeout;

    if (timeout !== 0) {
      timeRegistry.set(newNotification.__id, setTimeout(() => {
        removeNotification(newNotification);
      }, timeout));
    }
  }

  function removeNotification(notification: INotification): void {
    setNotifications(
      (notifications) => [ ...notifications.filter((n) => n.__id !== notification.__id) ]
    );
  }

  return (
    <div className={ ` ${ styles.container } ${ styles[position] } ` } style={ containerStyles }>
      { notifications.map((n, i) =>
        <div key={ i }>
          <UNotification { ...n } onToggle={ () => removeNotification(n) }/>
        </div>
      ) }
    </div>
  );
}