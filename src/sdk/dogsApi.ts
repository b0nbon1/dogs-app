import {client} from './client';

export const fetchDogs = (paginate = 10): Promise<string[]> =>
  client
    .get(`/breeds/image/random/${paginate}`)
    .then(response => response?.data?.message);
