let files = [];

function main() {
  fetch("https://api.github.com/repos/xorvet/88x31/git/trees/da60b7df28f8dd45a64298cbc39e2a0821fb5632")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById('contain-gifs');
      (data['tree']).forEach((item) => {
        files.push(item['path']);
        const img = document.createElement('img');
        img.src = `${window.location.pathname}/gifs/${item['path']}`;
        container.appendChild(img);
      });
    }).catch((error) => {
      console.log(error);
    }); 
  
};main();

function Search() {
  const SearchTerm = document.querySelector("input").value;
  console.log(SearchTerm);

}
