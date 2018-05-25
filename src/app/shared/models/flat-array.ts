export interface IFlatArray<T> {
  readonly byId: {
    readonly [id: string]: T
  };
  ids: ReadonlyArray<string>;
}

export interface IFlatArrayItem {
  readonly id: string;
}

export const getEmptyFlatArray = <T extends IFlatArrayItem>(): IFlatArray<T> => ({ byId: {}, ids: []});

export const getFlatArray = <T extends IFlatArrayItem>(array: T[]|undefined|null): IFlatArray<T> => {

  if (!array) {
    return getEmptyFlatArray<T>();
  }

  const ids: ReadonlyArray<string> = array.map(x => x.id);

  const byId: { [id: string]: T} = {};
  array.map((a) => {
    byId[a.id] = a;
  });

  const flatArray: IFlatArray<T> = {
    byId,
    ids
  };
  return flatArray;
};
