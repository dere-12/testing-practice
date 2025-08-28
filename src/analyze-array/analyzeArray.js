export default function analyzeArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array.");
  }

  if (arr.length === 0) {
    return {
      average: null,
      min: null,
      max: null,
      length: 0,
    };
  }

  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average,
    min,
    max,
    length: arr.length,
  };
}
