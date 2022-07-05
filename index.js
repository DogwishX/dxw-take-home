const input = document.querySelector("input");
const searchButton = document.querySelector("button");

searchButton.addEventListener("click", handleClick);

function handleClick() {
  const body = document.querySelector("body");
  const newParagraph = document.createElement("p");
  newParagraph.textContent = input.value;
  body.append(newParagraph);
}
