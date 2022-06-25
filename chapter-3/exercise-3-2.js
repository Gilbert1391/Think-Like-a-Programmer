/*
Exercise 3-2
Find the agent with the highest monthly median sales. The median
of a set of values is the "one in the middle". If there is an event amount of values
the median is the simple average of the two values in the middle.

example set; 10, 6, 2, 14, 7, 9 -> the values in the middle are 7 and 9, the median is 8
*/

const sales = [
  [1856, 498, 30924, 87478, 328, 2653, 387, 3754, 387587, 2873, 276, 32], // agent
  [5865, 5456, 3983, 6464, 9957, 4785, 3875, 3838, 4959, 1122, 7766, 2534], // agent
  [23, 55, 67, 99, 265, 376, 232, 223, 4546, 564, 4544, 3434], //agent
];

const getMedian = (values) => {
  values.sort((a, b) => a - b);
  const isvalueSetOdd = values.length % 2 === 1;
  if (isvalueSetOdd) {
    const middle = Math.round(values.length / 2);
    return values[middle - 1];
  } else {
    const middle = values.length / 2;
    const median = (values[middle - 1] + values[middle]) / 2;
    return median;
  }
};

const findHighestMedianSales = (sales) => {
  let highest = getMedian(sales[0]);
  sales.forEach((agent) => {
    const median = getMedian(agent);
    highest = median > highest ? median : highest;
  });
  return highest;
};
