// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const app = express();
// const PORT = process.env.PORT || 3000;
// app.use(cors());

// mongoose.connect('mongodb+srv://chethanb886:pool1234dead@cluster0.6xso8xt.mongodb.net/test', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// const DriverSchema = new mongoose.Schema({
//   name: String,
//   image: String,
//   licenseNumber: String,
//   contactNumber: String,
//   vehicle: String,
//   status: String,
//   rating: Number,
// });


// const Driver = mongoose.model('Driver', DriverSchema);

// app.use(bodyParser.json());

// app.post('/api/drivers', async (req, res) => {
//   try {
//     const { name,image,licenseNumber,contactNumber,vehicle,status,rating, } = req.body;

//     const newDriver = new Driver({ name,image,licenseNumber,contactNumber,vehicle,status,rating, });

//     await newDriver.save();

//     res.status(201).json({ message: 'Driver saved successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

mongoose.connect('mongodb+srv://chethanb886:pool1234dead@cluster0.6xso8xt.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

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

const Today = mongoose.model('Today', TodaySchema);

app.use(bodyParser.json());

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
const Driver = mongoose.model('Driver', DriverSchema);

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
