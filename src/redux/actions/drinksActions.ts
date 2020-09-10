import { GET_DRINKS, PUT_DRINKS, CHANGE_DRINKS } from '../constans/drinksConstans';

export const loadDrinks = (arrCategStr: Array<string>) => ({
  type: GET_DRINKS,
  payload: arrCategStr,
});

export const filterDrinks = (arrCategStr: Array<string>) => ({
  type: CHANGE_DRINKS,
  payload: arrCategStr,
});

export const putDrinks = (object: any) => ({
  type: PUT_DRINKS,
  payload: object,
});
