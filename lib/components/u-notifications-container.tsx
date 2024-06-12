import { UNotification } from './u-notification';
import styles from './u-notifications-container.module.css';
import { INotification } from '../notifications.typings';


export interface UNotificationContainerProps {
  notifications: INotification[];
  onToggleHandler: (index: number) => void;
}


export function UNotificationsContainer({ notifications, onToggleHandler }: UNotificationContainerProps) {
  return <div className={ styles.container }>
    { notifications.map((n, i) =>
      <div key={ i }>
        <UNotification { ...n } onToggle={ () => onToggleHandler(i) }/>
      </div>
    ) }
  </div>;
}
