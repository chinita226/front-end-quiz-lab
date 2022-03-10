const form = document.querySelector("form")
form.setAttribute("novalidate", "")
form.addEventListener("submit", (event) => {
    const allValid = form.checkValidity();
    if (!allValid) {
        alert("Make sure to answer all the multiple choices!")
        event.preventDefault();
    } else {
        check()
        event.preventDefault();
    }
});

function createQuiz(){
    window.location = "/grade3_try/create.html"
}

function check() {
    var question1 = document.quiz.question1.value
    var question2 = document.quiz.question2.value
    var question3 = document.quiz.question3.value
    var question4 = document.quiz.question4.value
    var question5 = document.quiz.question5.value
    var question6 = document.quiz.question6.value
    var question7 = document.quiz.question7.value
    var question8 = document.quiz.question8.value
    var question9 = document.quiz.question9.value
    var question10 = document.quiz.question10.value
    var question11 = document.quiz.question11.value
    var question12 = document.quiz.question12.value
    var question13 = document.quiz.question13.value
    var question14 = document.quiz.question14.value
    var question15 = document.quiz.question15.value
    var question16 = document.quiz.question16.value
    var question17 = document.quiz.question17.value
    var question18 = document.quiz.question18.value
    var question19 = document.quiz.question19.value
    var question20 = document.quiz.question20.value
    
    var correct = 0

    if(question1 == "1555" && question1 == "1566"){
        correct++
    }
    if(question2 == "1000000"){
        correct++
    }
    if(question3 == "a chemical"){
        correct++
    }
    if(question4 == "wave"){
        correct++
    }
    if(question5 == "suez canal"){
        correct++
    }
    if(question6 == "gladiator"){
        correct++
    }
    if(question7 == "tiber"){
        correct++
    }
    if(question8 == "moose"){
        correct++
    }
    if(question9 == "smithsonian"){
        correct++
    }
    if(question10 == "beethoven"){
        correct++
    }
    if(question11 == "armpit"){
        correct++
    }
    if(question12 == "dogleg"){
        correct++
    }
    if(question13 == "MMX"){
        correct++
    }
    if(question14 == "blanca"){
        correct++
    }
    if(question15 == "alexis"){
        correct++
    }
    if(question16 == "m16"){
        correct++
    }
    if(question17 == "101"){
        correct++
    }
    if(question18 == "maundy"){
        correct++
    }
    if(question19 == "artists"){
        correct++
    }
    if(question20 == "rapid eye movement"){
        correct++
    }

    var messages = ["You are killing it!!!", "That was a nice try!!!", "You suck! Joking, just do better next time :)"]
    var photos = ["assets/success.gif", "assets/try-again.gif", "assets/bad.gif"]
    var range

    if(correct<=3) {
        range = 2
    }
    if(correct>3 && correct<15){
        range = 1
    }
    if(correct>15){
        range = 0
    }

    document.getElementById('after_submit').style.visibility = "visible"
    document.getElementById('message').innerHTML = messages[range]
    document.getElementById('number_correct').innerHTML = "You got " + correct + " correct out of 20."
    document.getElementById('photo').src = photos[range]
}


function btnGreen() {
    var collection = document.getElementsByClassName("correct")
    for(i=0; i<collection.length; i++){
        collection[i].style.backgroundColor="rgba(10, 124, 10, 0.459)"
        collection[i].style.borderRadius = "25px"
    }
    var text_collection = document.getElementsByClassName('textbox')
    console.log(text_collection);
    var text_answers = ["Gladiator", "Moose", "dogleg", "MMX", "rapid eye movement"]
    Array.from(text_collection).forEach((item, index) => {
        item.value = text_answers[index]
    })

}

var mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}