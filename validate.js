/*
 *  function to troubleshoot keyup event listener which doesn't seem to be triggering if the initial input is valid.
 *  it works just fine when it switches to invalid then switches back to valid
 */


function checkIfNull(a){
    if (a){
        return false;
    } else {
        return true;
    }
}

function  checkIfNumeric(a){
   return (!isNaN(a));
}

function checkIfPositive(a){
    return (a>=0);
}

function checkIfOneOrMore(a){
    return (a>=1);
}

function checkIfWholeNumber(a){
    return (a%1==0);
}

function checkIfPositiveInt(a){
    return (    checkIfNull(a)==false
            &&  checkIfNumeric(a)
            &&  checkIfWholeNumber(a)
            &&  checkIfPositive(a)
            &&  checkIfOneOrMore(a));
}

function setAsInvalid(a){
    if (a.classList.contains("invalid_input_value")==false) {
        a.classList.add("invalid_input_value");
    }
    if (a.classList.contains("valid_input_value")) {
        a.classList.remove("valid_input_value");
    }
}

function setAsValid(a){
    if (a.classList.contains("invalid_input_value")) a.classList.remove("invalid_input_value");
    if (a.classList.contains("valid_input_value")==false) a.classList.add("valid_input_value");
}

function setAsWaiting(a){
    if (a.classList.contains("invalid_input_value")) a.classList.remove("invalid_input_value");
    if (a.classList.contains("valid_input_value")) a.classList.remove("valid_input_value");
}