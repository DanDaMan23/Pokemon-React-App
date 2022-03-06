import { createSlice } from "@reduxjs/toolkit"

const spinnerSlice = createSlice({
  name: "Spinner",
  initialState: {
    isLoading: false,
    isLoadingMore: false
  },
  reducers: {
    fetching: (state) => {
      state.isLoading = true
    },
    fetchingCompleted: (state) => {
      state.isLoading = false
    },
    fetchingMore: (state) => {
      state.isLoadingMore = true
    },
    fetchingMoreCompleted: (state) => {
      state.isLoadingMore = false
    }
  }
})

export const { fetching, fetchingCompleted, fetchingMore, fetchingMoreCompleted } = spinnerSlice.actions
export default spinnerSlice.reducer
