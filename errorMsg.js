function getErrorMsg(msg) {
    let errorMsg = document.createElement("span");
    errorMsg.textContent=msg;
    errorMsg.classList.add("errorMsg");
    return errorMsg;
}

function checkHasErrorMsg(a){
    if (a.nextElementSibling) {
        return a.nextElementSibling.classList.contains("errorMsg");
    }else return false;
}

function appendErrorMsg(a, msg){
    a.insertAdjacentElement("afterend", getErrorMsg(msg));
}

function removeErrorMsg(a){
    if (checkHasErrorMsg(a)) {
        a.nextElementSibling.remove();
    }
}