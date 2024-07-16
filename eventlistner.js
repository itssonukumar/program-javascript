// callback function ; wecan passe into another function.


// setTimeout(function(){
//     console.log("timer");
// },5000)

// function x(y){ //y is called here.and we can call x anywher in the program.
//     console.log("x");
//     y();
// }
// x(function y(){     // x is called.
//     console.log("y");
// })

// function attachedeventlistner(){
//     let count=0;

// document.getElementById("clickme")
// .addEventListener("click",function xyz(){
// console.log("button clicked",++count);
// })
// }
// attachedeventlistner();


// let count=0;  globally exucute count.

// document.getElementById("clickme")
// .addEventListener("click",function xyz(){
// console.log("button clicked",++count);
// })



setTimeout(function(){
    console.log("timer");
},5000);

function x(y){
    console.log("x");
    y();
}

x(function y(){
    console.log("y")
});