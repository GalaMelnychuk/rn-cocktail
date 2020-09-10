import { combineReducers } from 'redux';
import { drinksReducer } from './drinksReducer';
import { categories } from './categoriesReducer';

export const rootReducer = combineReducers({
  categories,
  drinks: drinksReducer,
});
