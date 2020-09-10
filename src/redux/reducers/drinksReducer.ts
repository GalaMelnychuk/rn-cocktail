import { PUT_DRINKS, CHANGE_DRINKS, ICoctailItem } from '../constans/drinksConstans';
import { ICategory } from '../constans/categoriesConstans';

interface IAction {
  type: string;
  payload: ICoctailItem;
}

export const drinksReducer = (state = [], action: IAction) => {
  switch (action.type) {
    case PUT_DRINKS:
      return [...state, action.payload];
    case CHANGE_DRINKS:
      return state.filter((elem: ICategory) => elem.selected);
    default:
      return state;
  }
};
