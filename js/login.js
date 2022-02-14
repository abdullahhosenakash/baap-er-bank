const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const passwordField = document.getElementById('user-password');
    if (emailField.value == 'sontan@baap.com' && passwordField.value == 'secret') {
        window.location.href = 'banking.html'
    }
    else {
        alert('Please enter correct email and password')
    }
})