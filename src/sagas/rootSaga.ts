import { all, fork } from 'redux-saga/effects';
import categoriesSaga from './categoriesSaga';
import drinksSaga from './drinksSaga';

export default function* rootSaga() {
  yield all([fork(categoriesSaga), fork(drinksSaga)]);
}
