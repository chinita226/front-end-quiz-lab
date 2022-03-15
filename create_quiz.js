
function backQuiz(){
    window.location = "./quiz.html"
}


const addBtn = document.querySelector('.add_question')
addBtn.addEventListener("click", addQuestion)
const show = document.querySelector('.show_quiz')

function addQuestion(){
    /*<div> <input> <label><label> <div>  */
    document.getElementById('boxHidden').style.visibility = "hidden"
    document.getElementById('radioHidden').style.visibility = "hidden"
    var questionInput = document.createElement("INPUT");
    questionInput.id = 'inputUser'
    questionInput.setAttribute("type", "text");
    questionInput.setAttribute("value", "enter your question here...");
    questionInput.classList.add('form__field')
    var newDiv = document.createElement('div')
    var newBtn = document.createElement('button')
    newBtn.id = 'confirmBtn'
    newBtn.innerHTML="confirm"
    newDiv.classList.add('form__group')
    newDiv.id = 'outerDiv'
    document.getElementById('quiz').appendChild(newDiv);
    newDiv.appendChild(questionInput)
    newDiv.appendChild(newBtn)
    newBtn.onclick = function(){
        var para = document.createElement('p')
        para.id = 'parag'
        var userInput = document.getElementById('inputUser').value
        para.innerText = userInput
        document.getElementById('inputUser').remove()
        newDiv.appendChild(para)
        document.getElementById('confirmBtn').remove()
        document.getElementById('answers').style.visibility = "visible"
    }
}

const answerSelect = document.querySelector('.answers')
const boxSelect = document.querySelector('.add_box')
const radioSelect = document.querySelector('.add_radio')

answerSelect.addEventListener("click", ()=>{

    var selectedAnswer = answerSelect.value
    console.log(selectedAnswer);
    switch(selectedAnswer){
        case "mtc":
            document.getElementById('radioHidden').style.visibility = "hidden"

            boxSelect.addEventListener("click", addBox)
            console.log("here mtc");
            document.getElementById('boxHidden').style.visibility = "visible"
            answerSelect.value = 'choose'
            break

        case "single":
            document.getElementById('boxHidden').style.visibility = "hidden"
            console.log("here single");
            radioSelect.addEventListener("click", addRadio)
            document.getElementById('radioHidden').style.visibility = "visible"
            answerSelect.value = 'choose'
            break

        case "text":
            console.log('here text');
            //create a text input
            addText()
            answerSelect.value = 'choose'
            break

    }

})


function addRadio(){

    var radioAnswer = document.getElementById('radioAnswer').value
    console.log(radioAnswer)
    var radioDiv = document.createElement('div')

    var radioInput = document.createElement('input')
                
    // Specify the type of element.
    radioInput.type = "radio"
    radioInput.id = "radioBtn" // Set an ID.
    radioInput.name = "radioName"
    radioInput.value = radioAnswer
    var radiolbl = document.createElement('label')
    radiolbl.setAttribute('for', 'radioBtn')

    // Create text node and append it to the label.
    radiolbl.innerHTML = radioAnswer
    
    radioDiv.appendChild(radioInput)
    console.log("Im in radio");
    radioDiv.appendChild(radiolbl)
    document.getElementById('quiz').appendChild(radioDiv)
    radioAnswer = ''


}

function addBox(){

    var boxInput = document.getElementById('boxAnswer').value
    console.log(boxInput)
    var divBox = document.createElement('div')

    var chk = document.createElement('input')
                
    // Specify the type of element.
    chk.setAttribute('type', 'checkbox')
    chk.setAttribute('id', 'boxName') // Set an ID.
    chk.setAttribute('value', boxInput)
    var lbl = document.createElement('label')
    lbl.setAttribute('for', 'boxName')

    // Create text node and append it to the label.
    lbl.innerHTML = boxInput
    divBox.appendChild(chk)
    console.log("Im in outerDiv");
    divBox.appendChild(lbl)
    document.getElementById('quiz').appendChild(divBox)
    boxInput = ''


}

function addText() {
    var textInput = document.createElement("input");
    textInput.id = 'textUser'
    textInput.setAttribute("type", "text");
    textInput.classList.add('form__field')
    var textDiv = document.createElement('div')
    document.getElementById('quiz').appendChild(textDiv);
    textDiv.appendChild(textInput)

}