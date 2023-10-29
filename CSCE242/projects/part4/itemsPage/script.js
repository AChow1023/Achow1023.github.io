const getMovies = async () => {
    const url =  "https://github.com/AChow1023/Achow1023.github.io/blob/main/CSCE242/projects/part4/json/items.json";

    try {
        const response = await fetch(url);
        return await response.json();
    }
    catch (error){
        console.log(error);
    }
};

const showItems = async () => {
    let items = await getItems();
    let itemsSection = document.getElementById("items");
    items.forEach((item) => itemsSection.append(getItemsItem(item)));
};

const getItems = (item) =>{
    const itemSection = document.createElement("section");

    const content = document.createElement("div");
    itemSection.append(content);

    const h2 = document.createElement("h2");
    h2.innerText = "Items";
    content.append(h2);

    let ul = document.createElement("ul");
    content.append(ul);
    let li = document.createElement("li");
    let trTop = document.createElement("tr");
    let aTop = document.createElement("a");
    let h3 = document.createElement("h3");
    h3.innerText = item.color + 'Items';
    aTop.href = item.link;
    aTop.append(h3);
    trTop.append(aTop);
    
    let trMid = document.createElement("tr");
    let p = document.createElement("p");
    p.innerText = item.description;
    trMid.append(p);

    let trBot = document.createElement("tr");
    let aBot = document.createElement("a");
    let img = document.createElement("img");
    img.src = 'https://github.com/AChow1023/Achow1023.github.io/blob/main/CSCE242/projects/part4/itemsPage/' + item.img;
    aBot.href = item.link;
    aBot.append(img);
    trBot.append(aBot);

    li.append(trTop);
    li.append(trMid);
    li.append(trBot);
    ul.append(li);
    return movieSection;
};

const toggleNav = () =>{
    document.getElementById("main-nav-items").classList.toggle("hidden");
}
window.onload = () =>{
    showItems();
    document.getElementById("nav-toggle").onclick = toggleNav;
}