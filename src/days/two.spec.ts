import { specFile } from "../constants";
import { solver21, solver22 } from "./two";
import { readPuzzle } from "../libs";
import { describe, expect, test } from "vitest";

describe("AoC", () => {
  test("Spec #4", async () => {
    const input = readPuzzle(specFile(4, 2));
    expect(solver21(input)).toEqual(8);
  }, 333_333_333);

  test("Spec #7", async () => {
    const input = readPuzzle(specFile(7, 2));
    expect(solver22(input)).toEqual(2286);
  }, 333_333_333);
});
