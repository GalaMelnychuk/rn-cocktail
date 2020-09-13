import { put, call, takeEvery } from 'redux-saga/effects';
import { putDrinks } from '../redux/actions/drinksActions';
import { loaderOff, loaderOn } from '../redux/actions/loaderActions';
import { GET_DRINKS } from '../redux/constans/drinksConstans';
import { requests } from '../services/requests';

function* drinksSagaWorker(action: any) {
  try {
    yield put(loaderOn());
    for (const item of action.payload) {
      const response = yield call(requests.getCoctails, item);
      yield put(putDrinks(response));
    }
  } catch (error) {
    console.log('error', error);
  } finally {
    yield put(loaderOff());
  }
}

export default function* drinksSagaWatcher() {
  yield takeEvery(GET_DRINKS, drinksSagaWorker);
}
