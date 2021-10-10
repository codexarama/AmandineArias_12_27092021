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

  return { data, isLoading,hasError };
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

//     fetch()
//       .then((result) => result.json())
//       .then((get) => {
//         setData(get.data.data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError(true);
//         setLoading(false);
//       });

//     fetch();
//   }, [url]);

//   return { data, isLoading, hasError };
// }


////////////////////////////////////////////
////////// RETURN undefined ////////////////
////////////////////////////////////////////

// import { useEffect, useState } from 'react';

// export function useFetch(url) {

//   const [data, setData] = useState({});
//   const [isLoading, setLoading] = useState(false);
//   const [hasError, setError] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     fetch('http://localhost:3000/user/')
//       .then((result) => result.json())
//       .then((get) => {
//         setData(get.data.data);
//         setLoading(false);
//       })
// .catch(() => {
//   setError(true);
//   setLoading(false);
// });
//   }, [url]);

//   return { data, isLoading, hasError };
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

// export const getUserDataById = (userId) => new Promise((resolve, reject) => {
//   fetch(`http://localhost:3000/user/${userId}`)
//     .then((result) => result.json())
//     // .then((data) => resolve(data))
//     .then((data) => resolve(data.data))
//     .catch((error) => reject(error));
// });

// export const getUserActivity = (userId) => new Promise((resolve, reject) => {
//   fetch(`http://localhost:3000/user/${userId}/activity`)
//     .then((result) => result.json())
//     .then((data) => resolve(data.data))
//     .catch((error) => reject(error));
// });

// export const getUserAverage = (userId) => new Promise((resolve, reject) => {
//   fetch(`http://localhost:3000/user/${userId}/average-sessions`)
//     .then((result) => result.json())
//     .then((data) => resolve(data.data))
//     .catch((error) => reject(error));
// });

// export const getUserPerformance = (userId) => new Promise((resolve, reject) => {
//   fetch(`http://localhost:3000/user/${userId}/performance`)
//     .then((result) => result.json())
//     .then((data) => resolve(data.data))
//     .catch((error) => reject(error));
// });
