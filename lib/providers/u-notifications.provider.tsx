import { useMemo, useRef } from 'react';
import {
  AddNotificationOptions,
  UNotificationColor,
  UNotificationsProviderProps
} from '../notifications.typings';
import { UNotificationsContainer } from '../components/u-notifications-container';
import { NotificationsContext } from './../notifications.typings.ts';


export const UNotificationsProvider = ({
                                         position,
                                         closeTimeout,
                                         containerStyles,
                                         children
                                       }: UNotificationsProviderProps) => {
  const addNotificationRef = useRef<(color: UNotificationColor, text: string, options?: AddNotificationOptions) => void>();

  const notify = (color: UNotificationColor) => (text: string, options: AddNotificationOptions = {}) => {
    addNotificationRef.current?.(color, text, options);
  };

  const providerValue = useMemo(() => ({
    primary: notify(UNotificationColor.primary),
    secondary: notify(UNotificationColor.secondary),
    warning: notify(UNotificationColor.warning),
    danger: notify(UNotificationColor.danger),
    dark: notify(UNotificationColor.dark),
    success: notify(UNotificationColor.success),
    light: notify(UNotificationColor.light),
    info: notify(UNotificationColor.info)
  }), []);

  return <NotificationsContext.Provider value={ providerValue }>
    { children }
    <UNotificationsContainer closeTimeout={ closeTimeout }
                             addNotificationRef={ addNotificationRef }
                             containerStyles={ containerStyles }
                             position={ position || 'rightBottom' }/>
  </NotificationsContext.Provider>;
};