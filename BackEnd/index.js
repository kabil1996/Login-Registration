const express =require('express');
const app=express();
const mongoose = require('mongoose');
const userRouter = require('./userRouter');
const morgan = require("morgan");
const cors = require('cors');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };


app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api',userRouter);



app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
mongoose
  .connect('mongodb://localhost:27017/login', options)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error in connecting MongoDB:', error);
  });