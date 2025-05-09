const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const fs = require('fs');

const app = express();

// Initialize data file if it doesn't exist
if (!fs.existsSync('data.json')) {
  fs.writeFileSync('data.json', JSON.stringify({ users: [], pets: [] }));
}

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Session middleware
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Auth middleware
const requireAuth = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  next();
};

// Helper function to read/write data
const getData = () => {
  return JSON.parse(fs.readFileSync('data.json'));
};

const saveData = (data) => {
  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
};

app.get('/', requireAuth, (req, res) => {
  res.render('index', { user: req.session.user });
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const data = getData();
  const user = data.users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    req.session.user = user;
    res.redirect('/');
  } else {
    res.render('login', { error: 'Invalid credentials' });
  }
});

app.post('/register', (req, res) => {
  const { email, password } = req.body;
  const data = getData();

  if (data.users.some((u) => u.email === email)) {
    return res.render('login', { error: 'Email already exists' });
  }

  const newUser = {
    id: Date.now().toString(),
    email,
    password,
  };

  data.users.push(newUser);
  saveData(data);

  req.session.user = newUser;
  res.redirect('/');
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

app.get('/sudoku', requireAuth, (req, res) => {
  res.render('sudoku', { user: req.session.user });
});

app.get('/sleep', requireAuth, (req, res) => {
  res.render('sleep', { user: req.session.user });
});

app.get('/about', requireAuth, (req, res) => {
  res.render('about', { user: req.session.user });
});

// Pet management endpoints
app.post('/pets', requireAuth, (req, res) => {
  const { name, type } = req.body;
  const userId = req.session.user.id;
  const data = getData();

  const newPet = {
    id: Date.now().toString(),
    userId,
    name,
    type,
    createdAt: new Date().toISOString(),
  };

  data.pets.push(newPet);
  saveData(data);
  res.json(newPet);
});

app.get('/pets', requireAuth, (req, res) => {
  const userId = req.session.user.id;
  const data = getData();
  const userPets = data.pets.filter((pet) => pet.userId === userId);
  res.json(userPets);
});

app.put('/pets/:id', requireAuth, (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const userId = req.session.user.id;
  const data = getData();

  const petIndex = data.pets.findIndex(
    (p) => p.id === id && p.userId === userId
  );
  if (petIndex !== -1) {
    data.pets[petIndex].name = name;
    saveData(data);
    res.json(data.pets[petIndex]);
  } else {
    res.status(404).json({ error: 'Pet not found' });
  }
});

app.delete('/pets/:id', requireAuth, (req, res) => {
  const { id } = req.params;
  const userId = req.session.user.id;
  const data = getData();

  const petIndex = data.pets.findIndex(
    (p) => p.id === id && p.userId === userId
  );
  if (petIndex !== -1) {
    data.pets.splice(petIndex, 1);
    saveData(data);
    res.json({ success: true });
  } else {
    res.status(404).json({ error: 'Pet not found' });
  }
});

const port = 3000;
app.listen(port, () => console.log(`App listening to port ${port}`));
