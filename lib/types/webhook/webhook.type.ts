import { IModelWrapper } from '../common.types';
import { TPlatform } from '../platform/platform.type';

export type TWebhookMessage =
  | 'unhandled'
  | 'unknown'
  | 'app.install'
  | 'app.uninstall'
  | 'app.subscription.created'
  | 'app.subscription.updated'
  | 'app.subscription.suspended'
  | 'app.subscription.deleted'
  | 'app.payment.created'
  | 'app.payment.completed'
  | 'app.payment.updated'
  | 'app.payment.refunded'
  | 'app.payment.failed'
  | 'app.payment.deleted'
  | 'app.checkout.created'
  | 'app.checkout.completed'
  | 'app.checkout.cancelled'
  | 'product.created'
  | 'product.updated'
  | 'product.deleted'
  | 'customer.created'
  | 'customer.updated'
  | 'customer.deleted'
  | 'cart.created'
  | 'cart.updated'
  | 'cart.deleted'
  | 'order.created'
  | 'order.updated'
  | 'order.deleted'
  | 'shimpent.created'
  | 'shimpent.updated'
  | 'shimpent.deleted';

export interface IWebhookMessage extends IModelWrapper {
  type: TWebhookMessage;
  platformUserId: string;
  appId: string;
  platform: TPlatform;
  rawPayload?: any;
  payload?: any;
  id?: string;
}
