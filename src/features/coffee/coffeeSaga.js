import { all, call, put, takeLatest } from 'redux-saga/effects'
import { fetchCoffeeApi } from '../../api/coffeeApi'
import { fetchCoffeeFailure, fetchCoffeeRequest, fetchCoffeeSuccess } from './coffeeSlice'

function* handleFetchCoffee() {
  try {
    const data = yield call(fetchCoffeeApi)
    yield put(fetchCoffeeSuccess(data))
  } catch (err) {
    yield put(fetchCoffeeFailure(err.message || 'Failed to fetch'))
  }
}

function* watchFetchCoffee() {
  yield takeLatest(fetchCoffeeRequest.type, handleFetchCoffee)
}

export default function* rootSaga() {
  yield all([watchFetchCoffee()])
}
