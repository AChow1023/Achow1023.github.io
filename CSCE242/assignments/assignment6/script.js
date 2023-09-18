
const animate = () =>{
    document.getElementById("circle").classList.add("anim-circle");
}

const showRacoon = () =>{
    document.getElementById("racoon").classList.remove("hide");
}
const hideRacoon = () =>{
    document.getElementById("racoon").classList.add("hide");
}

const addComment = () =>{
    var txtProductName = document.getElementById("txt-product-name").value;
    var txtComment = document.getElementById("txt-comment").value;
    var txtRating = document.getElementById("txt-rating").value;
    var txtUserName = document.getElementById("txt-user-name").value;
    var productName = document.getElementById("product-name");
    var ratingAndComment = document.getElementById("rating-and-comment");
    var userName = document.getElementById("user-name");

    productName.innerHTML = txtProductName;
    ratingAndComment.innerHTML = txtRating + "/5 stars " + txtComment;
    userName.innerHTML = "by " + txtUserName;
    
}

window.onload = () =>{
    document.getElementById("button-show").onclick = showRacoon;
    document.getElementById("button-hide").onclick = hideRacoon;
    document.getElementById("button-dance").onclick = animate;
    document.getElementById("add-comment").onclick = addComment;
};