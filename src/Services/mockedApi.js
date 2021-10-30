import { useEffect, useState } from 'react';
import propTypes from 'prop-types';

// export function useFetch(userId, model) {
export function useFetch(userId) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    if (userId === undefined) return setLoading(true);
    // if (!userId) return setLoading(true);

    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/user/' + userId);
        const data = await response.json();
        // ??? TENTATIVE...
        // return new model(setData(data.data));
        setData(data.data)
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [userId]);
  // }, [userId, model]);

  return { data, isLoading, hasError };
}

/**
 * PropTypes useFetch component
 */
useFetch.propTypes = {
  userId: propTypes.number.isRequired,
};

////////// Cannot read properties of undefined (reading 'data') ////////////////
// import { useEffect, useState } from 'react';

// export function useFetch(url) {
//   const [data, setData] = useState({});
//   const [isLoading, setLoading] = useState(true);
//   const [hasError, setError] = useState(false);

//   useEffect(() => {
//     if (!url) return setLoading(true);

//     fetch(url)
//       .then((result) => result.json())
//       .then(() => {
//         setData((data.data));
//         setLoading(false);
//       })
//       // .then((resolve) => {
//       //   setData(resolve(data.data));
//       //   setLoading(false);
//       // })
//       .catch(() => {
//         setError(true);
//         setLoading(false);
//       });

//     fetch(url);
//   }, [url, data.data]);

//   return { data, isLoading, hasError };
// }
