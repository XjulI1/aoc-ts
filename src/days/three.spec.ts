import { specFile } from "../constants";
import { solver31 } from "./three";
import { readPuzzle } from "../libs";
import { describe, expect, test } from "vitest";

describe("AoC", () => {
  test("Spec #2", async () => {
    const input = readPuzzle(specFile(2, 3));
    expect(solver31(input)).toEqual(4361);
  }, 333_333_333);
});
