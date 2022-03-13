import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  types: {
    data: null,
    error: null
  }
}

const typesSlice = createSlice({
  name: "types",
  initialState: initialState,
  reducers: {
    getTypesRequest: (state) => {
      state.types = initialState.types
    },
    getTypesSuccess: (state, { payload }) => {
      state.types.data = payload
    },
    getTypesError: (state, { payload }) => {
      state.types.error = payload
    }
  }
})

export const { getTypesSuccess, getTypesError, getTypesRequest } =
  typesSlice.actions
export default typesSlice.reducer
