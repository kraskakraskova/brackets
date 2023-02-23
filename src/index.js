module.exports = function check(str, bracketsConfig) {
  var pairOfBrackets = {};
  var openingBrackets = [];
  var similarBrackets = [];

  bracketsConfig.forEach((element) => {
    openingBrackets.push(element[0]);
    pairOfBrackets[element[0]] = element[1];
    if (element[0] === element[1]) {
      similarBrackets.push(element[0]);
    }
  });

  var stack = [];

  for (i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];
    if (openingBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
      if (
        currentSymbol === topElement &&
        similarBrackets.includes(currentSymbol)
      ) {
        stack.pop();
        stack.pop();
      }
    } else {
      if (stack.length === 0) {
        return false;
      }

      if (pairOfBrackets[topElement] === currentSymbol) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
