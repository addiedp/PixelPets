var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = [
  '--74916-5',
  '2---6-3-9',
  '-----7-1-',
  '-586----4',
  '--3----9-',
  '--62--187',
  '9-4-7---2',
  '67-83----',
  '81--45---',
];

var solution = [
  '387491625',
  '241568379',
  '569327418',
  '758619234',
  '123784596',
  '496253187',
  '934176852',
  '675832941',
  '812945763',
];

window.onload = function () {
  setGame();
  loadPets();
};

function setGame() {
  let number;
  //digits
  for (let i = 1; i <= 9; i++) {
    //<div id = "1" class="number">1</div>
    number = document.createElement('div');
    number.id = i;
    number.innerText = i;
    number.addEventListener('click', selectNumber);
    number.classList.add('number');
    document.getElementById('digits').appendChild(number);
  }

  //board
  let tile;
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      tile = document.createElement('div');
      tile.id = r.toString() + '-' + c.toString();
      if (board[r][c] != '-') {
        tile.innerText = board[r][c];
        tile.classList.add('tile-start');
      }
      if (r == 2 || r == 5) {
        tile.classList.add('horizontal-line');
      }
      if (c == 2 || c == 5) {
        tile.classList.add('vertical-line');
      }
      tile.addEventListener('click', selectTile);
      tile.classList.add('tile');
      document.getElementById('board').append(tile);
    }
  }
}

function selectNumber() {
  if (numSelected != null) {
    numSelected.classList.remove('number-selected');
  }
  numSelected = this;
  numSelected.classList.add('number-selected');
}

function selectTile() {
  if (numSelected) {
    if (this.innerText != '') {
      return;
    }

    let coords = this.id.split('-');
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if (solution[r][c] == numSelected.id) {
      this.innerText = numSelected.id;
    } else {
      errors += 1;
      document.getElementById('errors').innerText = errors;
    }
  }
}

async function loadPets() {
  try {
    const response = await fetch('/pets');
    if (!response.ok) throw new Error('Failed to load pets');

    const pets = await response.json();
    const petList = document.getElementById('petList');
    petList.innerHTML = '';

    pets.forEach((pet) => {
      const petItem = document.createElement('div');
      petItem.className = 'pet-item';
      petItem.innerHTML = `
        <span>${pet.name} (${pet.type})</span>
        <div class="pet-controls">
          <button class="delete-btn" onclick="selectPet('${pet.type}', '${pet.name}')">Select</button>
        </div>
      `;
      petList.appendChild(petItem);
    });
  } catch (error) {
    console.error('Error loading pets:', error);
  }
}

async function selectPet(x, y) {
  if (x == 'cat') selectCat();
  else if (x == 'bunny') selectBunny();
  else selectCapybara();

  document.getElementById('nameDisplay').innerHTML = '<h1>' + y + '</h1>';
}

async function selectCat() {
  chosenPet = 'cat';
  document.getElementById('petDisplay').innerHTML =
    '<img src="https://cdn.glitch.global/7e443b07-ef1f-47cb-94fc-116ae020bbae/thumbnails_pixil-frame-0.png?v=1738414265057/150x150" width="200px" height="200px">';
}

async function selectBunny() {
  chosenPet = 'bunny';
  document.getElementById('petDisplay').innerHTML =
    '<img src="https://cdn.glitch.global/7e443b07-ef1f-47cb-94fc-116ae020bbae/thumbnails_baseBunny%20(1).png?v=1738414134081/150x150" width="200px" height="200px">';
}

async function selectCapybara() {
  chosenPet = 'capybara';
  document.getElementById('petDisplay').innerHTML =
    '<img src="https://cdn.glitch.global/7e443b07-ef1f-47cb-94fc-116ae020bbae/cap.png?v=1746698737726/150x150" width="200px" height="200px">';
}

function showMenu() {
  document.getElementById('mySidebar').style.display = 'flex';
}

function hideMenu() {
  document.getElementById('mySidebar').style.display = 'none';
}
