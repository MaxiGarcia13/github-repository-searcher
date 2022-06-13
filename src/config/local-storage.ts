const getKey = (name: string): string => `__app__${name}__`;

export const getStorage = <T>(name: string): T | null => {
  const key = getKey(name);
  const item = localStorage.getItem(key);

  return item !== null ? JSON.parse(item) : null;
};

export const setStorage = <T>(name: string, value: T): void => {
  const key = getKey(name);
  const stringValue = typeof value === 'string' ? value : JSON.stringify(value);

  localStorage.setItem(key, stringValue);
};
