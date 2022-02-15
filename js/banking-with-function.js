function getInputValue(inputId) {
    const inputAmountText = document.getElementById(inputId);
    const inputAmountValue = inputAmountText.value;
    const inputAmount = parseFloat(inputAmountValue);
    inputAmountText.value = '';
    if (inputAmountValue.length == inputAmount.toString().length) {
        return inputAmount;
    }
}

function updateBalance(inputId, balanceId, isDeposit, isWithdraw) {
    const balanceText = document.getElementById(balanceId);
    const balance = parseFloat(balanceText.innerText);
    const totalBalanceText = document.getElementById('total-balance');
    const totalBalance = parseFloat(totalBalanceText.innerText);
    const inputValue = getInputValue(inputId);
    let newTotalBalance = totalBalance;
    if (inputValue > 0) {
        if (isDeposit || newTotalBalance > inputValue) {
            const updateBalance = balance + inputValue;
            balanceText.innerText = updateBalance;
        }
        else {
            alert("You don't have sufficient balance!");
        }

        if (isDeposit) {
            newTotalBalance = inputValue + totalBalance;
        }
        else if (isWithdraw && inputValue <= newTotalBalance) {
            newTotalBalance = totalBalance - inputValue;
        }
        totalBalanceText.innerText = newTotalBalance;
    }
    else {
        alert('Please enter correct amount');
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    updateBalance('input-deposit', 'total-deposit', true, false);
});

document.getElementById('withdraw-button').addEventListener('click', function () {
    updateBalance('input-withdraw', 'total-withdraw', false, true);
})