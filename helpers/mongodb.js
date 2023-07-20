const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/auth_tutorial', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB connected...');
  })
  .catch(err => console.log(err.message));

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to the database');
});

mongoose.connection.on('error', (err) => {
  console.log(err.message);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection is disconnected');
});


process.on('SIGINT',async()=>{
    await mongoose.connection.close();
    process.exit(0)
})