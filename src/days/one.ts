/* DAY 1 - 1 */
export function solver11(data: string[]) {
  void data;
  const resolveData = data.reduce((acc, line) => {
    // search first and last digit in line
    const firstDigit = line.match(/\d/)?.[0];
    const lastDigit = line.match(/\d/g)?.pop();
    // @ts-expect-error
    return acc + Number(firstDigit + lastDigit);
  }, 0);

  return resolveData;
}

/* DAY 1 - 2 */

export function solver12(data: string[]) {
  void data;
  const listOfNumbersAlpha = [
    `one`,
    `two`,
    `three`,
    `four`,
    `five`,
    `six`,
    `seven`,
    `eight`,
    `nine`,
  ];
  const listOfNumbersNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const resolveData = data.reduce((acc, line) => {
    let listOfIndex: number[] = [];

    function locations(substring, string) {
      var a: number[] = [],
        i = -1;
      while ((i = string.indexOf(substring, i + 1)) >= 0) a.push(i);
      return a;
    }

    listOfNumbersNum.forEach((num) => {
      const findedIndexs = locations(num.toString(), line);
      findedIndexs.forEach((findedIndex) => {
        if (findedIndex !== -1) listOfIndex.push(findedIndex);
      });
    });

    listOfNumbersAlpha.forEach((num) => {
      const findedIndexs = locations(num, line);
      findedIndexs.forEach((findedIndex) => {
        if (findedIndex !== -1) {
          if (findedIndex === 0) listOfIndex.push(-99);
          else listOfIndex.push(-findedIndex);
        }
      });
    });

    listOfIndex = listOfIndex.sort((a, b) => {
      if (a < 0) a *= -1;
      if (b < 0) b *= -1;

      if (a === 99) a = 0;
      if (b === 99) b = 0;

      return a - b;
    });
    // get first and last value of listOfIndex
    const firstIndex = listOfIndex[0];
    const lastIndex = listOfIndex[listOfIndex.length - 1];

    const resultInString = [firstIndex, lastIndex].reduce((acc2, index) => {
      if (index < 0 || index === -99) {
        if (index === -99) {
          index = 0;
        } else if (index < 0) {
          index *= -1;
        }
        // search the number in letter
        listOfNumbersAlpha.forEach((num, indexOfAlphaNumber) => {
          const findedIndexs = locations(num.toString(), line);

          findedIndexs.forEach((findedIndex) => {
            if (findedIndex === index) {
              acc2 += indexOfAlphaNumber + 1 + "";
            }
          });
        });
      } else {
        line[index] && (acc2 += line[index]);
      }
      return acc2;
    }, "");
    return acc + Number(resultInString);
  }, 0);

  return resolveData;
}
