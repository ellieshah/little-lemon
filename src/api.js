function fetchData(date) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['17:00', '18:00', '19:00', '20:00', '21:00']);
    }, 1000);
  });
}

function submitAPI(formData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
}

export { fetchData, submitAPI };