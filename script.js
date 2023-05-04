function Search() {
  const SearchTerm = document.querySelector("input").value;
  console.log(SearchTerm);
  fetch('/gifs/')
    .then(response => response.text())
    .then((data) => {
      console.log(data)
    })
    .catch(error => console.error(error));
}
