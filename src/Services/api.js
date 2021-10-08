export const getUserById = (userId) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/user/${userId}`)
      .then((result) => result.json())
      // .then((data) => resolve(data))
      .then((data) => resolve(data.data))
      .catch((error) => reject(error));
  });
};

export const getUserActivity = (userId) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/user/${userId}/activity`)
      .then((result) => result.json())
      .then((data) => resolve(data.data))
      .catch((error) => reject(error));
  });
};

export const getUserAverage = (userId) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/user/${userId}/average-sessions`)
      .then((result) => result.json())
      .then((data) => resolve(data.data))
      .catch((error) => reject(error));
  });
};

export const getUserPerformance = (userId) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/user/${userId}/performance`)
      .then((result) => result.json())
      .then((data) => resolve(data.data))
      .catch((error) => reject(error));
  });
};