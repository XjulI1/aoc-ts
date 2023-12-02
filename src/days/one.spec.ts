import { specFile } from "../constants";
import { solver11, solver12 } from "./one";
import { readPuzzle } from "../libs";
import { describe, expect, test } from "vitest";

describe("AoC", () => {
  test("Spec #1", async () => {
    const input = readPuzzle(specFile(1));
    expect(solver11(input)).toEqual(142);
  }, 333_333_333);

  test("Spec #17", async () => {
    const input = readPuzzle(specFile(17));
    expect(solver12(["dsxnfkjn2vtwofivethree2"])).toEqual(22);
    expect(solver12(["dsxnfkjntwovtwofivethreetwo"])).toEqual(22);
    expect(solver12(input)).toEqual(281);
  }, 333_333_333);
});
