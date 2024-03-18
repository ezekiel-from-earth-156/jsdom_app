function validate(){
    // alert('Form submited');
    const fullName = document.myForm.fullName.value;
    const email = document.myForm.email.value;
    const phone = document.myForm.phone.value;
    const password = document.myForm.password.value;
    const confirm_password = document.myForm.confirm_password.value;

    //error
    const name_err = document.querySelector('.name-err');
    const phone_err = document.querySelector('.phone-err');
    const email_err = document.querySelector('.email-err');

    if(fullName == ''){
        name_err.textContent = "Name field is required";
        return false;
    }
    if(email == ''){
        email_err.textContent = 'Email field is required';
        return false;
    }
    if(phone == ''){
        phone_err.textContent = 'Phone number is required';
    }
    if(isNaN(phone)){
        phone_err.textContent = 'phone requires a number';
        return false;
    }
    if( phone.length < 11 || phone.length > 13){
        phone_err.textContent = 'phone number is invalid';
        return false;
    }
    if(password == ''){
        password_err.textcontent = 'password field is required';
        return false;
    }
    if(password.length > 8){
        password_err.textcontent = 'password limit exceeded';
        return false;
    }
    if(confirm_password == ''){
        confirm_err.textContent = 'confirm field is required';
        return false;
    }
    if(password !== confirm_password){
        confirm_err.textContent = 'password mismatch';
        return false;
    }
}
