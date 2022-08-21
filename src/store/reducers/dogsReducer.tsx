import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IDogsListState {
  data: string[];
  loading: boolean;
  moreLoading: boolean;
  isListEnd: boolean;
  error: string | null;
}

const initialState: IDogsListState = {
  data: [],
  loading: false,
  moreLoading: false,
  isListEnd: false,
  error: null,
};

export const dogsListSlice = createSlice({
  name: 'dogs-list',
  initialState,
  reducers: {
    dogslistRequestReducer: (state, action: PayloadAction<{page: number}>) => {
      if (action.payload.page === 1) {
        state.loading = true;
      } else {
        state.moreLoading = true;
      }
    },
    dogsListSuccessReducer: (
      state,
      action: PayloadAction<{page: number; data: string[]}>,
    ) => {
      state.data = [...state.data, ...action.payload.data];
      state.loading = false;
      state.moreLoading = false;
      state.error = '';
    },
    dogsListFailureReducer: state => {
      state.error = 'something went wrong while fetching';
      state.loading = false;
      state.moreLoading = false;
    },
  },
});

export const {
  dogslistRequestReducer,
  dogsListSuccessReducer,
  dogsListFailureReducer,
} = dogsListSlice.actions;

export default dogsListSlice.reducer;
