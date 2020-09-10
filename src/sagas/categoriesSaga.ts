import { put, call, takeEvery } from 'redux-saga/effects';
import { GET_CATEGORIES } from '../redux/constans/categoriesConstans';
import { putCategories } from '../redux/actions/categoriesActions';
import { loadDrinks } from '../redux/actions/drinksActions';
import { requests } from '../services/requests';

function* categoriesSagaWorker(action: any) {
  try {
    const data = yield call(requests.getCategories);
    yield put(putCategories(data.data.drinks));
    const arr = data.data.drinks.map((elem) => elem.strCategory);
    // console.log('arr', arr);
    yield put(loadDrinks(arr));
  } catch (error) {
    console.log(error, error);
  }
}

export default function* categoriesSagaWatcher() {
  yield takeEvery(GET_CATEGORIES, categoriesSagaWorker);
}
