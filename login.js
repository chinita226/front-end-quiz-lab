

function client_validate() {
    
    var letters = /^[A-Za-z]+$/;
    var email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    var fname = document.getElementById('firstname')
    if(fname.value ===''||fname.value === null){
        alert("Must enter a name!")
    } else {
        var fname_letter = letters.test(fname.value);
        if (fname_letter == false){
            alert("First name must be letters only!")
        }
    }

    var lname = document.getElementById('lastname')
    if(lname.value ===''||lname.value === null){
        alert("Must enter a last name!")
    } else {
        var lname_letter = letters.test(lname.value);
        if (lname_letter == false){
            alert("Last name must be letters only!")
        }
    }

    var email_input = document.getElementById('email')
    if(email_input.value ===''||email_input.value === null){
        alert("Must enter an email!")
    } else {
        var email_validate = email_pattern.test(email_input.value);
        if (email_validate == false){
            alert("Email must follow emai pattern!")
        }
    }
    if(fname_letter && lname_letter && email_validate) {
        showButton()
    }
}

function showButton() {
    let element = document.getElementById("play_btn");
    element.style.visibility= "visible";
    let quizBtn = document.getElementById("create_quiz");
    quizBtn.style.visibility= "visible";
}

function redirectQuiz() {
    window.location = "./quiz.html"
}

function createQuiz(){
    window.location = "./create.html"
}