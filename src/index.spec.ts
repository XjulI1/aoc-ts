import { specFile } from "@/constants";
import { solver } from "@/index";
import { readPuzzle } from "@/libs";
import { describe, expect, test } from "vitest";

describe("AoC", () => {
  test("Spec #1", async () => {
    const input = readPuzzle(specFile(3)); // vérifier l'id de la spec à tester ! (inputs/year)
    expect(solver(input)).toEqual(-Infinity);
  }, 333_333_333); // mes chiffres porte-bonheur, à la discrétion du développeur, mais c'est aussi un timeout :)
});
