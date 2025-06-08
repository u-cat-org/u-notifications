import { NOTIFICATION_EMITTER_NAME } from "../notifications.constants";
import { AddNotificationOptions, UNotificationColor } from "../notifications.typings";
import { notificationEmitter } from "../providers/u-notifications.emitter";

export function showDangerNotification(text: string, options?: AddNotificationOptions) {
  notificationEmitter.emit(NOTIFICATION_EMITTER_NAME, { color: UNotificationColor.danger, text, options });
}
  
export function showSuccessNotification(text: string, options?: AddNotificationOptions) {
  notificationEmitter.emit(NOTIFICATION_EMITTER_NAME, { color: UNotificationColor.success, text, options });
}

export function showInfoNotification(text: string, options?: AddNotificationOptions) {
  notificationEmitter.emit(NOTIFICATION_EMITTER_NAME, { color: UNotificationColor.info, text, options });
}

export function showWarningNotification(text: string, options?: AddNotificationOptions) {
  notificationEmitter.emit(NOTIFICATION_EMITTER_NAME, { color: UNotificationColor.warning, text, options });
}

export function showPrimaryNotification(text: string, options?: AddNotificationOptions) {
  notificationEmitter.emit(NOTIFICATION_EMITTER_NAME, { color: UNotificationColor.primary, text, options });
}

export function showSecondaryNotification(text: string, options?: AddNotificationOptions) {
  notificationEmitter.emit(NOTIFICATION_EMITTER_NAME, { color: UNotificationColor.secondary, text, options });
}

export function showDarkNotification(text: string, options?: AddNotificationOptions) {
  notificationEmitter.emit(NOTIFICATION_EMITTER_NAME, { color: UNotificationColor.dark, text, options });
}

export function showLightNotification(text: string, options?: AddNotificationOptions) {
  notificationEmitter.emit(NOTIFICATION_EMITTER_NAME, { color: UNotificationColor.light, text, options });
}

export function showNotification(color: UNotificationColor, text: string, options?: AddNotificationOptions) {
  notificationEmitter.emit(NOTIFICATION_EMITTER_NAME, { color, text, options });
}