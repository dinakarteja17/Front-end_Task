const username = document.querySelector('#stdname');
//const username1=username;
const mailid = document.querySelector('#stdmail');
const phonenumber = document.querySelector('#mobnum');
const button = document.querySelector('#submit');

 const mailRegex =/\.com$|\.in$/;
 const usernameRegex =/^[A-Za-z_-]*$/;
 
button.addEventListener('click',function(e)
{
   e.preventDefault();
    details(); 
});

const error1 = document.querySelector('#span1');
const error2 = document.querySelector('#span2');
const error3 = document.querySelector('#span3');

const details =() =>
{
  const studentName=username.value;
  const studentMail=mailid.value.toLowerCase();
  const studentPhone=phonenumber.value;
  
  //student-name
  if(studentName === "")
  {
     error1.innerText="username is required";
     
  }
  else if (!usernameRegex.test(studentName))
  {
     validation(); 

  }
  else
   error1.innerText="";


//student-mail
  if(studentMail === "")
  {
     error2.innerText="mail is required";

  }
   else if (mailRegex.test(studentMail))
   {
      error2.innerText="";
   }
   else
   {
     error2.innerText="not valid mail";
   
   }
  

// student-phone
  if(studentPhone === "" )
  { 
     error3.innerText="Phonenumber is required";
   
  }
  else if(studentPhone.length < 10 || studentPhone.length >10)
   {
      error3.innerText="enter a Valid-Numberr";
    validatePhoneNumber(studentPhone);
   }
     else 
     {
        error3.innerText="";
     }

  }

  //functions:

 function validation()
  {
    error1.innerText="have 8 to 20 characters:one(upper or lower or - or _)";

  }

  function validatePhoneNumber(studentPhone) {
    // Remove any non-numeric characters from the input string
    const numericPhoneNumber = studentPhone.replace(/\D/g, '');
    console.log(numericPhoneNumber);

  if (numericPhoneNumber.length === 10 ) 
  {
    console.log("valid number"); 
  } 
  else if(numericPhoneNumber.length > 10 ) 
  { 
    error3.innerText="not vaild number";
  }
}
  

function updateequal()
{
  const qualification = document.querySelector("#stdqualification");
  const stream = document.querySelector("#stream");

  stream.innerHTML="";

  var selectQualification = qualification.value;
  
  if(selectQualification === "btech")
  {
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    const option3 = document.createElement("option");
    const option4 = document.createElement("option");
   
    option1.innerText = "ECE";
    option2.innerText = "MECH";
    option3.innerText = "CIVIL";
    option4.innerText = "CSE";
 
    stream.append(option1);
    stream.append(option2);
    stream.append(option3);
    stream.append(option4);

  }
  else if(selectQualification === "bse")
  {
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    const option3 = document.createElement("option");

    option1.innerText = "PHYSICS";
    option2.innerText = "MATHS";
    option3.innerText = "CHEMISTRY";
    
    stream.append(option1);
    stream.append(option2);
    stream.append(option3);

  }
  
}

