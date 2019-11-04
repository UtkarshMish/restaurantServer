const mongoose = require('mongoose');
const MONGO_KEY = require('./.env');
module.exports = mongoose.connect(String(MONGO_KEY), { useNewUrlParser: true }, function(err) {
  if (err) throw err;
  console.log('Database connected!');
  // db.close();
});
