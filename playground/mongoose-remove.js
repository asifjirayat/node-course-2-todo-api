const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//   console.log(res);
// });

// Todo.findOneAndRemove({
//   _id: '5df1578f6cd9e3cba31d25ca'
// }).then((res) => {
//   console.log(JSON.stringify(res, undefined, 2));
// });

// Todo.findByIdAndRemove('5df1578f6cd9e3cba31d25cb').then((res) => {
//   console.log(JSON.stringify(res, undefined, 2));
// });
