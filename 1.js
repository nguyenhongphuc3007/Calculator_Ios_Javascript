//set variables
var lastNumber  = null;
var currentNumber = null;
var operator = null;
var results = null;
var decimalSet = false;
var fromEquals = false;

function displayOutput(myNewValue){
  document.getElementsByClassName("output")[0].setAttribute("value", myNewValue);
}

//do calculation 
function doCalculation(x, y, operator){
  switch (operator) {
        case "divide":
            return x / y;
            break;
        case "multiply":
            return x * y;
            break;
        case "add":
            return +x + +y;
            break;
        case "subtract":
            return x - y;
            break;
        
  }
}

//Initialize variables 
function ifFromEquals() {
  if (fromEquals){
    console.log("Function ifFromEquals(), if statement passed");
    currentNumber = results;
    lastNumber = null;
    operator = null;
    results = null;
    decimalSet  = null;
    fromEquals = false;
    displayOutput(currentNumber);
  }
}

//Function to calculate after variables have been set
function calculatorLogic(x){
  
  if(lastNumber != null && currentNumber != null && operator != null){
    //All values have been set
    operator = x;
    results = doCalculation(lastNumber, currentNumber, operator);
    lastNumber = results;
    currentNumber = null;
    displayOutput(results);
    console.log(results);
  } else
  if(lastNumber == null && currentNumber != null && operator == null){
      //only current number 
      operator = x;
      lastNumber = currentNumber;
      currentNumber = null;
      displayOutput(lastNumber);

  } else
  if(lastNumber == null && currentNumber == null && operator == null){
    //no values 
    displayOutput("0");
  } 
}

function buttonClick(x) {
  let myValue = x.getAttribute("value");

  //if operator has been set....
  switch (myValue){
        case "all-clear":
            //button changes between AC and C. Once a character is entered, AC changes to C. Reset all values 
            currentNumber = null;
            lastNumber = null;
            operator = null;
            results = null;
            decimalSet = false;
            fromEquals = false;
            document.getElementsByClassName("clear")[0].innerHTML = "AC";
            displayOutput("0");
            break;
        case "clear":
            //button changes between AC and C. Once a character is entered, AC changes to C. Reset all values 
            currentNumber = null;
            lastNumber = null;
            operator = null;
            results = null;
            decimalSet = false;
            fromEquals = false;
            document.getElementsByClassName("clear")[0].innerHTML = "AC";
            document.getElementsByClassName("clear")[0].setAttribute("value", "all-clear");
            displayOutput("0");
            break;

        case "percent":      
             if(results != null){
               results /= 100;
               displayOutput(results);

            } else
            if(currentNumber != null){
              currentNumber /= 100;
              displayOutput(currentNumber );
            }
            break;
            
        case "opposite":          
            if(results != null){
              results *= -1;
              displayOutput(results);
              currentNumber = results;
            } 
            else
            if(currentNumber != null){
              currentNumber *= -1;
              displayOutput(currentNumber);
            }
            break;

        case "divide":
            ifFromEquals();
            calculatorLogic(myValue);
            break;

        case "multiply":
            ifFromEquals();
            calculatorLogic(myValue);
            break;

        case "subtract":
            ifFromEquals();
            calculatorLogic(myValue);
            break;

        case "add":
            ifFromEquals();
            calculatorLogic(myValue);
            break;

        case "period":
            document.getElementsByClassName("clear")[0].innerHTML = "C";
            if(decimalSet == false){
                (currentNumber == null) ? currentNumber = 0 + "." : currentNumber += ".";
                 decimalSet = true;
            } else {
              console.log("Number is already a decimal");
            }
            displayOutput(currentNumber);
            break;

        case "equals":
            
            if(lastNumber != null && currentNumber != null && operator != null){
              results = doCalculation(lastNumber, currentNumber, operator);
              lastNumber = results;
              displayOutput(results);
              fromEquals = true;
            } else {
              
            }

            break;

        default:   
            document.getElementsByClassName("clear")[0].innerHTML = "C";
            document.getElementsByClassName("clear")[0].setAttribute("value", "clear");
            (currentNumber == null) ? currentNumber = myValue : currentNumber += myValue;
            currentNumber = Number(currentNumber).toString();
            displayOutput(currentNumber);
            break;
  } //end switch
} //end function
