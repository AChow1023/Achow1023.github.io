const changeText = () =>{
    const helloP = document.getElementById("date");
    helloP.innerHTML = "Yo";
    helloP.classList.add("special");
};

const showPenguin = () =>{
    document.getElementById("penguin").classList.remove("hide");
}
const hidePenguin = () =>{
    document.getElementById("penguin").classList.add("hide");
}

window.onload = () =>{
    document.getElementById("button-click").onclick = changeText;
    document.getElementById("button-show").onclick = showPenguin;
    document.getElementById("button-hide").onclick = hidePenguin;
};
