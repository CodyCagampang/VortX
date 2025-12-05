const mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');
if (typeof passportLocalMongoose !== 'function') {
  passportLocalMongoose = passportLocalMongoose.default;
}

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  firstName: String,
  lastName: String,
  email: String
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
