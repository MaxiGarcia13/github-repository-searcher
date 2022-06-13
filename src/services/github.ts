import { cacheFetch } from '../config/cache-fetch';

export const getRepositories = (since: number = 0) => cacheFetch(`https://api.github.com/repositories?since=${since}`);
