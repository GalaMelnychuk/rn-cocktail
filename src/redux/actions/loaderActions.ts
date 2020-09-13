import { LOADER_ON, LOADER_OFF, LoaderActionsInterface } from '../constans/loaderConstans';

export const loaderOn = (): LoaderActionsInterface => ({
  type: LOADER_ON,
});

export const loaderOff = (): LoaderActionsInterface => ({
  type: LOADER_OFF,
});
