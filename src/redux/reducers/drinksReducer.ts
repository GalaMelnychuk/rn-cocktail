import { PUT_DRINKS, CHANGE_DRINKS } from '../constans/drinksConstans';

const initialState = {
  drinks: [],
};

export const drinksReducer = (state = [], action) => {
  switch (action.type) {
    case PUT_DRINKS:
      return [...state, action.payload];
    case CHANGE_DRINKS:
      return state.filter((elem) => elem.selected);
    default:
      return state;
  }
};
