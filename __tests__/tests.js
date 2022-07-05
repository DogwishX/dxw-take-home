const testInput = document.querySelector("input");
const testButton = document.querySelector("button");

describe("When user clicks search", () => {
  test("random string", () => {
    testInput.value = "test";

    testButton.click();
    const newParagraph = document.querySelector("p");
    return equal(newParagraph.textContent, "test");
  });
});
