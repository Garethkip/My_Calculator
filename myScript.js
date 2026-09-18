const display = document.getElementById('display')
const calculations = document.getElementById('calculations')
const result = document.getElementById('resultDisplay')
let answer = 0
let prevAnswer = localStorage.getItem('prevAnswer')

function calculate() { 
    console.log(calculations.textContent)

    if (calculations.textContent.includes('Ans')) {
        console.log('Ans found in calculations')
        calculations.textContent = calculations.textContent.replace('Ans', prevAnswer)
        answer = Math.round(eval(calculations.textContent) * 100)/100
    }
    else {
        answer = Math.round(eval(calculations.textContent) * 100) / 100
    }
    
    // Use scientific notation for numbers >= 10^5
    if (Math.abs(answer) >= 100000) {
        answer = answer.toExponential(2)
    }

    result.textContent = '= ' + answer

    result.style.fontSize = '50px'
    // prevAnswer = answer
    localStorage.setItem('prevAnswer', answer)
    prevAnswer = localStorage.getItem('prevAnswer')
}

function Buttons(num){
    if (num === 'Ans') {
        console.log('Ans button clicked')
        calculations.textContent += 'Ans'
    } else {
        console.log(`${num} button clicked`)
        calculations.textContent += num
    }
}

function Backspace(){
    console.log('Backspace button clicked')
    calculations.textContent = calculations.textContent.slice(0, -1)
}

function Clear(){
    console.log('Clear button clicked')
    calculations.textContent = ''
    result.textContent = ''
}



