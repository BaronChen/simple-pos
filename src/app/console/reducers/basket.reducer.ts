import { Action } from '@ngrx/store';


export interface IBasketState {
  totalPrice: number;
  selectedItems: string[];
}

export const initialState: IBasketState = {
  totalPrice: 0,
  selectedItems: []
};

export function reducer(state = initialState, action: Action): IBasketState {
  switch (action.type) {
    default:
      return state;
  }
}
