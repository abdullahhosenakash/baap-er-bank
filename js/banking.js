// deposit
const depositButton = document.getElementById('deposit-button');
depositButton.addEventListener('click', function () {
    // get the deposit amount from input
    const depositAmountText = document.getElementById('input-deposit');
    const depositAmount = parseFloat(depositAmountText.value);
    const totalDepositAmountText = document.getElementById('total-deposit');
    const totalDepositAmount = parseFloat(totalDepositAmountText.innerText);
    const updateDeposit = depositAmount + totalDepositAmount;


    // set the updated value of deposit 
    totalDepositAmountText.innerText = updateDeposit;
    // clear input field 
    depositAmountText.value = '';

    // get the total balance
    const totalBalanceText = document.getElementById('total-balance');
    const totalBalance = parseFloat(totalBalanceText.innerText);
    const updateBalance = totalBalance + depositAmount;

    // set the updated value of balance 
    totalBalanceText.innerText = updateBalance;
});

// withdraw
const withdrawButton = document.getElementById('withdraw-button');
withdrawButton.addEventListener('click', function () {
    // get the withdraw amount from input
    const withdrawAmountText = document.getElementById('input-withdraw');
    const withdrawAmount = parseFloat(withdrawAmountText.value);
    const totalWithdrawAmountText = document.getElementById('total-withdraw');
    const totalWithdrawAmount = parseFloat(totalWithdrawAmountText.innerText);
    const updateWithdraw = withdrawAmount + totalWithdrawAmount;


    // set the updated value of withdraw 
    totalWithdrawAmountText.innerText = updateWithdraw;
    // clear input field 
    withdrawAmountText.value = '';

    // get the total balance
    const totalBalanceText = document.getElementById('total-balance');
    const totalBalance = parseFloat(totalBalanceText.innerText);
    const updateBalance = totalBalance - withdrawAmount;

    // set the updated value of balance 
    totalBalanceText.innerText = updateBalance;
});