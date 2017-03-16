const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '58ca3c100e240718203bafa41';

// if (!ObjectID.isValid(id)) {
// 	return console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// // better
// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('One todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('ID not found');
// 	}
// 	console.log('Todo by ID', todo);
// }).catch((e) => {
// 	console.log(e.name);
// });

var id = '58ca257bd3079c44383c8e98';

if (!ObjectID.isValid(id)) {
	return console.log('ID not valid');
}

User.findById(id).then((user) => {
	if (!user) {
		return console.log('User not found');
	}
	console.log('Users', user);
}).catch((e) => {
	console.log(e.name);
});