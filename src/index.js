module.exports = function toReadable (number) {
  numArray = Array.from(String(number), Number);
  let stringArray = [
    ['zero','one','two','three','four','five','six','seven','eight','nine'],
    ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],
    ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']]

  switch (numArray.length) {
    case 1:
      return stringArray[0][number];
    case 2:
      return numArray[0] === 1 ? stringArray[1][numArray[1]] : numArray[1] === 0 ? stringArray[2][numArray[0]] :
      stringArray[numArray.length][numArray[0]] + ' ' + stringArray[0][numArray[1]];
    case 3:
      return stringArray[0][numArray[0]] + ' hundred' + 
      (numArray[1] === 0 && numArray[2] === 0 ? '' : numArray[1] === 0 && numArray[2] !== 0 ?
      ' ' + stringArray[0][numArray[2]] : numArray[1] === 1 ? ' ' + stringArray[1][numArray[2]] : numArray[2] === 0 ? 
      ' ' + stringArray[2][numArray[1]] : ' ' + stringArray[2][numArray[1]] + ' ' + stringArray[0][numArray[2]]);
  }
}