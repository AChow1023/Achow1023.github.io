const toggleNav = () =>{
    document.getElementById("main-nav-items").classList.toggle("hidden");
}
const toggleWTO = () =>{
    document.getElementById("WTO").classList.toggle("hidden");
}
const toggleFR = () =>{
    document.getElementById("FR").classList.toggle("hidden");
}
const WTO = () =>{
    const name1 = document.getElementById("txt-name1").value;
    const age1 = parseInt(document.getElementById("txt-age1").value);
    const name2 = document.getElementById("txt-name2").value;
    const age2 = parseInt(document.getElementById("txt-age2").value);
    const name3 = document.getElementById("txt-name3").value;
    const age3 = parseInt(document.getElementById("txt-age3").value);
    const compareAge = document.getElementById("compare-age");
    compareAge.classList.add("hidden");

    if(age1 > age2 && age2 > age3){
        compareAge.innerHTML = name1 + ", " + name2 + ", " + name3;
        compareAge.classList.remove("hidden");
    }
    else if(age2 > age1 && age3 > age2){
        compareAge.innerHTML = name3 + ", " + name2 + ", " + name1;
        compareAge.classList.remove("hidden");
    }
    else if(age3 > age1 && age1 > age2){
        compareAge.innerHTML = name3 + ", " + name1 + ", " + name2;
        compareAge.classList.remove("hidden");
    }
    else if(age2 > age1 && age1 > age3){
        compareAge.innerHTML = name2 + ", " + name1 + ", " +  name3;
        compareAge.classList.remove("hidden");
    }
    else if(age1 <= 0 || age2 <= 0 || age3 <= 0){
        compareAge.innerHTML = "Not a valid age";
        compareAge.classList.remove("hidden");
    }
}
const fundRaise = () =>{
    const fundsRaise = document.getElementById("txt-funds-raised").value;
    if(fundsRaise < 5000){
        document.getElementById("gradient").classList.add("t");
    }
    else if(fundsRaise == 5000){
        document.getElementById("gradient").classList.add("f");
    }
    else if(fundsRaise > 5000){
        document.getElementById("gradient").classList.add("s");
    }
    
}

window.onload = () =>{
    document.getElementById("nav-toggle").onclick = toggleNav;
    document.getElementById("exercise1-toggle").onclick = toggleWTO;
    document.getElementById("exercise2-toggle").onclick = toggleFR;
    document.getElementById("compare-ages-butt").onclick = WTO;
    document.getElementById("display-butt").onclick = fundRaise;

}