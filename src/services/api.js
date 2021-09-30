export const getUserById = (userId) => {
  return new Promise((resolve, reject) => {
    fetch (`http://localhost:3000/user/${userId}`)
    .then ((result) => result.json())
    .then((data) => console.log(data))
  });
};
