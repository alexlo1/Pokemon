const front = document.getElementById('front');
const back = document.getElementById('back');

function createCard(request) {
  const data = JSON.parse(request.response);
  if(request.status >= 200 && request.status < 400) {
    const name = document.createElement('div');
    name.content = "#" + data.id + " " + data.name;

    const img = document.createElement('img');
    img.src = data.sprites.front_default;
    front.appendChild(img);
    back.appendChild(img);
  }
}

var request = new XMLHttpRequest();
request.open('GET', "https://pokeapi.co/api/v2/pokemon/9", true);
request.onload = () => {
  createCard(request);
};
request.send();
