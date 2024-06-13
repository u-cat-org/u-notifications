import 'bootstrap/dist/css/bootstrap.min.css';


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
  return <div className={ `alert alert-${ color } alert-dismissible fade show` } role="alert">
    { text }
    <button onClick={onToggle} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>

  // return <Alert variant={ color } dismissible onClose={ onToggle }>
  //   {/*<Alert.Heading>Oh snap! You got an error!</Alert.Heading>*/ }
  //   { text }
  // </Alert>
}
