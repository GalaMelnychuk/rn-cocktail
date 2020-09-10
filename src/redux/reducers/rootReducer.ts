import { combineReducers } from 'redux';
import { drinksReducer } from './drinksReducer';
import { categories } from './categoriesReducer';
import { ICategory } from '../constans/categoriesConstans';
import { IPropsDrinkGroup } from '../constans/drinksConstans';

export const rootReducer = combineReducers({
  categories,
  drinks: drinksReducer,
});

export interface RootState {
  categories: Array<ICategory>;
  drinks: Array<IPropsDrinkGroup>;
}
