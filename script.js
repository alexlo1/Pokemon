function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const front = document.getElementById('front');
const back = document.getElementById('back');

function createCard(request) {
  const data = JSON.parse(request.response);
  if(request.status >= 200 && request.status < 400) {

    const front_title = document.createElement('div');
    front_title.textContent = "#" + data.id + " " + capFirst(data.name);
    front_title.style.height = "10%";

    const front_img = document.createElement('img');
    front_img.src = data.sprites.front_default;
    front_img.style.height = "90%";

    front.appendChild(front_title);
    front.appendChild(front_img);

    const back_title = document.createElement('div');
    back_title.textContent = "#" + data.id + " " + capFirst(data.name);

    const back_img = document.createElement('img');
    back_img.src = data.sprites.front_default;
    back.appendChild(back_title);
    back.appendChild(back_img);

  }
}

var request = new XMLHttpRequest();
request.open('GET', "https://pokeapi.co/api/v2/pokemon/9", true);
request.onload = () => {
  createCard(request);
};
request.send();
