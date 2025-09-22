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