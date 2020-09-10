import { GET_CATEGORIES, PUT_CATEGORIES, SET_CATEGORIES } from '../constans/categoriesConstans';

export const getCategories = () => ({
  type: GET_CATEGORIES,
});

export const putCategories = (data: any) => ({
  type: PUT_CATEGORIES,
  payload: data,
});

export const setCategories = (categoryItem) => ({
  type: SET_CATEGORIES,
  payload: categoryItem,
});
