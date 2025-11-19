// const tinderuser = new Object();
const tinderuser = {};
tinderuser.id = "end123";
tinderuser.name = "bhjab";
tinderuser.isloggedin = false;
// console.log(tinderuser);
// const regular = {
//     email:"kdeni@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"Rahul",
//             lastname:"Dravid"
//         }
//     }
// }
// console.log(regular.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {1:"a",2:"b"}
const obj4 = {5:'e',6:'f'}
// const obj3 = Object.assign({},obj1,obj2,obj4);
const obj3 = {...obj1,...obj2};
console.log(obj3);

const users = [
    {
        id:1,
        email:"hsdbj@gmail.com"
    },
    {
        id:1,
        email:"hsdbj@gmail.com"
    },
    {
        id:1,
        email:"hsdbj@gmail.com"
    }

]
users[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));

console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty("namem"));