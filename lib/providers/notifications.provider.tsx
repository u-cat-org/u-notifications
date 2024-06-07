import React, {
  createContext,
  useContext,
  useState
} from 'react';
import { UNotificationColor } from '../components/u-notification';
import { INotification } from '../notifications.typings';
import { UNotificationsContainer } from '../components/u-notifications-container';


interface INotificationContext {
  addNotification: (color: UNotificationColor, text: string) => void;
}


const DEFAULT_NOTIFICATIONS_CONTEXT: INotificationContext = { addNotification: () => undefined };
const NotificationsContext = createContext(DEFAULT_NOTIFICATIONS_CONTEXT);

export const useNotifications = () => {
  return useContext(NotificationsContext);
};

export const NotificationsProvider = ({ children }: React.PropsWithChildren) => {
  const [ notifications, setNotifications ] = useState<INotification[]>([]);

  function addNotification(color: UNotificationColor, text: string): void {
    setNotifications([ ...notifications, { color, text } ]);
  }

  function removeNotification(index: number): void {
    // @ts-ignore
    setNotifications([ ...notifications.filter((n, i) => i !== index) ]);
  }

  return <NotificationsContext.Provider value={ { addNotification } }>
    { children }
    <UNotificationsContainer notifications={ notifications }
                             onToggleHandler={ removeNotification }></UNotificationsContainer>
  </NotificationsContext.Provider>;
};

