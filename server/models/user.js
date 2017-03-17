const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
	email: {
		type: String,
		require: true,
		minlength: 1,
		trim: true,
		unique: true,
		validate: {
			validator: validator.isEmail, 
			message: "{VALUE} is not a valid email"
		}
	},
	password: {
		type: String,
		require: true,
		minlength: 6
	},
	tokens: [{
		access: {
			type: String,
			required: true
		},
		token: {
			type: String,
			required: true
		}
	}]
});

UserSchema.methods.generateAuthToken = function () {
	var user = this;
	var access = 'auth';
	var token = jwt.sign({_id: user._id.toHexString(), access}, 'blocks*').toString();

	user.tokens.push({access, token});

	return user.save().then(() => {
		return token;
	}).catch((e) => {

	});
};

var User = mongoose.model('User', UserSchema);

module.exports = {User};

// var newUser = new User({
// 	text: true,
// 	email: "aquanavi@gmail.com"
// });

// newUser.save().then((doc) => { 
// 	console.log('Saved user', doc);
// }, (e) => {
// 	console.log('Unable to save User');
// });