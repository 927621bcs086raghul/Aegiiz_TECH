import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  loading: false,
  error: null,
  page: 1,
  pageSize: 8,
}

const coffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducers: {
    fetchCoffeeRequest(state) {
      state.loading = true
      state.error = null
    },
    fetchCoffeeSuccess(state, action) {
      state.loading = false
      state.items = action.payload
    },
    fetchCoffeeFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
    setPage(state, action) {
      state.page = action.payload
    },
    setPageSize(state, action) {
      state.pageSize = action.payload
      state.page = 1
    },
  },
})

export const { fetchCoffeeRequest, fetchCoffeeSuccess, fetchCoffeeFailure, setPage, setPageSize } = coffeeSlice.actions
export default coffeeSlice.reducer
