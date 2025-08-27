export default function reverseString(str) {
  if (!str) return "";

  const strArr = str.split(" ").reverse();
  let reversedStr = "";
  let result = [];

  strArr.forEach((str) => {
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }

    result.push(reversedStr);
    reversedStr = "";
  });

  return result.join(" ");
}
