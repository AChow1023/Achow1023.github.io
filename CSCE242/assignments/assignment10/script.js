class Toy{
    constructor(name, price, age, rating, pic){
        this.name = name;
        this.price = price;
        this.age = age;
        this.rating = rating;
        this.pic = pic;
    }

    get details() {
        const section = document.createElement("section");
        section.classList.add("toy");
        const h3 = document.createElement("h3");
        h3.innerHTML = this.name;
        section.append(h3);

        const ul = document.createElement("ul");
        section.append(ul);
        ul.append(this.getToyItem("Price: " + this.price));
        ul.append(this.getToyItem("Age Range: " + this.age));
        ul.append(this.getToyItem("Rating: " + this.rating + " stars"));

        section.append(this.picture(this.pic));

        return section;
    }

    picture(info){
        const pic = document.createElement("img");
        pic.src = "images/" + info;
        return pic;
    }
    getToyItem(info){
        const li = document.createElement("li");
        li.textContent = info;
        return li;
    }
}

const showToys = () =>{
    const toyList = document.getElementById("toys");
    const toys = [];
    toys.push(new Toy("Bike", "$70", "8-17", "5", "squarebikepic.png"));
    toys.push(new Toy("Frog", "$5", "2-8", "3", "frogpic.jfif"));
    toys.push(new Toy("Lego", "$56", "6-17", "4", "squarelegopic.png"));
    toys.push(new Toy("Lightsaber", "$35", "8-17", "5", "lightsaberpic.jfif"));
    toys.push(new Toy("Nerf Gun", "$25", "5-17", "3", "nerfGunpic.jfif"));
    toys.push(new Toy("Wagon", "$100", "5-8", "2", "wagonpic.jfif"));

    toys.forEach(toy => {
        toyList.append(toy.details);
    })
};

window.onload = () =>{
    showToys();
}
