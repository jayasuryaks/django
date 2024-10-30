    const form = document.getElementById("form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const accountType = document.getElementById("accountType");
    const deposit = document.getElementById("deposit");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent default form submission
        if (checkInputs()) {
            // If all inputs are valid, submit the form or perform another action
            form.submit(); // Uncomment if you want to submit the form after validation
        }
    });

    function checkInputs() {
        let isValid = true;

        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const phoneValue = phone.value.trim();
        const accountTypeValue = accountType.value.trim();
        const depositValue = deposit.value.trim();

        // Username validation
        if (usernameValue === "") {
            setErrorFor(username, "Username cannot be empty");
            isValid = false;
        } else {
            setSuccessFor(username);
        }

        // Email validation
        if (emailValue === "") {
            setErrorFor(email, "Email cannot be empty");
            isValid = false;
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, "Enter a valid email");
            isValid = false;
        } else {
            setSuccessFor(email);
        }

        // Phone number validation
        if (phoneValue === "") {
            setErrorFor(phone, "Phone number cannot be empty");
            isValid = false;
        } else if (!isPhoneNumber(phoneValue)) {
            setErrorFor(phone, "Enter a valid phone number");
            isValid = false;
        } else {
            setSuccessFor(phone);
        }

        // Account type validation
        if (accountTypeValue === "") {
            setErrorFor(accountType, "Please select an account type");
            isValid = false;
        } else {
            setSuccessFor(accountType);
        }

        // Initial deposit validation
        if (depositValue === "") {
            setErrorFor(deposit, "Initial deposit cannot be empty");
            isValid = false;
        } else if (isNaN(depositValue) || depositValue <= 0) {
            setErrorFor(deposit, "Enter a valid deposit amount");
            isValid = false;
        } else {
            setSuccessFor(deposit);
        }

        return isValid; // Return true if all inputs are valid
    }

    function setErrorFor(input, message) {
        const controlForm = input.parentElement;
        const small = controlForm.querySelector(".error");
        controlForm.className = "control-form fail";
        small.innerText = message;
    }

    function setSuccessFor(input) {
        const controlForm = input.parentElement;
        controlForm.className = "control-form success";
    }

    function isEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isPhoneNumber(phone) {
        // Adjusted to accept 10 digits with optional country code
        return /^\d{10}$/.test(phone);

    }
//    let password= Math.floor(10000 + Math.random()*9000)
//    document.querySelector('form').submit


