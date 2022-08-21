import axios, {AxiosInstance} from 'axios';

const httpClient = (baseURL: string): AxiosInstance => {
  const baseClient = axios.create({baseURL, timeout: 30000});
  baseClient.interceptors.request.use((request: any) => {
    return request;
  });

  return baseClient;
};

export const client = httpClient('https://dog.ceo/api');
