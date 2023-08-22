function loginAccount() {

    const getEmail = getInputValue('email-field');
    const getPassword = getInputValue('password-field');

    if(getEmail == 'shahadad@gmail.com' && getPassword == 'rohid4590'){
        window.location.href = 'calculation.html';
    }
    else{
        alert('Please enter valid email and password');
    }
}

function getInputValue(fieldId) {

    const getField = document.getElementById(fieldId);
    const getFieldText = getField.value;

    getField.value = '';

    return getFieldText;
}