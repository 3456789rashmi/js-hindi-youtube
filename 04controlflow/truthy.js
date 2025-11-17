// const useremail = "rash@gmail.com"
// if(useremail){
//     console.log("Got user email");
// }
// else{
//     console.log()
// }
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}
//Nullish coalescing Operatoe (??) : null undefined
// let val1;
// val1 = 5??10
// console.log(val1);
//ternary 
const price = 100
price <= 80 ? console.log("less then 80") : console.log("more then 80");
