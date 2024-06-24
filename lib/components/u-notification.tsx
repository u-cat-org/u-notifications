import 'bootstrap/dist/css/bootstrap.min.css';
import { UNotificationColor, UNotificationProps } from '../notifications.typings.ts';


export function UNotification({ color = UNotificationColor.primary, text, onToggle }: UNotificationProps) {
  return <div className={ `alert alert-${ color } alert-dismissible fade show` } role="alert">
    { text }
    <button onClick={ onToggle } type="button" className="btn-close" data-bs-dismiss="alert"
            aria-label="Close"></button>
  </div>
}
