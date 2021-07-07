   
    
    // else if(password.length<6){  
    //   alert("Password must be at least 6 characters long.");  
    //   return false;  
    //   }  
    // }  
     
    function validatename(){
        const lName=document.regForm.lName.value;  
        const FName=document.regForm.FName.value;
        if (lName==null || lName==""){  
            alert("Last Name can't b.e blank");  
            return false;  
          }else if (fName==null || fName==""){  
              alert("First Name can't be blank");  
              return false; 
          }else if (fName === lName){
              alert("First Name and Last Name cant be the same")
              return false
          }

    }

    function validate

    function matchpassword(){ 
        const password=document.regForm.password.value;
        const retypePassword=document.regForm.retypePpassword.value; 
        // const firstpassword=document.regForm.password.value;  
        // const secondpassword=document.regForm.password2.value;  
          
        if(password==retypePassword){  
        return true;   
        }  
        else{  
        alert("password must be same!");  
        return false;  
        }  
        }


        function validateemail() {  
        const email=document.regForm.email.value; 
        const x=document.regForm.email.value;  
        const atposition=x.indexOf("@");  
        const dotposition=x.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
          alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
          return false;  
          }  
        }  
        
        function validateusername(){
            const username=document.regForm.username.value;

            const username=document.getElementById("username").value;///get id with value 
            const usernamepattern=/^[A-Za-z .]{3,15}$/;////Regular expression
            if(usernamepattern.test(username))
            {
                document.getElementById("username").style.backgroundColor='yellow';
            }
            else
            {
                document.getElementById("username").style.backgroundColor='red'; }
            }

            function validateform(){
                validatename();
                validateusername();
                matchpassword();
                validateemail();
            }