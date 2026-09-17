const display = document.getElementById('display')
const calculations = document.getElementById('calculations')
const result = document.getElementById('resultDisplay')


function calculate() { 

    console.log(calculations.textContent)

    let answer = Math.round(eval(calculations.textContent) * 100) / 100

    // Use scientific notation for numbers >= 10^5
    if (Math.abs(answer) >= 100000) {
        answer = answer.toExponential(2)
    }

    result.textContent = '= ' + answer

    result.style.fontSize = '50px'
}

function Buttons(num){
    console.log(`${num} button clicked`)
    calculations.textContent += num
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



