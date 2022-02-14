function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmount = parseFloat(inputField.value);
    inputField.value = '';
    return inputAmount;
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('input-deposit');


    const totalDepositAmountText = document.getElementById('total-deposit');
    const totalDepositAmount = parseFloat(totalDepositAmountText.innerText);
    const updateDeposit = depositAmount + totalDepositAmount;
    totalDepositAmountText.innerText = updateDeposit;


    // get the total balance
    const totalBalanceText = document.getElementById('total-balance');
    const totalBalance = parseFloat(totalBalanceText.innerText);
    const updateBalance = totalBalance + depositAmount;

    // set the updated value of balance 
    totalBalanceText.innerText = updateBalance;
});

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('input-withdraw');


    const totalWithdrawAmountText = document.getElementById('total-withdraw');
    const totalWithdrawAmount = parseFloat(totalWithdrawAmountText.innerText);
    const updateWithdraw = withdrawAmount + totalWithdrawAmount;


    // set the updated value of withdraw 
    totalWithdrawAmountText.innerText = updateWithdraw;


    // get the total balance
    const totalBalanceText = document.getElementById('total-balance');
    const totalBalance = parseFloat(totalBalanceText.innerText);
    const updateBalance = totalBalance - withdrawAmount;

    // set the updated value of balance 
    totalBalanceText.innerText = updateBalance;
});