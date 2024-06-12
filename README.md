# @uCat - u-notifications

Package for a simple notifications management for a React Framework.

# Usage

1. Add `NotificationsProvider` into your App:
    ```tsx
   import { UNotificationsProvider } from '@u-cat/u-notifications';

   
    export function App() {
      return (
        <UNotificationsProvider>
          <AuthProvider>
            <UModalProvider>
              <Routes/>
            </UModalProvider>
          </AuthProvider>
        </UNotificationsProvider>
      );
    }
    ```
2. Call for `useNotifications()` hook to use it inside your Components:
   ```tsx
      import { UNotificationColor, useNotifications } from '@u-cat/u-notifications';
   
   
      const { addNotification, info } = useNotifications();
   
      addNotification(UNotificationColor.danger, 'Some danger here');
      info('Information displayed with this notification')
   ```