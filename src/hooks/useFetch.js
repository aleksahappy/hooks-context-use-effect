import {useState, useEffect} from 'react';

export default function useFetch(url, initialData) {
  const [data, setData] = useState(initialData);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (response.ok) {
          try {
            const data = await response.json();
            setData(data);
          } catch(error) {
            throw new Error(`Ошибка парсинга: ${error}`);
          }
        } else {
          throw new Error(`Ошибка ответа: ${response.status} ${response.statusText}`);
        }
      } catch(error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return [{data, isLoading, error}];
}
