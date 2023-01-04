const Container = document.querySelector(".container")
const Question = document.getElementById("question")
const SubmitButton = document.getElementById("submit-btn")
const ErrorMassage = document.getElementById("error-msg")
const ControlContainer = document.querySelector(".controls-container")
const Result = document.getElementById("result")
const StartButton = document.getElementById("start-btn")

let Operators = ["*" , "-" , "+"]
let AnswerValue ; 
let QuestionsOperators;

const RandomValue = (min , max) => {
    return Math.floor(Math.random() * (max - min)) + min
}

const QuestionsGenerator = () => {
    let [Number1 , Number2] = [RandomValue(1 , 20) , RandomValue(1 , 20)]
    
    let RandomOperator = Operators[Math.floor(Math.random() * Operators.length)]


    let solution = eval(`${Number1}${RandomOperator}${Number2}`)

   if(RandomOperator == "-" && Number2 > Number1) {
        [Number1 , Number2] = [Number2 , Number1]
   } 

   let RandomVar = RandomValue(1 , 5)

   if(RandomVar == 1) {
        AnswerValue = Number1
        Question.innerHTML = `<input type="number" id="input-value" placeholder="?"/> ${RandomOperator} ${Number2} = ${solution}`

   }else if (RandomVar == 2) {
        AnswerValue = Number2
        Question.innerHTML = `${Number1}${RandomOperator} <input type="number" id="input-value" placeholder="?" /> = ${solution}`
   }else if (RandomVar == 3) {
        AnswerValue = Operators 
        QuestionsOperators = true
        Question.innerHTML = `${Number1} <input type="text" placeholder="?" id="input-value" /> ${Number2} = ${solution}`
   }else {
        AnswerValue = solution
        Question.innerHTML = `${Number1} ${RandomOperator} ${Number2} = <input type="number" placeholder="?" id="input-value" />`
   }

   SubmitButton.addEventListener("click" , function () {
          ErrorMassage.classList.add("hide")
          let UserInput = document.getElementById("input-value").value

          if(UserInput) {

               if(UserInput == AnswerValue) {
                    StopGame(`Yippe!! You Brilliant`)
               }else if(QuestionsOperators && !Operators.includes(UserInput)) {
                    StopGame(`Please enter valid Operator`)
               }else {
                    StopGame(`Opps!! Wrong Answer`)
               }

          }else {
               ErrorMassage.classList.remove("hide")               
               ErrorMassage.innerHTML = `Input Cannot Empty!...please fill this`
          }
   })

}


StartButton.addEventListener("click" , function (e) {
     OperatorsQuestions = false
     AnswerValue = ''
     ErrorMassage.innerHTML = ''
     ErrorMassage.classList.add("hide")
     ControlContainer.classList.add("hide")
     ErrorMassage.classList.add("hide")
     StartButton.classList.add("hide")
     QuestionsGenerator()
})


function StopGame (ResultValue) {
     Result.innerHTML = ResultValue
     StartButton.innerHTML = "Restart"
     ControlContainer.classList.remove('hide')
     StartButton.classList.remove("hide")
}
