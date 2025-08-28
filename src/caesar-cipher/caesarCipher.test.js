import caesarCipher from "./caesarCipher.js";

test("shifts letters correctly with a positive number/shift", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("wraps around from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("preserves case", () => {
  expect(caesarCipher("HeLlO", 3)).toBe("KhOoR");
});

test("ignores punctuation and spaces", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("handles large shift/number", () => {
  expect(caesarCipher("abc", 27)).toBe("bcd");
});

test("handles negative shift/number", () => {
  expect(caesarCipher("bcd", -1)).toBe("abc");
});

test("handles large negative shift/number", () => {
  expect(caesarCipher("abc", -27)).toBe("zab");
});

test("returns empty string for empty input", () => {
  expect(caesarCipher("", 5)).toBe("");
});

test("handles zero shift", () => {
  expect(caesarCipher("Hello", 0)).toBe("Hello");
});
