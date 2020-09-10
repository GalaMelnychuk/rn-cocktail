import React from 'react';
import { store } from './redux/reducers/store';
import { Provider } from 'react-redux';
import { content } from './navigation/AppNavigation';

export const App = () => {
  return <Provider store={store}>{content}</Provider>;
};
