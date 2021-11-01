import { useEffect, useState } from 'react';
import propTypes from 'prop-types';

export function useFetch(userId) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    if (!userId) return setLoading(true);

    const getData = () => {
      fetch('http://localhost:3000/user/' + userId)
        .then((response) => response.json())
        .then((data) => {
          setData(data.data);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    };

    getData();
  }, [userId]);

  return { data, isLoading, hasError };
}

/**
 * PropTypes useFetch component
 */
useFetch.propTypes = {
  userId: propTypes.number.isRequired,
};
