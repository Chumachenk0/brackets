module.exports = function check(str, bracketsConfig) {
  // your solution
  let isBalanced = true;
while (isBalanced && str.length > 0) {
  let foundMatch = false;
  for (let i = 0; i < bracketsConfig.length; i++) {
    let bracket = bracketsConfig[i];
    let pattern = bracket.join("");
    if (str.includes(pattern)) {
      str = str.replace(pattern, "");
      foundMatch = true;
      break;
    }
  }
  if (!foundMatch) {
    isBalanced = false;
  }
}
return isBalanced && str.length === 0;
}



