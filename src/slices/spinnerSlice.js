import { createSlice } from "@reduxjs/toolkit"

const spinnerSlice = createSlice({
  name: "Spinner",
  initialState: {
    isLoading: false
  },
  reducers: {
    fetching: (state) => {
      state.isLoading = true
    },
    fetchingCompleted: (state) => {
      state.isLoading = false
    }
  }
})

export const { fetching, fetchingCompleted } = spinnerSlice.actions
export default spinnerSlice.reducer
