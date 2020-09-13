import { put, call, takeEvery } from 'redux-saga/effects';
import { GET_CATEGORIES, ICategory } from '../redux/constans/categoriesConstans';
import { putCategories } from '../redux/actions/categoriesActions';
import { loaderOff, loaderOn } from '../redux/actions/loaderActions';
import { loadDrinks } from '../redux/actions/drinksActions';
import { requests } from '../services/requests';

function* categoriesSagaWorker() {
  try {
    yield put(loaderOn());
    const data = yield call(requests.getCategories);
    yield put(putCategories(data.data.drinks));
    const arr = data.data.drinks.map((elem: ICategory) => elem.strCategory);
    yield put(loadDrinks(arr));
  } catch (error) {
    console.log(error, error);
  } finally {
    yield put(loaderOff());
  }
}

export default function* categoriesSagaWatcher() {
  yield takeEvery(GET_CATEGORIES, categoriesSagaWorker);
}
