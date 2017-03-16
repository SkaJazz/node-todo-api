const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({})
// Todo.remove({}).then((result) => {
// 	console.log(result);
// })

// Todo.findOneAndRemove({})
// Todo.findByIdAndRemove({})

Todo.findByIdAndRemove('58ca7740389ea21a4bc1d931').then((todo) => {
	console.log(todo);
})