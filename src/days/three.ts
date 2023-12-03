interface NumberPlace {
  lineNumber: number;
  startIndex: number;
  numberLength: number;
  numberValue: number;
}

function findAllNumberPlaces(data: string[]): NumberPlace[] {
  return data.reduce((acc, line, index) => {
    const number = line.match(/\d+/g);
    if (number) {
      number.reduce((previousPosition, n) => {
        const startIndex = line.indexOf(n, previousPosition);
        acc.push({
          lineNumber: index,
          startIndex,
          numberLength: n.length,
          numberValue: parseInt(n, 10),
        });
        return startIndex + n.length;
      }, 0);
    }
    return acc;
  }, [] as NumberPlace[]);
}

/* DAY 3 - 1 */

function isAValidChar(char: string) {
  if (char === undefined) {
    return false;
  }

  if (char === ".") {
    return false;
  }

  if (!isNaN(parseInt(char, 10))) {
    return false;
  }

  return true;
}

function lineHasAValidChar(lineToTest: string, place: NumberPlace) {
  if (lineToTest === undefined) {
    return false;
  }
  for (
    let i = place.startIndex - 1;
    i <= place.startIndex + place.numberLength;
    i++
  ) {
    if (isAValidChar(lineToTest[i])) {
      return true;
    }
  }

  return false;
}

function upOfNumberIsValidChars(place: NumberPlace, data: string[]) {
  return lineHasAValidChar(data[place.lineNumber - 1], place);
}

function downOfNumberIsAValidChar(place: NumberPlace, data: string[]) {
  return lineHasAValidChar(data[place.lineNumber + 1], place);
}

function isAValidNumberForMotor(place: NumberPlace, data: string[]): boolean {
  const { lineNumber, startIndex, numberLength } = place;

  const rightOfNumber = isAValidChar(
    data[lineNumber][startIndex + numberLength]
  );

  const leftOfNumber = isAValidChar(data[lineNumber][startIndex - 1]);

  const upOfNumber = upOfNumberIsValidChars(place, data);

  const downOfNumber = downOfNumberIsAValidChar(place, data);

  return rightOfNumber || leftOfNumber || upOfNumber || downOfNumber;
}

export function solver31(data: string[]) {
  const numberPlaces = findAllNumberPlaces(data);

  return numberPlaces.reduce((acc, place) => {
    if (isAValidNumberForMotor(place, data)) {
      acc += place.numberValue;
    }
    return acc;
  }, 0);
}
