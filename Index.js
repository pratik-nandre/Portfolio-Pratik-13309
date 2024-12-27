

document.getElementById('commentForm').addEventListener('submit', function (event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get form elements
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;

    // Validation flags
    let isValid = true;
    let errorMessage = "";

    // Name validation
    if (name.trim() == "") {
        isValid = false;
        errorMessage += "Name is required.\n";
    }

    if (name.length < 2) {
        isValid = false;
        errorMessage += "length of name must be greater than 2 character.\n";
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() == "") {
        isValid = false;
        errorMessage += "Email is required.\n";
    } else if (!emailRegex.test(email)) {
        isValid = false;
        errorMessage += "Enter a valid email address.\n";
    }


    if (comment.trim() == "") {
        isValid = false;
        errorMessage += "Comment is required.\n";
    }


    if (!isValid) {
        alert(errorMessage);
    } else {
        console.log({ name, email, comment });
        alert("Form submitted successfully!");

    }
});

