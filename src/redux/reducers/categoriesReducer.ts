import { PUT_CATEGORIES, SET_CATEGORIES, ICategory } from '../constans/categoriesConstans';

const initialState: Array<ICategory> = [];

export const categories = (state = initialState, action: any) => {
  switch (action.type) {
    case PUT_CATEGORIES:
      return action.payload.map((elem: ICategory) => {
        elem.selected = true;
        return elem;
      });
    case SET_CATEGORIES:
      return state.map((elem) =>
        elem.strCategory === action.payload.strCategory && elem.selected
          ? { ...elem, selected: false }
          : elem.strCategory === action.payload.strCategory && !elem.selected
          ? { ...elem, selected: true }
          : elem
      );
    default:
      return state;
  }
};
