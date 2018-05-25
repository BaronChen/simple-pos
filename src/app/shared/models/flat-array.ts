export interface IFlatArray<T> {
  readonly byId: {
    readonly [id: string]: T;
  };
  readonly ids: ReadonlyArray<string>;
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

export const addOrUpdateItem = <T extends IFlatArrayItem>(original: IFlatArray<T>, item: T): IFlatArray<T> => {
  return {
    byId: Object.assign({}, original.byId, { [item.id]: item }),
    ids: original.byId[item.id] ? [...original.ids] : [...original.ids, item.id]
  };
};

export const removeItem = <T extends IFlatArrayItem>(original: IFlatArray<T>, id: string): IFlatArray<T> => {
  return getFlatArray<T>(original.ids.filter(x => x !== id).map(x => original.byId[x]));
};


