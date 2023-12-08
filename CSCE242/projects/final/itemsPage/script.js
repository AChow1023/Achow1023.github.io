const showItems = async () => {
    let itemJSON = await getJSON();
    let itemDiv = document.getElementById("item-list");
    itemDiv.innerHTML = "";

    
    itemJSON.forEach((item) =>{
        let section = document.createElement("section");
        itemDiv.append(section);

        const eLink = document.createElement("a");
        eLink.innerHTML = "Edit ";
        eLink.id = "edit-link";
        
        const dLink = document.createElement("a");
        dLink.innerHTML = "Delete";
        dLink.id = "delete-link";

        section.append(eLink);
        

        let h3 = document.createElement("h3");
        h3.innerHTML = item.color + ' Items';
        let aT = document.createElement("a");
        aT.href = item.link;
        aT.append(h3);
        section.append(aT);

        let ul = document.createElement("ul");
        
        let liD = document.createElement("li");
        liD.innerHTML = item.description;
        ul.append(liD);

        section.append(ul);

        if(item.img){
            let img = document.createElement("img");
            let aB = document.createElement("a");
            aB.href = item.link;
            aB.append(img);
            section.append(aB);
            img.src = "https://projectfinal-lw0r.onrender.com/" + item.img;
        }

        section.append(dLink);
        

        eLink.onclick = (e) => {
            e.preventDefault();
            document.querySelector(".dialog").classList.remove("hidden");
            document.getElementById("add-edit-title").innerHTML = "Edit Item";
            document.getElementById("submit-msg").classList.add("hidden");
            resetForm();
            populateEditForm(item);
        };
        
        dLink.onclick = (e) => {
            e.preventDefault();
            deleteItem(item);
        };
    });

    
};

const deleteItem = async (item) => {
    let response = await fetch (`https://projectfinal-lw0r.onrender.com/api/items/${item._id}`, {
        method: "DELETE",
        headers: {
            "Content-Type":"application/json;charset=utf-8"
        }
    });
    if(response.status != 200){
        console.log("Error deleting");
        return;
    }

    let result = await response.json();
    showItems();
    resetForm();
};

const liTeamItems = (item) => {
    let li = document.createElement("li");
    li.innerHTML = item;
    return li;
};

const getJSON = async () => {
    try{
        return (await fetch("https://projectfinal-lw0r.onrender.com/api/items")).json();
    }
    catch(error){
        console.log(error);
    }
};

const populateEditForm = (item) => {
    const form = document.getElementById("add-edit-form");
    form._id.value = item._id;
    form.color.value = item.color;
    form.description.value = item.description;
    form.link.value = item.link;
};

const addEditItem = async (e) => {
    e.preventDefault();
    const form = document.getElementById("add-edit-form");
    const formData = new FormData(form);
    let response;

    if(form._id.value == -1){
    formData.delete("_id");
    response = await fetch("https://projectfinal-lw0r.onrender.com/api/items/", {
        method: "POST",
        body: formData
    });
    }
    else{
        response = await fetch(`https://projectfinal-lw0r.onrender.com/api/items/${form._id.value}`, {
            method: "PUT",
            body: formData
        });
    }

    if (form._id.value != -1){
        showItems();
    }
    
    resetForm();
    document.querySelector(".dialog").classList.add("hidden");
    showItems();
    let submitMsg = document.getElementById("submit-msg");
    submitMsg.classList.remove("hidden");
};

const resetForm = () =>{
    const form = document.getElementById("add-edit-form");
    form.reset();
    form._id = "-1";
};

const showHideAdd = (e) => {
    e.preventDefault();
    document.querySelector(".dialog").classList.remove("hidden");
    document.getElementById("add-edit-title").innerHTML = "Add Item";
    document.getElementById("submit-msg").classList.add("hidden");
    resetForm();
};

const toggleNav = () =>{
    document.getElementById("main-nav-items").classList.toggle("hidden");
}

window.onload = () => {
    showItems();
    document.getElementById("add-edit-form").onsubmit = addEditItem;
    document.getElementById("add-link").onclick = showHideAdd;

    document.querySelector(".close").onclick = () =>{
        document.querySelector(".dialog").classList.add("hidden");
    };

    document.getElementById("nav-toggle").onclick = toggleNav;
};
