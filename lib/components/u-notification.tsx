import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';


export enum UNotificationColor {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  info = 'info',
  light = 'light',
  dark = 'dark',
}


export interface UNotificationProps {
  color?: UNotificationColor;
  text: string;
  onToggle: () => void;
}


export function UNotification({ color = UNotificationColor.primary, text, onToggle }: UNotificationProps) {
  return <Alert variant={ color } dismissible onClose={ onToggle }>
    {/*<Alert.Heading>Oh snap! You got an error!</Alert.Heading>*/ }
    { text }
  </Alert>
}
