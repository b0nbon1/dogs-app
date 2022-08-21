import {client} from './client';

export interface IBreed {
  name: string;
  subBreed?: [string];
}

export const fetchBreeds = (): Promise<IBreed[]> =>
  client.get('/breeds/list/all').then(response => response.data);

export const fetchDogByBreed = (breed: string): Promise<string[]> =>
  client.get(`/breed/${breed}/images`).then(response => response.data);

export const fetchDogBySubBreed = (
  breed: string,
  subbreed: string,
): Promise<string[]> =>
  client
    .get(`/breed/${breed}/${subbreed}/images`)
    .then(response => response.data);
