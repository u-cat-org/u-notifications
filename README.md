# @uCat - u-notifications

Package for a simple notifications management for a React Framework.

# Usage

1. Add `UNotificationsProvider` into your App. You can set a container position with a specific setting.
    ```tsx
   import { UNotificationsProvider } from '@u-cat/u-notifications';

   
    export function App() {
      return (
        /* Default value for position is Bottom Right, 
          check the typings to see the possible values */
        <UNotificationsProvider position={'topRight'}>
          {/*Your app structure goes here, 
            and it becomes possible 
            to call for `useNotifications()` hook inside */}
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
      import { useNotifications } from '@u-cat/u-notifications';


      const { info } = useNotifications();
      info('Information displayed with this notification');
   ```