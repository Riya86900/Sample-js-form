var style=document.createElement('style');

style.innerHTML=`

#container{
    background-color:beige;
    height:600px;
	width:550px;
	margin-left:30%;
    border:5px solid black;
	border-radius:10%;
	text-align:center;
}

`;
document.head.appendChild(style);

var fvalid = document.getElementById("Name");

var firstNameValidation = function () {
  let firstNameValue = fvalid.value.trim();
  let validFirstName = /^[A-Za-z]+$/;
  let firstNameErr = document.getElementById("firstname");
    firstNameErr.style.color = "red";

  if (firstNameValue == "") {
    firstNameErr.innerHTML = "First Name is required";
  } else if (!validFirstName.test(firstNameValue)) {
    firstNameErr.innerHTML =
      "First Name must be only string without white spaces";
        
  } else {
    firstNameErr.innerHTML = "";
    return true;
  }
};

fName.oninput = function () {
  firstNameValidation();
};

var lvalid = document.getElementById("lmame");

var lastNameValidation = function () {
  lastNameValue = lvalid.value.trim();
  validLastName = /^[A-Za-z]+$/;
  lastNameErr = document.getElementById("lastname");
  lastNameErr.style.color = "red";

  if (lastNameValue == "") {
    lastNameErr.innerHTML = "Last Name is required";
  } else if (!validLastName.test(lastNameValue)) {
    lastNameErr.innerHTML =
      "Last Name must be only string without white spaces";
  } else {
    lastNameErr.innerHTML = "";
    return true;
  }
};

lName.oninput = function () {
  lastNameValidation();
};

var mobileNumber = document.getElementById("number");

var mobileNumberValidation = function () {
  mobileNumberValue = mobileNumber.value.trim();
  validMobileNumber = /^[0-9]*$/;
  mobileNumberErr = document.getElementById("phone");
    mobileNumberErr.style.color="red";
  if (mobileNumberValue == "") {
    mobileNumberErr.innerHTML = "Mobile Number is required";
  } else if (!validMobileNumber.test(mobileNumberValue)) {
    mobileNumberErr.innerHTML = "It must be a number";
  } else if (mobileNumberValue.length != 10) {
    mobileNumberErr.innerHTML = "Mobile Number must have 10 digits";
  } else {
    mobileNumberErr.innerHTML = "";
    return true;
  }
};
phone.oninput = function () {
  mobileNumberValidation();
};

var emailAddress = document.getElementById("email");
var emailAddressValidation = function () {
  emailAddressValue = emailAddress.value.trim();
  validEmailAddress = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  emailAddressErr = document.getElementById("emails");
  emailAddressErr.style.color = "red";
  if (emailAddressValue == "") {
    emailAddressErr.innerHTML = "Email Address is required";
  } else if (!validEmailAddress.test(emailAddressValue)) {
    emailAddressErr.innerHTML =
      "Email must contain @ symbol";
  } else {
    emailAddressErr.innerHTML = "";
    return true;
  }
};

mail.oninput = function () {
  emailAddressValidation();
};


var passwordvalid= document.getElementById("pass");;

var passwordValidation = function(){

  passwordValue=passwordvalid.value.trim(); 
   validPassword=/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/
   
   passwordErr = document.getElementById("password");

   passwordErr.style.color="red";

   if(passwordValue=="")
   {
    passwordErr.innerHTML="Password is required";
   }else if(!validPassword.test(passwordValue)){
     passwordErr.innerHTML="Password must have at least one Uppercase, lowercase, numbers and special characters";
   }
   else{
     passwordErr.innerHTML="";
     return true;
   }
}

passwordvalid.oninput=function(){

   passwordValidation();


   
}


var confirmPassword= document.getElementById("confirmpassword");

var confirmPasswordValidation=function(){
   confirmPasswordValue=confirmPassword.value.trim(); 
   
   confirmPasswordErr=document.getElementById('confirmpass');
   confirmPasswordErr.style.color="red";
   if(confirmPasswordValue==""){
       confirmPasswordErr.innerHTML="Please Confirm YourPassword";
   }

  else if(confirmPasswordValue!=passwordvalid.value){
     confirmPasswordErr.innerHTML="Password Mismatch";
   }
   else{
     confirmPasswordErr.innerHTML="";
     return true;
   }
}

confirmPassword.oninput=function(){

 confirmPasswordValidation();
   
}