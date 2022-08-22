import {AppDispatch} from '..';
import {fetchDogs} from '../../sdk/dogsApi';
import {
  dogsListFailureReducer,
  dogslistRequestReducer,
  dogsListSuccessReducer,
} from '../reducers/dogsReducer';

export const getAllDogsAction =
  (page = 0) =>
  async (dispatch: AppDispatch): Promise<string[]> => {
    try {
      dispatch(dogslistRequestReducer({page}));
      const res = await fetchDogs(page === 1 ? 10 : 5);
      dispatch(dogsListSuccessReducer({page, data: res}));
      return res;
    } catch (error) {
      dispatch(dogsListFailureReducer());
      return [];
    }
  };
