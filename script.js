let files = [];

function main() {
  fetch("https://api.github.com/repos/xorvet/88x31/git/trees/6812e3bb73c335e246364147ef2cf4fd2f1ff9f2")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById('contain-gifs');
      (data['tree']).forEach((item) => {
        files.push(item['path']);
        const img = document.createElement('img');
        img.src = `${window.location.pathname}gifs/${item['path']}`;
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
