//_id:5bf7fee692033d36ec2cf2dd
//12 octets

//4octets : timestamp
//3octets :id machine
//2octets: id processus
//3octets:compteur

//1octets=8bit
//2^8=256
//2^24=16M

//Driver->mongoDB
//mongoose//Driver

const mongoose=require('mongoose');

// const id=new mongoose.Types.ObjectId();

// console.log(id);
// console.log(id.getTimestamp());

const isValid= mongoose.Types.ObjectId.isValid('5bf806272195760234c3a8ca');
console.log(isValid);


//register user : (Post /api/users){name,email,passowrd}
//login user : (Post /api/logins){email,password}