export const diffDateInMin = (ts: number) => {
  return Math.round((Date.now() - ts) / 1000 / 60);
};
