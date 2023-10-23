
const submitForm = (e) =>{
    e.preventDefault();
    document.getElementById("result").classList.remove("hidden");
    const form = document.getElementById("form");
    const uName = form.elements["username"].value;
    const name = form.elements["name"].value;
    const lName = form.elements["last-name"].value;
    const email = form.elements["email"].value;
    const termsChecked = form.elements["terms"].checked;
}
document.getElementById("form").onsubmit = submitForm;
