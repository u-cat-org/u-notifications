import { UNotification } from './u-notification';
import styles from './u-notifications-container.module.css';
import { INotification, UNotificationsPosition } from '../notifications.typings';


export interface UNotificationContainerProps {
  notifications: INotification[];
  onToggleHandler: (n: INotification) => void;
  position: UNotificationsPosition;
}


export function UNotificationsContainer({
                                          notifications,
                                          onToggleHandler,
                                          position = 'rightBottom'
                                        }: UNotificationContainerProps) {
  return <div className={ ` ${ styles.container } ${ styles[position] } ` }>
    { notifications.map((n, i) =>
      <div key={ i }>
        <UNotification { ...n } onToggle={ () => onToggleHandler(n) }/>
      </div>
    ) }
  </div>;
}
