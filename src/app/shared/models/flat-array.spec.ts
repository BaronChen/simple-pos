import { IFlatArray, IFlatArrayItem, getFlatArray, addOrUpdateItem, removeItem} from './flat-array';


interface ITestObject extends IFlatArrayItem {
  name: string;
}


describe('FlatArray Test', () => {

  it('Should get empty result when input in null or undefined', () => {
    expect(getFlatArray(null)).toEqual({byId: {}, ids: []});
    expect(getFlatArray(undefined)).toEqual({byId: {}, ids: []});
  });

  it('Should get correct array with input', () => {
    const testInput: ITestObject[] = [1, 2, 3, 4, 5].map( (x: number): ITestObject => ({id: `${x}`, name: `${x}_name` }));

    const result: IFlatArray<ITestObject> = getFlatArray(testInput);

    expect(result.ids.length).toBe(5);

    expect(result.byId['2'].name).toBe('2_name');
    expect(result.byId['5'].name).toBe('5_name');
    expect(result.byId['1'].name).toBe('1_name');
    expect(result.byId['3'].name).toBe('3_name');
    expect(result.byId['4'].name).toBe('4_name');
  });

  it('Should add item to array', () => {
    const testInput: ITestObject[] = [1, 2, 3, 4, 5].map( (x: number): ITestObject => ({id: `${x}`, name: `${x}_name` }));
    const testArray: IFlatArray<ITestObject> = getFlatArray(testInput);
    const newInput: ITestObject = {
      id: '6',
      name: '6_name'
    };

    const result = addOrUpdateItem(testArray, newInput);

    expect(result.ids.length).toBe(6);
    expect(result.byId[newInput.id]).toEqual(newInput);
  });

  it('Should update item in array', () => {
    const testInput: ITestObject[] = [1, 2, 3, 4, 5].map( (x: number): ITestObject => ({id: `${x}`, name: `${x}_name` }));
    const testArray: IFlatArray<ITestObject> = getFlatArray(testInput);
    const updateInput: ITestObject = {
      id: '3',
      name: '3_name_update'
    };

    const result = addOrUpdateItem(testArray, updateInput);

    expect(result.ids.length).toBe(5);
    expect(result.byId[updateInput.id]).toEqual(updateInput);
  });

  it('Should remove item from array', () => {
    const testInput: ITestObject[] = [1, 2, 3, 4, 5].map( (x: number): ITestObject => ({id: `${x}`, name: `${x}_name` }));
    const testArray: IFlatArray<ITestObject> = getFlatArray(testInput);
    const idToRemove = '4';

    const result = removeItem(testArray, idToRemove);

    expect(result.ids.length).toBe(4);
    expect(result.byId[idToRemove]).toBeUndefined();
  });

});
