let x = 0;
function sleep() {
  if (x == 0) {
    document.getElementById('bigZ').innerHTML = 'z';
    document.getElementById('middleZ').innerHTML = 'Z';
    document.getElementById('smallZ').innerHTML = 'Z';
    x = 1;
  } else {
    document.getElementById('bigZ').innerHTML = '';
    document.getElementById('middleZ').innerHTML = '';
    document.getElementById('smallZ').innerHTML = '';
    x = 0;
  }
}

function dimLight() {
  let imgDiv = document.getElementById('fullScreenImage');

  if (imgDiv.style.display === 'block') {
    imgDiv.style.display = 'none';
  } else {
    imgDiv.style.backgroundImage =
      "url('https://cdn.glitch.global/7e443b07-ef1f-47cb-94fc-116ae020bbae/dimlights.png?v=1738722339616')";
    imgDiv.style.display = 'block';
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

window.onload = function () {
  loadPets();
};
