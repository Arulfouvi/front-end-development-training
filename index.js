    function validate(){
        var username= document.getElementById("username").value;
        var password=document.getElementById("password").value;
        var email=document.getElementById("email").value;
        var confirmpassword=document.getElementById("password1").value;

 //name validate
          if(username==null||username==""){
              document.getElementById("error").innerHTML="*please fill the username*";
          }
          else{
             document.getElementById("error").innerHTML="";
          }
 //email validate
        var femailpattern=[/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/];
            if(email==null||email==""){
                document.getElementById("error1").innerHTML="*please fill the email*"
            }
            else if(!femailpattern.test){
                  document.getElementById("error1").innerHTML="*please fill the email correct format*"
            }
            else{
                document.getElementById("error1").innerHTML="";
            }
    
 // password validate
        var fpasswordpattern=[/^[A-Za-z]\w{7,14}$/];
          if(password==null||password==""){
            document.getElementById("error2").innerHTML="*please fill the password*";
          }
          else if(!fpasswordpattern.test){
            document.getElementById("error2").innerHTML="*please enter valid password*";
          }
          else{
            document.getElementById("error2").innerHTML="";
          }
 //confirm password         
      
           if(password==null||password==""){
              document.getElementById("error3").innerHTML="*please fill the password*"
           }
           else if(password !=password1){
            document.getElementById("error3").innerHTML="*password does not matched*"
           }


    }