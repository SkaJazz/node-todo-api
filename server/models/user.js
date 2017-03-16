var mongoose = require('mongoose');

var User = mongoose.model('User', {
	name: {
		type: String,
		required: false,
		minlength: 1,
		trim: true
	},
	email: {
		type: String,
		require: true,
		minlength: 1,
		trim: true
	}
});

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