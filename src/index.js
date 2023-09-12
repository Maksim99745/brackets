module.exports = function check(str, bracketsConfig) {

  const openingSymbols = [];
  const closingSymbols = [];

  for (let config of bracketsConfig) {
    const [a, b] = config;
    openingSymbols.push(a);
    closingSymbols.push(b);
  }

  const arr = str.split('');
  const newArr = [];
  let equalitiTestCount = 0;

  const stack = [];
  const countTheSame = 0;

  for (const bracket of arr) {
    if (openingSymbols.includes(bracket) && closingSymbols.includes(bracket)) {
      equalitiTestCount += 1;
  }
  }

        if (equalitiTestCount % 2 === 0) {
          for (const samebracket of arr) {
             if (openingSymbols.includes(samebracket) && closingSymbols.includes(samebracket)) {
               continue;
             } else {
               newArr.push(samebracket);
             }
        }
      } else {
          return false;
      }



  for (const bracket of newArr) {

    if (openingSymbols.includes(bracket)) {
      stack.push(bracket);
    } else if (closingSymbols.includes(bracket)) {
      if (closingSymbols.indexOf(bracket) !== openingSymbols.indexOf(stack.pop())) {
        return false;
      }
    }
  }

  return stack.length === 0;
}