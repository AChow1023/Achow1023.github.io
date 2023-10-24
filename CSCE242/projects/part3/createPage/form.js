
const submitForm = (e) =>{
    e.preventDefault();
    document.getElementById("result").classList.remove("hidden");
    const form = document.getElementById("form");
    const uName = form.elements["username"].value;
    const name = form.elements["name-input"].value;
    const PName = form.elements["page-name"].value;
    const type = form.elements["type"].value;
    const userContent = form.elements["user-content"].value;
    const termsChecked = form.elements["terms"].checked;
}
document.getElementById("form").onsubmit = submitForm;
