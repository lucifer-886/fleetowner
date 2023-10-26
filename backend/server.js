const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to your MongoDB database
mongoose.connect('mongodb+srv://shannon:pereira@cluster0.8y3ievi.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Create a MongoDB model for the driver data
const Driver = mongoose.model('Driver', {
  name: String,
  licenseNumber: String,
  contactNumber: String,
  vehicle: String,
  status: String,
  rating: Number,
});

// Define a route to handle driver data submission
app.post('/api/upload-driver', (req, res) => {
  const driverData = req.body;

  // Create a new Driver model using the Mongoose schema you defined
  const newDriver = new Driver(driverData);

  newDriver.save()
    .then(() => {
      res.json('Driver uploaded successfully.');
    })
    .catch(err => {
      res.status(400).json('Error: ' + err);
    });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
