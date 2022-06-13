import { useEffect, useState } from 'react';

const useFetch = <T, Q>(service: (query: Q) => Promise<T[]>, query: Q) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const onFetch = async (query: Q) => {
    setLoading(true);
    setError(null);

    try {
      const items = await service(query);
      setData(items);
    } catch (error) {
      setError(error as Error);
    }

    setLoading(false);
  };

  useEffect(() => {
    onFetch(query);
  }, [query]);

  return {
    loading,
    data,
    error,
  };
};

export default useFetch;
