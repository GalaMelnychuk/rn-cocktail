import { LOADER_OFF, LOADER_ON, LoaderActionsInterface } from '../constans/loaderConstans';

const initialState: boolean = false;

export default (state = initialState, action: LoaderActionsInterface): boolean => {
  switch (action.type) {
    case LOADER_ON:
      return true;
    case LOADER_OFF:
      return false;
    default:
      return state;
  }
};
