import {
  GET_CATEGORIES,
  PUT_CATEGORIES,
  SET_CATEGORIES,
  ICategory,
} from '../constans/categoriesConstans';

export const getCategories = () => ({
  type: GET_CATEGORIES,
});

export const putCategories = (data: any) => ({
  type: PUT_CATEGORIES,
  payload: data,
});

export const setCategories = (categoryItem: IActionCateg) => ({
  type: SET_CATEGORIES,
  payload: categoryItem,
});

export interface IActionCateg {
  type: string;
  payload?: ICategory;
}
