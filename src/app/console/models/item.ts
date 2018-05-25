import { IFlatArrayItem } from '../../shared/models/flat-array';

export interface IItem extends IFlatArrayItem {
  name: string;
  imageUrl: string;
  price: number;
}
