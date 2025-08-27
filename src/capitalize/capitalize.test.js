import capitalize from "./capitalize.js";

test("capitalizes the first character", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("the rest of the string unchanged", () => {
  expect(capitalize("heLLo")).toBe("HeLLo");
});

test("works with single character", () => {
  expect(capitalize("a")).toBe("A");
});

test("handles empty string", () => {
  expect(capitalize("")).toBe("");
});
