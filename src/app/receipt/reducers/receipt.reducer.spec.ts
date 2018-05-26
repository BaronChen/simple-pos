import { reducer, initialState } from './receipt.reducer';
import { ShowReceipt, BackToConsole, UpdateAmount } from '../actions/receipt.actions';

describe('Receipt Reducer', () => {
  describe('ShowReceipt action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('BackToConsole action', () => {
    it('should return the initial state', () => {
      const action = new ShowReceipt();

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('BackToConsole action', () => {
    it('should return the initial state', () => {
      const action = new BackToConsole();

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('UpdateAmount action', () => {
    it('should update amount', () => {
      const testAmount = 9999;
      const action = new UpdateAmount(testAmount);

      const result = reducer(initialState, action);

      expect(result).not.toBe(initialState);
      expect(result.amount).toEqual(testAmount);
    });
  });

});
