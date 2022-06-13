import { cacheFetch } from '../config/cache-fetch';

export const getRepositories = <T>(since: number = 0): Promise<T[]> =>
  cacheFetch(`https://api.github.com/repositories?since=${since}`);
