export const getUserById = (userId) => {
  // return new Promise((resolve, reject) => {
  fetch(`http://localhost:3000/user/${userId}`)
    .then((result) => result.json())
    .then((data) => {
      data.find((data) => data.id === userId);
      // data.map(({...data}) => data.userId)
    });
  // .then((data) => console.log(data));
  // .then(
  //   (data) => {
  //     data.ok ? resolve(data) : reject(new Error('error'));
  //   },
  //   (error) => {
  //     reject(new Error(error.message));
  //   }
  // ); // undefined
  // });
};

// import React, { useEffect, useState } from 'react';

// const GetUserById = (userId) => {
//     const [data, setData] = useState(null);
//     useEffect(() => {
//       const fetchData = async () => {
//         const response = await fetch(`http://localhost:3000/user/${userId}`);
//         const newData = await response.json();
//         setData(newData);
//       };
//       fetchData();
//     }, [userId, userId.id]);
//     return data ? <div>{data.name}</div> : null;
// };

// export default GetUserById;
