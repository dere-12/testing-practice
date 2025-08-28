export default function caesarCipher(str, shift) {
  shift = shift % 26;
  if (shift < 0) {
    shift += 26;
  }

  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char >= "A" && char <= "Z") {
      let charCode = char.charCodeAt(0);
      charCode =
        ((charCode - "A".charCodeAt(0) + shift) % 26) + "A".charCodeAt(0);
      result += String.fromCharCode(charCode);
    } else if (char >= "a" && char <= "z") {
      let charCode = char.charCodeAt(0);
      charCode =
        ((charCode - "a".charCodeAt(0) + shift) % 26) + "a".charCodeAt(0);
      result += String.fromCharCode(charCode);
    } else {
      result += char;
    }
  }

  return result;
}
