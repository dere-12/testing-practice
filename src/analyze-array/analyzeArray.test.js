import analyzeArray from "./analyzeArray.js";

test("correctly analyzes properties for a simple array", () => {
  const obj = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(obj).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("handles an array with one element", () => {
  const obj = analyzeArray([5]);
  expect(obj).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
});

test("handles an array with negative numbers", () => {
  const obj = analyzeArray([-1, -5, -2]);
  expect(obj).toEqual({
    average: -8 / 3,
    min: -5,
    max: -1,
    length: 3,
  });
});

test("handles an array with mixed positive and negative numbers", () => {
  const obj = analyzeArray([-1, 10, -5, 2]);
  expect(obj).toEqual({
    average: 6 / 4,
    min: -5,
    max: 10,
    length: 4,
  });
});

test("returns correct properties for an empty array", () => {
  const obj = analyzeArray([]);
  expect(obj).toEqual({
    average: null,
    min: null,
    max: null,
    length: 0,
  });
});

test("throws an error for non-array input", () => {
  expect(() => analyzeArray(null)).toThrow("Input must be an array.");
  expect(() => analyzeArray(undefined)).toThrow("Input must be an array.");
  expect(() => analyzeArray(123)).toThrow("Input must be an array.");
  expect(() => analyzeArray("string")).toThrow("Input must be an array.");
  expect(() => analyzeArray({})).toThrow("Input must be an array.");
  expect(() => analyzeArray([])).not.toThrow("Input must be an array.");
});
