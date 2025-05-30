/*Multiline
Comment
example
*/
var a; //not recommended
let x;
x = 20;
const b = 20;
console.log("Hello from external Javascript");
console.log(a); //undefined

function abc(){

    var a = 20;
    for(let i = 2; i<=2; i++){
        console.log(i);
    }
    // console.log(i);  // Uncaught Reference Error
    console.log(a);
    return function xyz(){
        console.log(a);
    }
}
abc()();
console.log(a);

