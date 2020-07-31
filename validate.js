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
            &&  checkIfPositive(a));
}

function checkIfAtLeast1(a){
    return (    checkIfPositiveInt(a)
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

function isValid(a) {
    return a.classList.contains("valid_input_value");
}

function validateNumericInput(a){               // This one allows 0 or more
    if (checkIfNull(a.value)){
        setAsWaiting(a);
        if (checkHasErrorMsg(a)) {
            removeErrorMsg(a);
        }
    }else if (checkIfPositiveInt(a.value)==false) {
        setAsInvalid(a);
        if(checkHasErrorMsg(a)==false){
            appendErrorMsg(a, "Input must be a number.")
        }
    }else if (checkIfPositiveInt(a.value)){
        setAsValid(a);
        if (checkHasErrorMsg(a)) removeErrorMsg(a);
    }

}

function validateNumericInputOneOrMore(a){      // This one allows 1 or more
    if (checkIfNull(a.value)){
        setAsWaiting(a);
        if (checkHasErrorMsg(a)) {
            removeErrorMsg(a);
        }
    }else if (checkIfAtLeast1(a.value)==false) {
        setAsInvalid(a);
        if(checkHasErrorMsg(a)==false){
            appendErrorMsg(a, "Input must be a number.")
        }
    }else if (checkIfAtLeast1(a.value)){
        setAsValid(a);
        if (checkHasErrorMsg(a)) removeErrorMsg(a);
    }

}