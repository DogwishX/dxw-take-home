import orgsData from "./data.js";

const searchBar = document.querySelector("input");
const searchButton = document.querySelector("button");
const resultsList = document.querySelector("ul");

searchButton.addEventListener("click", search);

function search() {
  // Clear previous search results
  resultsList.innerHTML = "";

  const searchResults = filterOrgData();
  searchResults.forEach((item) => createOrgCard(item));
}

function filterOrgData() {
  return orgsData.filter((org) =>
    org.acronym.toLowerCase().includes(searchBar.value.toLowerCase())
  );
}

function createOrgCard({ acronym, name }) {
  const listItem = document.createElement("li");
  const acronymEl = document.createElement("h2");
  const nameEl = document.createElement("p");

  acronymEl.textContent = acronym;
  acronymEl.dataset.acronym = acronym;

  nameEl.textContent = name;
  nameEl.dataset.name = name;

  listItem.append(acronymEl, nameEl);
  resultsList.append(listItem);
}
