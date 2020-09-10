import { GET_DRINKS, PUT_DRINKS, CHANGE_DRINKS } from '../constans/drinksConstans';

export const loadDrinks = (arrCategStr) => ({
  type: GET_DRINKS,
  payload: arrCategStr,
});

export const filterDrinks = (arrCategStr) => ({
  type: CHANGE_DRINKS,
  payload: arrCategStr,
});

export const putDrinks = (object: any) => ({
  type: PUT_DRINKS,
  payload: object,
});
