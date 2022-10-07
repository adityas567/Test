
function loginValidation(e)
{
    e.preventDefault();
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

//how to validate a login form?
<form name="loginform" onSubmit="return validateForm();" action="main.html" method="post">
        
        </form>
        
        <script>
            function validateForm() {
                var un = document.loginform.usr.value;
                var pw = document.loginform.pword.value;
                var username = "username"; 
                var password = "password";
                if ((un == username) && (pw == password)) {
                    return true;
                }
                else {
                    alert ("Login was unsuccessful, please check your username and password");
                    return false;
                }
          }
        </script>


