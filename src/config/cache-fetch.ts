import { RepositoryItemProps } from '../domain/repositories';
import { diffDateInMin } from './date';
import { getStorage, setStorage } from './local-storage';

interface CachedResponses {
  url: string;
  ts: number;
  items: RepositoryItemProps[];
}

const CACHED_TIME = 30;

export const cacheFetch = async (url: string) => {
  const cachedResponses: Record<string, CachedResponses> | null = getStorage(url);

  if (cachedResponses !== null) {
    const response = cachedResponses[url];
    if (diffDateInMin(response.ts) < CACHED_TIME) {
      return response.items;
    }
  }

  const response = await fetch(url);
  if (response.ok) {
    const items = await response.json();
    setStorage(url, {
      ...cachedResponses,
      [url]: {
        url,
        items,
        ts: Date.now(),
      },
    });

    return items;
  }

  throw new Error(`Failed Request ${response.status}`);
};
