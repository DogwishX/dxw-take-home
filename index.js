import orgsData from "./data.js";

const searchBar = document.querySelector("input");
const searchButton = document.querySelector(".search__button");

searchButton.addEventListener("click", search);
searchBar.addEventListener("input", autocomplete);

// Search results

function search() {
  const resultsList = document.querySelector(".results");

  handleQuery({
    list: resultsList,
    filter: filterOrgData,
    render: renderOrgCard,
  });

  if (resultsList.children.length === 0)
    resultsList.innerHTML = "No organisations found";
  searchBar.value = "";
}

function filterOrgData() {
  return orgsData.filter((org) =>
    org.acronym.toLowerCase().includes(searchBar.value.toLowerCase())
  );
}

function renderOrgCard(list, { acronym, name }) {
  const listItem = document.createElement("li");
  const acronymEl = document.createElement("h2");
  const nameEl = document.createElement("p");

  acronymEl.textContent = acronym;
  acronymEl.dataset.testid = acronym;

  nameEl.textContent = name;
  nameEl.dataset.testid = name;

  listItem.append(acronymEl, nameEl);
  list.append(listItem);
}

// Autocomplete/Search suggestions

function autocomplete() {
  const suggestionsList = document.querySelector(".suggestions");

  if (searchBar.value === "") return (suggestionsList.innerHTML = "");

  handleQuery({
    list: suggestionsList,
    filter: filterSuggestions,
    render: renderSuggestion,
  });
}

function filterSuggestions(latestValue) {
  return orgsData.filter((item) => itemMatchesStrictRegex(item, latestValue));
}

function renderSuggestion(list, { acronym }) {
  const listItem = document.createElement("li");

  listItem.innerText = acronym;
  listItem.classList.add("suggestions__item");
  listItem.addEventListener("click", () => {
    searchBar.value = acronym;
    search();
    list.innerHTML = "";
  });

  list.append(listItem);
}

// Helper functions

function handleQuery({ list, filter, render }) {
  // Clear previous search results
  list.innerHTML = "";

  const results = filter();
  results.forEach((item) => render(list, item));
}

function itemMatchesStrictRegex({ acronym }) {
  const strictRegex = new RegExp(`^${searchBar.value}`, "i");
  return strictRegex.test(acronym);
}
