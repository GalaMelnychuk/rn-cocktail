export const LOADER_ON = '@loader/on';
export const LOADER_OFF = '@loader/off';

interface ILoaderOn {
  type: typeof LOADER_ON;
}

interface ILoaderOff {
  type: typeof LOADER_OFF;
}

export type LoaderActionsInterface = ILoaderOn | ILoaderOff;
