import { useState, useEffect } from "react";

interface FetchResponse<T> {
  data?: T;
  loading: boolean;
  error?: string;
}

const useFetch = <T>(url: string): FetchResponse<T> => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch {
        setError("An error occurred!");
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
