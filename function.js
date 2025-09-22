//Functions
// function add (){
//     var a = 60;
//     var b = 70;
//     document.write(a+b);
//     console.log(a+b);

// }
// add();
// console.log(add(10,20));
// document.write(add(10,20));


//ES6
const add= () =>{
    var a = 60;
    var b = 70;
    document.write(a+b);
    console.log(a+b);
}
add();


const addd = (a, b) => {
    const result = a + b;
    console.log(`${a} + ${b} = ${result}`);
    return result;
};

// //Hosting
// console.log(g);
// g = 45;

//ES7
//parameters
// const adddd = (a, b) => {
//     console.log(a + b);
// }
// adddd(10, 20);


//in one line ES7
function adding(a, b) {
    return console.log(a + b);
} adding(10,20);




let name = "Rahul";

function display(){
    let name = "Rangu";
    console.log(`My name is ${name}`);
    document.write(`My name is ${name}`);
}
document.write(`My name is ${name}`);
display();



//DOM

