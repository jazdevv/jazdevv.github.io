let invalidElemnts = {
    postalCode: true,
    phone: true
};

// codepostal
document.getElementById("postal-code-input").addEventListener("input", (e)=>{
    console.log('validating postal code')
    const pattern = /^\d{5}$/;
    const inputValue = e.target.value;
    const errorElement = document.getElementById("error-postalcode");
    const inputElement = document.getElementById("postal-code-input");

    if (!pattern.test(inputValue)) {
        errorElement.classList.remove('hide-error');
        setStylesInCorrect(inputElement)
        invalidElemnts.postalCode = true;
    } else {
        errorElement.classList.add('hide-error');
        inputElement.classList.add("correct-answer")
        setStylesCorrect(inputElement)
        invalidElemnts.postalCode = false;
    }
})

// phone number
document.getElementById("phone-input").addEventListener("input", (e)=>{
    const pattern = /^\d{9}$/;;
    const inputValue = e.target.value;
    const errorElement = document.getElementById("error-phone");
    const inputElement = document.getElementById("phone-input");

    if (!pattern.test(inputValue)) {
        errorElement.classList.remove('hide-error');
        setStylesInCorrect(inputElement)
        invalidElemnts.phone = true;
    } else {
        errorElement.classList.add('hide-error');
        setStylesCorrect(inputElement)
        invalidElemnts.phone = false;
    }
});

// ux show amount of dollars equivalent to the amount of donation trees
document.getElementById("donation-quantity").addEventListener("input", (e)=>{
    const inputValue = e.target.value;
    const dollarsPerTree = 2;

    document.getElementById("donation-trees-in-dolars").textContent = `${dollarsPerTree * inputValue} $`
})

// submit validation
document.getElementById("form-associat").addEventListener("submit", (e) => {
    e.preventDefault();
    // const formData = new FormData(e.target);
    // for (let pair of formData.entries()) {
    //     console.log(pair[0]+ ', ' + pair[1]);  
    // }

    const submitElement = document.getElementById("submit-msg")

    if(invalidElemnts.phone == true && invalidElemnts.postalCode == true){
        submitElement.classList.remove("succes")
        submitElement.classList.add("error")
        submitElement.textContent = "Please complete the form"
    }else{
        submitElement.classList.add("succes")
        submitElement.classList.remove("error")
        submitElement.textContent = "You have correcty  become a member!"
    }
});

function setStylesCorrect(element){
    element.classList.add("correct-answer")
    element.classList.remove("incorrect-answer")
}

function setStylesInCorrect(element){
    element.classList.add("incorrect-answer")
    element.classList.remove("correct-answer")
}