






function loginValidation()
{
   
    let email=document.forms.loginForm.email.value;
    let password=document.forms.loginForm.password.value;
    let emailHelp=document.querySelector('#emailHelp');
    let passwordHelp=document.querySelector('#passwordHelp');
    if(email.length<1|| email.length>20)
    {
        emailHelp.innerHTML="Please Enter a Valid Email"
        
    }
    if(password.length<1|| password.length>10)
    {
        
        passwordHelp.innerHTML="Please Enter a Valid Password"
    }
}