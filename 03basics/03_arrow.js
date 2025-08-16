// const user = {
//     username: 'Rashmi',
//     price:999,
//     welcomemessage: function(){
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }
// user.welcomemessage()
// user.username = "Rash"
// user.welcomemessage()
// console.log(this);
// function chai(){
//     console.log(this.username );
// }
// chai()
// const chai = () => {
//     let username = "Rashmi"
//     console.log(this);
// }
// chai()
const addTwo = (num1,num2) => {
    return num1+num2
}
console.log(addTwo(3,4))