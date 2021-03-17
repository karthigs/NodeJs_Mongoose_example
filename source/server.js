const express = require('express');
const mongoose = require('mongoose')
const app = express();
app.use(express.json());

const { getAllUsers, storeUser, getUser}= require('./controller/controller');
async function connectDB() {
await mongoose.connect('mongodb://localhost:27017/crud_example', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
}

connectDB();
app.get('/users', getAllUsers);
app.get('/user', getUser);
app.post('/user/store', storeUser);
app.listen(8080, ()=>{

});