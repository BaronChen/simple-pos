import { IFlatArrayItem } from '../../shared/models/flat-array';

export interface IBasketItem extends IFlatArrayItem {
  quantity: number;
}

export interface IBasketItemDetail {
  readonly id: string;
  readonly name: string;
  readonly quantity: number;
  readonly subtotal: number;
}
