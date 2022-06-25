const isDatasetSorted = (data) => {
  let result = true;
  const lastElement = data.length - 1;
  for (let i = 0; i < data.length; i++) {
    if (i === lastElement) break;
    let curr = data[i];
    let next = data[i + 1];
    if (curr > next) result = false;
  }
  return result;
};
