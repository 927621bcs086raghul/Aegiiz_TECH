import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../features/coffee/coffeeSaga'
import coffeeReducer from '../features/coffee/coffeeSlice'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store
