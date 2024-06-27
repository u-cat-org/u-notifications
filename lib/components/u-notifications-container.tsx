import { UNotification } from './u-notification';
import styles from './u-notifications-container.module.css';
import { UNotificationContainerProps } from '../notifications.typings.ts';


export function UNotificationsContainer({
                                          notifications,
                                          onToggleHandler,
                                          position = 'rightBottom',
                                          containerStyles = {}
                                        }: UNotificationContainerProps) {
  return <div className={ ` ${ styles.container } ${ styles[position] } ` } style={ containerStyles }>
    { notifications.map((n, i) =>
      <div key={ i }>
        <UNotification { ...n } onToggle={ () => onToggleHandler(n) }/>
      </div>
    ) }
  </div>;
}
