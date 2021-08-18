const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector('#error-message');
const noteArray = [2000,500,100,20,10,5,1];
const noOfNotes  = document.querySelectorAll('.no-of-notes');


const errMessage = (msg) => {

    message.style.display = "block";
    message.innerHTML = msg;

}

const calculateChange = (retAmount) => {

        for (let i = 0; i < noteArray.length; i++) {

           const numOfNotes =  Math.trunc(retAmount / noteArray[i]);
           retAmount %= noteArray[i];  
           noOfNotes[i].innerText = numOfNotes;

        }


}


const checkHandler = () => {

    message.style.display = "none";
    if (Number(billAmount.value) > 0) {

        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            
            amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
            calculateChange(amountToBeReturned);
            console.log("Fine now");
            
        } else {

            errMessage("Do you want to wash our dishes? 😠");
        }

    } 
    else {
        errMessage("Invalid amount");
    }


}


checkButton.addEventListener("click", checkHandler);


