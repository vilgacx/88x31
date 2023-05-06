document.querySelector("input").style.display = "initial";

let files = [];

fetch("https://api.github.com/repos/xorvet/88x31/git/trees/main")
  .then((response) => response.json())
  .then((data) => data['tree'][1]['url'])
  .then((url) => {
    fetch(url)
      .then((result) => result.json())
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
  }).catch((error) => {
    console.log(error);
  });


function Search() {
  const SearchTerm = (document.querySelector("input").value).toLowerCase();
  const container = document.getElementById('contain-gifs');
  container.replaceChildren();
  files.forEach((item) => {
    if (item.includes(SearchTerm) === true) {
      const img = document.createElement('img');
      img.src = `${window.location.pathname}gifs/${item}`;
      container.appendChild(img);
    };
  });
}
