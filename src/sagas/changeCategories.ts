import { put, call, takeEvery } from 'redux-saga/effects';
import { putDrinks } from '../redux/actions/drinksActions';
import { CHANGE_DRINKS } from '../redux/constans/drinksConstans';
import { requests } from '../services/requests';

function* changeDrinksSagaWorker(action: any) {
  try {
    for (const item of action.payload) {
      const response = yield call(requests.getCoctails, item);
      yield put(putDrinks(response));
    }
  } catch (error) {
    console.log('error', error);
  }
}

export default function* changeDrinksSagaWatcher() {
  yield takeEvery(CHANGE_DRINKS, changeDrinksSagaWorker);
}
