export const GET_DRINKS = '@drinks/GET_DRINKS';
export const PUT_DRINKS = '@drinks/PUT_DRINKS';
export const CHANGE_DRINKS = '@drinks/CHANGE_DRINKS';
export const FILTERED_DRINKS = '@drinks/FILTERED_DRINKS';

export interface IPropsDrinkGroup {
  id: string;
  name: string;
  coctails: Array<ICoctailItem>;
}

export interface ICoctailItem {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}
