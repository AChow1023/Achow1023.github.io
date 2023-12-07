/*
const submitForm = (e) =>{
    e.preventDefault();
    document.getElementById("results").classList.remove("hidden");
    const form = document.getElementById("form");
    const uName = form.elements["username"].value;
    const fName = form.elements["first-name"].value;
    const lName = form.elements["last-name"].value;
    const email = form.elements["email"].value;
    const termsChecked = form.elements["terms"].checked;
}
document.getElementById("form").onsubmit = submitForm;
*/

const showEmailResult = async (e) =>{
    e.preventDefault();
    const result = document.getElementById("result");
    let response = await getEmailResult();
    if(response.status == 200) {
        result.innerHTML = "Thank you for submitting, I will get back to you shortly!";
    }
    else {
        result.innerHTML = "Sorry, there was a problem and your email was not sent.";
    }
};

const getEmailResult = async (e) =>{
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById("result");
    result.innerHTML = "Please wait...";

    try{
        const response = await fetch ("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: json,
          });
    return response;
    }
    catch (error) {
        console.log(error);
        document.getElementById("result").innerHTML = "Sorry, there was a problem and your email was not sent.";
    }
};

document.getElementById("form").onsubmit = showEmailResult;

