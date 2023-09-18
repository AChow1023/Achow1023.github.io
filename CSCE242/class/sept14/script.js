//const add =(a,b) => a+b;
//const add = (a,b) => {return a+b};
//add(5,6);

//const square = a => a*a;
const begin = () =>{
   document.getElementById("square").classList.add("anim-square");
   
}
const displayName = () =>{
    const firstName = document.getElementById("txt-first-name").value;
    console.log("Hello " + firstName);
}

window.onload = () =>{
    document.getElementById("button-begin").onclick = begin;
    document.getElementById("button-show-name").onclick = displayName;
}