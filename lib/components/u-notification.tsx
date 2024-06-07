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


// color={ color }
//     toggle={ onToggle }
//     transition={ {
//       timeout: 500
//     } }
export function UNotification({ color = UNotificationColor.primary, text, onToggle }: UNotificationProps) {
  return <div onClick={ onToggle }
  >{ text } { color }</div>;
}
