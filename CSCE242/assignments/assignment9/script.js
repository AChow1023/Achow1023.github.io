const quote = () =>{
    const currentQuote = document.querySelector("#quotes :not(.hidden)");
    currentQuote.classList.add("hidden");

    let nextQuote = currentQuote.nextElementSibling;

    if(nextQuote == null){
        nextQuote = document.querySelector("#quotes :first-child");
    }

    nextQuote.classList.remove("hidden");
}
//var currentColor = document.querySelector("#rainbow #red");
const rainbow = () =>{
    let currentColor = document.querySelector("#rainbow .hidden");
    let nextColor = currentColor.nextElementSibling;
    if(nextColor == null){
        nextColor = document.querySelector("#rainbow :first-child");
    }

    currentColor.classList.remove("hidden");
    currentColor = nextColor;
}
const makeRainbow = () =>{
    //const firstColor = document.querySelector("#rainbow :first-child");
    //firstColor.classList.remove("hidden");
    setInterval(rainbow,1000);
}
window.onload = () =>{
    setInterval(quote, 1000);
    document.getElementById("draw-rainbow-butt").onclick = makeRainbow;
}