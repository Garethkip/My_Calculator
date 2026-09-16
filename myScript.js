const display = document.getElementById('display')
const calculations = document.getElementById('calculations')
const result = document.getElementById('resultDisplay')


function calculate(){ 
    console.log(calculations.textContent)
    let answer = eval(calculations.textContent)
    result.textContent = ''
    result.textContent += '= ' + answer
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



