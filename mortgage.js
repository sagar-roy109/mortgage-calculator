
// Get income Amount

const income = document.getElementById('income');
income.addEventListener('input', function(){
    let incomeAmout = +income.value;
})


//Get Deposit Amount 
const deposit = document.getElementById('deposit');
deposit.addEventListener('input', function(){
    let depositAmount = +deposit.value ;
    
})


// Get Mortgage Term
const term = document.getElementById('term');

term.addEventListener('input', function(){
    let termAmount = +term.value ;
   
    
})




//mortgage type
const newMortgage = document.getElementById('newMortgage');
newMortgage.addEventListener('click', function(){
    let mortgageTypeNew = newMortgage.value ;
    
    
})


const reMortgage = document.getElementById('reMortgage');
reMortgage.addEventListener('click', function(){
    let mortgageTypeRe = reMortgage.value ;
   
    
})


// Get Rate Type

const fixed = document.getElementById('fixed');
fixed.addEventListener('click', function(){
    let fixedRate = fixed.value ;
    
    
})


const variable = document.getElementById('variable');
variable.addEventListener('click', function(){
    let variableRate = variable.value ;
    
    
})



// Get Period

const two = document.getElementById('periodTwo');
two.addEventListener('click', function(){
    let twoYear = +two.value ;
    
    
})


const three = document.getElementById('periodThree');
three.addEventListener('click', function(){
    let threeYear = +three.value ;
    
    
})


const four = document.getElementById('periodFour');
four.addEventListener('click', function(){
    let fourYear = +four.value ;
    
    
})


const five = document.getElementById('periodFive');
five.addEventListener('click', function(){
    let fiveYear = +five.value ;
   
    
})



// Get Output

const outPut = document.getElementById('output');
let outPutAmount = +outPut.innerText;

const total = document.getElementById('totalAmount');
let totalAmount = +total.innerText;


