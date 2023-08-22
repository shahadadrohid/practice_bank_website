document.getElementById('btn-deposit').addEventListener('click', function(){

    const getCurrentDepositAmount = parseFloat(getInputValue('deposit-field'));
    const getPreviousDepositAmount = getElementById('deposit-amount');

    const currentTotalDepositAmount = getCurrentDepositAmount + getPreviousDepositAmount;
    setElementById('deposit-amount', currentTotalDepositAmount);

    const getTotalDepositAmount = getElementById('total-amount');
    const currentTotalAmount = getTotalDepositAmount + getCurrentDepositAmount;
    setElementById('total-amount', currentTotalAmount);

})

document.getElementById('btn-withdraw').addEventListener('click', function(){

    const getWithdrawAmount = parseFloat(getInputValue('withdraw-field'));
    const getCurrentWithdrawAmount = getElementById('withdraw-amount');
    console.log(getCurrentWithdrawAmount);

    const currentTotalWithdrawAmount = getWithdrawAmount + getCurrentWithdrawAmount;
    setElementById('withdraw-amount', currentTotalWithdrawAmount);

    const getTotalWithdrawAmount = getElementById('total-amount');
    const currentTotalAmount = getTotalWithdrawAmount - getWithdrawAmount;
    setElementById('total-amount', currentTotalAmount);

})

function getElementById(amountId){
    const getPreviousAmountText = document.getElementById(amountId);
    const getPreviousAmount = parseFloat(getPreviousAmountText.innerText);

    return getPreviousAmount;
}

function setElementById(amountId, newValue){
    const getTextElement = document.getElementById(amountId);
    getTextElement.innerText = newValue;
}