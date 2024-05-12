/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let chunk = "";
  const splited = [];
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === " ") {
      if (chunk.length != 0) {
        splited.push(chunk);
      }
      chunk = "";
    } else {
      chunk += ch;
    }
  }

  if (chunk.length != 0) {
    splited.push(chunk);
  }

  return splited.reverse().join(" ");
};
