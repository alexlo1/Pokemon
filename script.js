const MAX = 151;

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let requestData = [];

const front = document.getElementById('front');
const back = document.getElementById('back');
const banner = document.getElementById('banner');

function createCard(request) {
  const data = JSON.parse(request.response);
  if(request.status >= 200 && request.status < 400) {

    const front_title = document.createElement('div');
    front_title.textContent = "#" + data.id + " " + capFirst(data.name);
    front_title.style.height = "10%";
    front.appendChild(front_title);

    const front_img = document.createElement('img');
    front_img.src = data.sprites.front_default;
    front_img.style.height = "90%";
    front.appendChild(front_img);

    document.getElementById('back-title').textContent =
      "#" + data.id + " " + capFirst(data.name);

    const back_img = document.createElement('img');
    back_img.src = data.sprites.front_default;
    back_img.style.display = "block";
    back_img.style.height = "90%";
    back_img.style.margin = "auto";
    document.getElementById('back-image').appendChild(back_img);

    let type_list = "";
    data.types.forEach((t) => {
      type_list += capFirst(t.type.name);
      type_list += ", ";
    });
    type_list = type_list.substring(0, type_list.length-2);
    document.getElementById('back-type').textContent = "Types: " + type_list;

    document.getElementById('back-size').textContent =
      "Height: " + data.height/10 + " m, Weight: " + data.weight/10 + " kg";

  }
}

function clearCard() {
  document.getElementById('front').innerHTML = "";
  document.getElementById('back-image').innerHTML = "";
  document.getElementById('back-title').innerHTML = "";
  document.getElementById('back-type').innerHTML = "";
  document.getElementById('back-size').innerHTML = "";
}

function updateCard(n) {
  if(requestData[n] == null) {
    let request = new XMLHttpRequest();
    request.open('GET', `https://pokeapi.co/api/v2/pokemon/${n}`, true);
    request.onload = () => {
      requestData[n] = request;
      clearCard();
      createCard(request);
    };
    request.send();
  } else {
    clearCard();
    createCard(requestData[n]);
  }
}

function createBannerImage(request, preview) {
  const data = JSON.parse(request.response);
  if(request.status >= 200 && request.status < 400) {
    const preview_img = document.createElement('img');
    preview_img.src = data.sprites.front_default;
    preview_img.style.height = "100%";
    document.getElementById(preview).appendChild(preview_img);
  }
}

function clearBannerImage(i) {
  document.getElementById(`preview-${i}`).innerHTML = "";
}

function updateBanner(n) {
  for(let i = n-2; i <= n+2; i++) {
    let index = i > 0 ? (i <= MAX ? i : i - MAX) : i + MAX;
    if(requestData[index] == null) {
      let request = new XMLHttpRequest();
      request.open('GET', `https://pokeapi.co/api/v2/pokemon/${index}`, true);
      request.onload = () => {
        requestData[n] = request;
        clearBannerImage(i-n);
        createBannerImage(request, `preview-${i-n}`);
      };
    } else {
      clearBannerImage(i-n);
      createBannerImage(requestData[index], `preview-${i-n}`);
    }
  }
}

function getAllRequests(n) {
  for(let i = n-2; i <= n+2; i++) {
    let index = i > 0 ? (i <= MAX ? i : i - MAX) : i + MAX;
    if(requestData[index] == null) {
      let request = new XMLHttpRequest();
      request.open('GET', `https://pokeapi.co/api/v2/pokemon/${index}`, true);
      request.onload = () => {
        requestData[index] = request;
        if(i == n) createCard(request);
        createBannerImage(request, `preview-${i-n}`);
      };
      request.send();
    } else {
      if(i == id) createCard(requestData[index]);
      createBannerImage(requestData[index], `preview-${i-n}`);
    }
  }
}

function preload(n, extra) {
  for(let i = n-extra; i <= n+extra; i++) {
    let index = i > 0 ? (i <= MAX ? i : i - MAX) : i + MAX;
    if(requestData[index] == null) {
      let request = new XMLHttpRequest();
      request.open('GET', `https://pokeapi.co/api/v2/pokemon/${index}`, true);
      request.onload = () => requestData[i] = request;
      request.send();
    }
  }
}

function shiftLeft() {
  n = n > 1 ? n - 1 : MAX;
  updateCard(n);
  updateBanner(n);
  preload(n, 5);
}

function shiftRight() {
  n = n < MAX ? n + 1 : 1;
  updateCard(n);
  updateBanner(n);
  preload(n, 5);
}

let n = 1;
getAllRequests(n);
preload(n, 5);

document.onkeydown = (e) => {
  switch (e.keyCode) {
    case 37: // left
      shiftLeft();
      break;
    case 38: // up
      break;
    case 39: // right
      shiftRight();
      break;
    case 40: // down
      break;
  }
};
