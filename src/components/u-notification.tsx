import { Alert } from 'reactstrap';


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
  return <Alert
    color={ color }
    toggle={ onToggle }
    transition={ {
      timeout: 500
    } }
  >{ text }</Alert>;
}
