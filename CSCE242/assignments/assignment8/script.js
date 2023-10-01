var count = 0;
const runMan = () =>{
    setInterval(loop = () =>{
        if(count < 800){
            const runningMan = document.getElementById("running-man");
            count = count + 10;
            runningMan.style.left = count;
        }
    }, 1000);
}
var funds = 0;
const fundRaiser = () =>{
    setInterval(fund = () =>{
        const fundsRaised = document.getElementById("txt-funds-raised").value;
        if(funds <= (fundsRaised/10000)*100){
            const gradient = document.getElementById("gradient");
            funds = funds + 10;
            gradient.style.background = "linear-gradient(0deg, " + "red " + (funds) + "%, " + "white " + (funds) + "%)";
        }
    }, 1000);
}
const test = () =>{
    const gradient = document.getElementById("gradient");
    gradient.style.background = gradient.style.background = "linear-gradient(0deg, " + "red " + (50) + "%, " + "white " + (50) + "%)";
}

window.onload = () => {
    document.getElementById("running-man").onclick = runMan;
    document.getElementById("display-butt").onclick = fundRaiser;
}