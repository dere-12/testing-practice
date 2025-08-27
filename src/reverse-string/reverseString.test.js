import reverseString from "./reverseString.js";

test("reverses single word", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test("reverses multiple words", () => {
  expect(reverseString("Good morning!")).toBe("!gninrom dooG");
});

test("works with single character", () => {
  expect(reverseString("A")).toBe("A");
});

test("handles empty string", () => {
  expect(reverseString("")).toBe("");
});
