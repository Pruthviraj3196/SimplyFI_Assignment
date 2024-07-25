const express = require('express');
const mongoose = require('mongoose');

const articleRoutes = require('./routes/articleRoutes');
const userRoutes = require('./routes/userRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());


mongoose
.connect("mongodb://localhost:27017/nodejs-backend-assignment")
.then(() => console.log("Connection with Data Base is Established Sucessfully"))
.catch((err) => console.log("Error with Connection with DataBAse", err));


app.use('/articles', articleRoutes);
app.use('/users', userRoutes);
app.use('/notifications', notificationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
