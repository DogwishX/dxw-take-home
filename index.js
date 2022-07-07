import orgsData from "./data.js";

const searchBar = document.querySelector("input");
const searchButton = document.querySelector(".search__button");

searchButton.addEventListener("click", search);
searchBar.addEventListener("input", autocomplete);

// Search results

function search(event) {
  if (searchBar.value === "") return;

  clearSuggestionsList();
  event.preventDefault();
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

  listItem.classList.add("results__card");

  acronymEl.textContent = acronym;
  acronymEl.dataset.testid = acronym;
  acronymEl.classList.add("results__acronym");

  nameEl.textContent = name;
  nameEl.dataset.testid = name;
  nameEl.classList.add("results__name");

  listItem.append(acronymEl, nameEl);
  list.append(listItem);
}

// Autocomplete/Search suggestions

function autocomplete() {
  const suggestionsList = document.querySelector(".suggestions");

  if (searchBar.value === "") return clearSuggestionsList();

  handleQuery({
    list: suggestionsList,
    filter: filterSuggestions,
    render: renderSuggestion,
  });
}

function filterSuggestions() {
  return orgsData.filter((item) => itemMatchesStrictRegex(item));
}

function renderSuggestion(list, { acronym }) {
  const listItem = document.createElement("li");
  const suggestionButton = document.createElement("button");

  suggestionButton.innerHTML = `<i class="fa fa-search" aria-hidden="true"></i>
${acronym}`;
  suggestionButton.classList.add("suggestions__item");
  suggestionButton.addEventListener("click", (event) => {
    event.preventDefault();
    searchBar.value = acronym;
    search(event);
    list.innerHTML = "";
  });
  listItem.append(suggestionButton);
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

function clearSuggestionsList() {
  const suggestionsList = document.querySelector(".suggestions");
  suggestionsList.innerHTML = "";
}
