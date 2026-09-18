const display = document.getElementById('display')
const calculations = document.getElementById('calculations')
const result = document.getElementById('resultDisplay')
let answer = 0
let prevAnswer = localStorage.getItem('prevAnswer')
let isOn = false
calculations.textContent = `Press 'AC' to turn on caculator`


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
    if (isOn){
        console.log(`${num} button clicked`)
        calculations.textContent += num
    }
}

function Backspace(){
    if(isOn){
        console.log('Backspace button clicked')
        calculations.textContent = calculations.textContent.slice(0, -1)
    }
}

function Clear(){
    if(isOn){
        console.log('Clear button clicked')
        calculations.textContent = ''
        result.textContent = ''
    }
}


function OnOff(num) {

    if (num === 'AC' && isOn) {
        console.log('AC button clicked: Turning calculator off')
        calculations.textContent = `Press 'AC' to turn on caculator`
        result.textContent = ''
        localStorage.removeItem('prevAnswer')
        prevAnswer = null
        isOn = false
        display.style.backgroundColor = '#080808'
        
    }else if (num === 'AC' && !isOn) {
        console.log('AC button clicked: Turning calculator back on')
        calculations.textContent = ''
        result.textContent = ''
        localStorage.removeItem('prevAnswer')
        prevAnswer = null
        isOn = true
        display.style.backgroundColor = '#3f3e3e'

        
    }   
}



