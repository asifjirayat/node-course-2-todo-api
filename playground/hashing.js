const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '132abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashPass = '$2a$10$84S56D5D.m.LOmqCyQGoiOmMGb7dTL5ISqvL.mxxd6IF3/Rc2T.7C';
bcrypt.compare('132abc!', hashPass, (err, res) => {
  console.log(res);
});

// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log(decoded);

// var message = 'I am user no 3';
//
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data + 'secret'))
// }
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data));
//
// var resultHash = SHA256(JSON.stringify(data + 'secret'));
//
// if(resultHash.toString() === token.hash.toString()) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed');
// }
