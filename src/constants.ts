export const cookie = `session=${process.env.SESSION_COOKIE}`;
export const year = process.env.AOC_YEAR || "2023";
export const day = process.env.AOC_DAY || new Date().getUTCDate();
export const inputsFolder = "inputs";
const path = `${inputsFolder}/${year}/${day}`;
const pathWithoutDay = `${inputsFolder}/${year}/`;
export const puzzleFile = `${path}.txt`;
export const instructionsFile = `${path}.md`;
export const specFile = (i: number, d = day) =>
  `${pathWithoutDay}${d}-spec-${i}.txt`;
export const hxc = Boolean(process.env.AOC_HXC) || false;
