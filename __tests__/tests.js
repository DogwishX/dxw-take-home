import { describe, test, equal } from "./test-helpers.js";

const testResultList = document.querySelector(".results");
const testInput = document.querySelector("input");
const testButton = document.querySelector(".search__button");

describe("When user searches based on acronym", () => {
  test("results length is 1 when only one result is found", () => {
    emulateInputAndClick("NS&I");
    return equal(testResultList.children.length, 1);
  });

  test("list should reset after each search", () => {
    emulateInputAndClick("NS&I");
    emulateInputAndClick("T"); // Returns 6 orgs that contain 'T'
    return equal(testResultList.children.length, 8);
  });

  test("the correct organisation name is being displayed", () => {
    emulateInputAndClick("WMI");
    const wmi = document.querySelector(
      "p[data-testid='Workforce Management Information']"
    );

    return equal(wmi.textContent, "Workforce Management Information");
  });

  test("the correct acronym is being displayed", () => {
    emulateInputAndClick("VAT");
    const wmi = document.querySelector("h2[data-testid='VAT']");

    return equal(wmi.textContent, "VAT");
  });

  test("searches should be case insensitive", () => {
    emulateInputAndClick("sRo");
    return equal(testResultList.children.length, 1);
  });
});

function emulateInputAndClick(text) {
  testInput.value = text;
  testButton.click();
}
