import { useEffect, useState } from 'react';

export function useFetch(url) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    if (!url) return setLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data.data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, isLoading, hasError };
}

////////// Failed to execute 'fetch' on 'Window' ////////////////
////////// 1 argument required, but only 0 present ////////////////

// import { useEffect, useState } from 'react';

// export function useFetch(url) {
//   const [data, setData] = useState({});
//   const [isLoading, setLoading] = useState(true);
//   const [hasError, setError] = useState(false);

//   useEffect(() => {
//     if (!url) return setLoading(true);

//     fetch(url)
//       .then((result) => result.json())
//       .then((resolve) => {
//         setData(resolve(data.data));
//         setLoading(false);
//       })
//       .catch(() => {
//         setError(true);
//         setLoading(false);
//       });

//     fetch(url);
//   }, [url]);

//   return { data, isLoading, hasError };
// }
