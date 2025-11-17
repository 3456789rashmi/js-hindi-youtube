//singleton object
const user = {};
user.id = "123abc"
user.name = "Rashmi"
user.isLoggedIn = false
console.log(user);
const regular = {
    email : "rash@gmail.com",
    fullname : {
        userfullname : {
            firstname: "Rashmi",
            lastname : "Sharma"
        }
    }
}
console.log(regular.fullname.userfullname);
const obj1 = {1:"a",2:"b"}
const obj2 = {1:"a",2:"b"}
// const obj3 = {obj1,obj2}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);

