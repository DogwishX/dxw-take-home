import { describe, test, equal } from "./test-helpers.js";

const testList = document.querySelector("ul");
const testInput = document.querySelector("input");
const testButton = document.querySelector("button");

describe("When user searches based on acronym", () => {
  test("results length is 1 when only one result is found", () => {
    emulateInputAndClick("NS&I");
    return equal(testList.children.length, 1);
  });

  test("list should reset after each search", () => {
    emulateInputAndClick("NS&I");
    emulateInputAndClick("T"); // Returns 6 orgs that contain 'T'
    return equal(testList.children.length, 6);
  });

  test("the correct organisation name is being displayed", () => {
    emulateInputAndClick("WMI");
    const wmi = document.querySelector(
      "p[data-name='Workforce Management Information']"
    );

    return equal(wmi.textContent, "Workforce Management Information");
  });

  test("the correct acronym is being displayed", () => {
    emulateInputAndClick("VAT");
    const wmi = document.querySelector("h2[data-acronym='VAT']");

    return equal(wmi.textContent, "VAT");
  });
});

function emulateInputAndClick(text) {
  testInput.value = text;
  testButton.click();
}
