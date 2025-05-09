var chosenPet = 'cat';

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

async function savePet() {
  const name = document.getElementById('nameInput').value;
  if (!name) {
    alert('Please enter a name for your pet!');
    return;
  }

  try {
    const response = await fetch('/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        type: chosenPet,
      }),
    });

    if (!response.ok) throw new Error('Failed to save pet');

    loadPets();
    document.getElementById('nameInput').value = '';
  } catch (error) {
    console.error('Error saving pet:', error);
    alert('Failed to save pet. Please try again.');
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
          <button class="edit-btn" onclick="editPet('${pet.id}', '${pet.name}')">Edit</button>
          <button class="delete-btn" onclick="deletePet('${pet.id}')">Delete</button>
          <button class="edit-btn" onclick="selectPet('${pet.type}', '${pet.name}')">Select</button>
        </div>
      `;
      petList.appendChild(petItem);
    });
  } catch (error) {
    console.error('Error loading pets:', error);
  }
}

async function editPet(id, currentName) {
  const newName = prompt('Enter new name for pet:', currentName);
  if (!newName) return;

  try {
    const response = await fetch(`/pets/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: newName }),
    });

    if (!response.ok) throw new Error('Failed to update pet');

    loadPets();
  } catch (error) {
    console.error('Error updating pet:', error);
    alert('Failed to update pet. Please try again.');
  }
}

async function deletePet(id) {
  if (!confirm('Are you sure you want to delete this pet?')) return;

  try {
    const response = await fetch(`/pets/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) throw new Error('Failed to delete pet');

    loadPets();
  } catch (error) {
    console.error('Error deleting pet:', error);
    alert('Failed to delete pet. Please try again.');
  }
}

function showMenu() {
  document.getElementById('mySidebar').style.display = 'flex';
}

function hideMenu() {
  document.getElementById('mySidebar').style.display = 'none';
}

// Load pets when the page loads
document.addEventListener('DOMContentLoaded', () => {
  displayPet();
  loadPets();
});

async function selectPet(x, y) {
  if (x == 'cat') selectCat();
  else if (x == 'bunny') selectBunny();
  else selectCapybara();

  document.getElementById('nameDisplay').innerHTML = '<h1>' + y + '</h1>';
}

window.onload = function () {
  loadPets();
};
