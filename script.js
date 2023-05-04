let files = {};

function main() {
  fetch()
    .then((response) => response.json())
    .then((data) => { files = data })
    .catch((error) => { console.log(error) });
};main();

function Search() {
  const SearchTerm = document.querySelector("input").value;
  console.log(SearchTerm,files);
}
