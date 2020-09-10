import { put, call, select, takeEvery } from 'redux-saga/effects';
import { putDrinks } from '../redux/actions/drinksActions';
import { GET_DRINKS } from '../redux/constans/drinksConstans';
import { requests } from '../services/requests';

function* drinksSagaWorker(action: any) {
  try {
    for (const item of action.payload) {
      const response = yield call(requests.getCoctails, item);
      yield put(putDrinks(response));
    }
  } catch (error) {
    console.log('error', error);
  }
}

export default function* drinksSagaWatcher() {
  yield takeEvery(GET_DRINKS, drinksSagaWorker);
}
