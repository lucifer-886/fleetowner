const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb+srv://shannon:pereira@cluster0.8y3ievi.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  experience: String,
  licenseNumber: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

const DriverSchema = new mongoose.Schema({
  name: String,
  image: String,
  licenseNumber: String,
  contactNumber: String,
  vehicle: String,
  status: String,
  rating: Number,
});

const TodaySchema = new mongoose.Schema({
  task: String,
  time: String,
  image: String,
});
const TomorrowSchema = new mongoose.Schema({
  task: String,
  time: String,
  image: String,
});
const Driver = mongoose.model('Driver', DriverSchema);
const Today = mongoose.model('Today', TodaySchema);
const Tomorrow=mongoose.model('Tomorrow',TomorrowSchema);

app.use(cors());
app.use(bodyParser.json());

// Create an endpoint to get the list of drivers
app.get('/api/drivers', async (req, res) => {
  try {
    const drivers = await Driver.find(); // Fetch all drivers from the database

    res.status(200).json(drivers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/drivers', async (req, res) => {
  try {
    const { name, image, licenseNumber, contactNumber, vehicle, status, rating } = req.body;

    const newDriver = new Driver({ name, image, licenseNumber, contactNumber, vehicle, status, rating });

    await newDriver.save();

    res.status(201).json({ message: 'Driver saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Register a user
app.post('/signup', (req, res) => {
  const { name, age, experience, licenseNumber, email, password } = req.body;

  const newUser = new User({
    name,
    age,
    experience,
    licenseNumber,
    email,
    password,
  });

  newUser
    .save()
    .then(() => {
      res.send('User registered successfully.');
    })
    .catch((err) => {
      res.status(400).send('Error: ' + err);
    });
});

// Get user by email
app.get('/user/:email', (req, res) => {
  const userEmail = req.params.email;

  User.findOne({ email: userEmail })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: 'Server error' });
    });
});

// Define routes for the first code snippet
app.post('/api/today', async (req, res) => {
  try {
    const { task, time, image } = req.body;

    const newToday = new Today({ task, time, image });

    await newToday.save();

    res.status(201).json({ message: "Today's Schedule added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/today', async (req, res) => {
  try {
    const todaySchedules = await Today.find(); // Fetch all today's schedules from the database

    res.status(200).json(todaySchedules);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// Create an endpoint to post Tomorrow's Schedule
app.post('/api/tomorrow', async (req, res) => {
  try {
    const { task, time, image } = req.body;

    const newTomorrow = new Tomorrow({ task, time, image });

    await newTomorrow.save();

    res.status(201).json({ message: "Tomorrow's Schedule added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create an endpoint to get Tomorrow's Schedule
app.get('/api/tomorrow', async (req, res) => {
  try {
    const tomorrowSchedules = await Tomorrow.find(); // Fetch all Tomorrow's Schedules from the database

    res.status(200).json(tomorrowSchedules);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
