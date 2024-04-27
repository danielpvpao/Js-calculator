let OldNumber =  '';
let Newnumber = '';
let Operator ='';
let display = document.getElementById('display');
let result = '';
display.textContent = '0';
function OperatorPlus(){
    Operator = '+'
    Calc()
    Updatedisplay();
};
function OperatorMinus(){
    Operator = '-'
    Calc()
    Updatedisplay();
};
function OperatorMultiplication(){
    Operator = 'X'
    Calc()
    Updatedisplay();
};
function OperatorDivision(){
    Operator = '/'
    Calc()
    Updatedisplay();
};
function OperatorRoot(){
    Operator ='√'
    Calc()
    Updatedisplay()
};
function setNumber(number) {
    if(Operator == ''){
    OldNumber += number
 }  if(Operator !== ''){
    Newnumber += number   
     }
    Updatedisplay();
    Calc(OldNumber,Newnumber);
};

function Calc(){
    if(OldNumber && Operator && Newnumber !== ''){
    switch (Operator)
    {
        case '+': result = parseInt(OldNumber) + parseInt(Newnumber);
        break;
        case '-': result = parseInt(OldNumber -  Newnumber);
        break;
        case 'X': result = parseInt(OldNumber * Newnumber);
        break;
        case '/': result = parseInt(OldNumber / Newnumber);
        break;
        case '√': result = Math.pow(OldNumber, 1 / Newnumber);
            result = parseFloat(result.toFixed(2));
        break;
    }
} 

}
     
function Updatedisplay() {
 if(OldNumber == ''){
    display.textContent = ' ' + ' ' + ' '
 }
 if(OldNumber !== ''){
    display.textContent = OldNumber + ' ' + ' ';
 }if(OldNumber && Operator !== ''){
    display.textContent = OldNumber + Operator + ' ';
 }
 if(OldNumber && Operator && Newnumber !== ''){
    display.textContent = OldNumber + Operator + Newnumber;
 }
};
 
function displayResult() {
    display.textContent = result;
    Newresult()
};
function Clear(){
    OldNumber = 0;
    Operator = ''
    Newnumber = ''
    result = ''
    Updatedisplay()
}
function Newresult(){
    OldNumber = result
    Operator = ''
    Newnumber = ''
}

