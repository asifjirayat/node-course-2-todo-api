const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5dea47999720010d55688943';

User.find({
  _id: id
}).then((users) => {
  console.log("Users: ", JSON.stringify(users, undefined, 2));
});

// if(!ObjectID.isValid(id)) {
//   console.log('Id Not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos:', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todos) => {
//   console.log('Todos:', todos);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('ID not found');
//   }
//   console.log('By ID:', todo);
// }).catch((e) => {
//   console.log(e);
// });


User.findById(id).then((user) => {
  if(!user) {
    return console.log('No user found.');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {
  console.log(e);
});
