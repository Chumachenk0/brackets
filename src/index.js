module.exports = function check(str, bracketsConfig) {
  // your solution
  const stack = [];
  const opening_brackets = new Set();
  const closing_brackets = new Set();

  for (let i = 0; i < bracketsConfig.length; i++) {
    opening_brackets.add(bracketsConfig[i][0]);
    closing_brackets.add(bracketsConfig[i][1]);
  }

  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (opening_brackets.has(c)) {
      stack.push(c);
    } else if (closing_brackets.has(c)) {
      if (stack.length === 0) {
        return false;
      }
      const top = stack.pop();
      if (!bracketsConfig.some((b) => b[0] === top && b[1] === c)) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
