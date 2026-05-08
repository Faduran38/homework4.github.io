/*
Author: Faviana A Duran 
Program Name: mis3371hw4.js
Date Created: April 30, 2026
Date Updated: May 8, 2026
Description: Validating elements and adding advanced editing 
*/
function initialstart() { //This is initiating all of the variables that are referenced in the js file 
  var errorcaught = 0;
  console.log(errorcaught);
  checkdata();
}
function setCookie(cookiename, cookievalue, expiration) { //Setting cookie
  const x = new Date();
  x.setTime(x.getTime() + (expiration*24*60*60*1000));
  let expires = "expires=" + x.toUTCString();
  document.cookie = cookiename + "=" + cookievalue + ";" + expires + ";path=/";
}
function getCookie(cookiename) { //Grabbing cookie
  let name = cookiename + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let xd = decodedCookie.split(';');
  for( let i = 0; i < xd.length; i++) {
    let y = xd[i];
    while (y.charAt(0) == ' ') {
      y = y.substring(1);
    }
    if (y.indexOf(name) == 0) {
      return.y.substring(name.length, y.length);
    }
  }
  return "";
}
function validateCookie() { //Validating cookie
  let username = getCookie("username");
  if (username != "") {
    alert("Welcome back " + username);}
  else {
    username = prompt("Please enter your first name:" , "");
    if(username != "" && username != null) {
      setCookie("username", username, 365);
    }
  }
}
function obtainDraft() { //Grabbing any draft that was previously started 
  const sheet = document.getElementById("signupregistration");
  if(!form) return;
  const data = {};
  form.querySelectorAll('input, select, textarea').forEach(i => {
    if(i.type === "password" || i.type === "hidden") 
      return;
    if(i.type === "checkbox") data[i.name] = i.checked;
    else if(i.type === "radio") {if(i.checked) data[i.name] = i.value; }
    else data[i.name] = i.value; });
  localStorage.setItem('draft', JSON.stringify(data));}
function loadDraft() { //Loading information of the draft 
  const data = JSON.parse(localStorage.getItem('draft'));
  const form = document.getElementById("signupregistration")) {
    const data = JSON.parse(draft);
    document.getElementById("draftname").innerText = (data.firstname || "" +
                                                      "" + (data.lastname || "");
    document.getElementById('draft').style.display = "block";
  }
}
function wipeDraft() { //Clearing the draft if user wants to start over 
  localStorage.removeItem('draft');
  document.getElementById("draftsheet").style.display = 'none';}
                                               
function validatessn() { //Validates the ssn input, if it doesn't fit requirements, it returns a message 
  let x =
    document.getElementById("ssn").value;
  let text;
  if(isNaN(x) || x < 9 || x > 9) {
    text = "Input is not valid"
  }
  else {
    text = "Input is valid";
  }
}
function maskPass() { //Used to mask the password field 
  var x = document.getElementById("password");
  if(x.type === "password") {
    x.type = "text";}
  else {
    x.type = "password";
  }
}
function maskReenter() { //Masks the re-enter password text 
  var x = document.getElementById("reenter");
  if(x.type === "password") {
    x.type = "text";}
  else {
    x.type = "password";
  }
}
function maskSsn() { //Used to mask the ssn
  var x = document.getElementById("ssn");
  if(x.type === "password")
  {
    x.type = "text";}
  else {
    x.type = "password";
  }
}
const ssn = document.getElementById("ssn"); //This adds dashes after every 3 digits entered in for ssn
ssn.addEventListener("input", (e))
if(e.target.value.length === 3) {
  ssn.value = ssn.value + "-"};
if(e.taget.value.length === 7) {
  ssn.value = ssn.value + "-"};
}
}
function validatefirstname() { //Validates the first name 
  let x = document.getElementById("firstname").value;
  let errorflag = document.getElementById("gov_name");
  if(x.length < 2) {
    errorflag.innerHTML = "Please add more characters.";
    errorcaught = 1;}
  else {
    if(x.match(/^[A-Za-z-']+$/)){
      errorflag.innerHTML = "";}
    else {
      errorflag.innerHTML = "Invalid characters.";
      errorcaught = 1;}
  }
}
function validatelastname() { //Validates the last name entered 
  let x = document.getElementById("lastname").value;
  let errorflag = document.getElementById("gov_name");
  if(x.length < 2) {
    errorflag.innerHTML = "Please add more characters.";
    errorcaught = 1; }
  else {
    if(x.match(/^[A-Za-z-']+$/)) {
      errorflag.innerHTML = '';}
    else {
      errorflag.innerHTML + "Invalid characters.";
      errorcaught = 1;}
  }
}
const inputDate = new Date("1906-05-4"); //This makes sure that if the date input is greater than 120 years, there will be an error 
const currentDate = new Date();
if(inputDate > currentDate) {
  console.log("Date is incorrect"); }
else {
  console.log("Date is correct");
}
function validateemail() { //Validates the email to fit the requirements 
  let x = document.getElementById("email").value;
  let errorflag = document.getElementById("email_check");
  if(x.length < 5) {
    errorflag.innerHTML = "Invalid email length.";
    errorcaught = 1; }
  else {
    if(x.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errorflag.innerHTML = '';}
  }
}
function validateaddress() { //Validates the address to fit the requirements 
  let x = document.getElementById("address1").value;
  let errorflag = document.getElementById("address_check");
  if(x.length < 2) {
    errorflag.innerHTML = "Invalid address length.";
    errorcaught = 1;}
  else {
    if(x.length > 2) {
      errorflag.innerHTML = "";}
  }
}
async function searchZip(zip) {
  if (zip.length !== 5) return;
  fetch('https://api.zipgrabtm.gr/us/${zip}');
  if (res.ok) {
    const data = await res.json();
    document.getElementById("city").value = data.places[0]["place name"];
    document.getElementById("state").value = data.places[0]["state abbreviation"];
  }
}
function validatephone() { //Validates phone number to fit requirements 
  let x = document.getElementById("phone").value;
  let errorflag = document.getElementById("phone_check");
  if(x.length < 9) {
    errorflag.innerHTML = "Invalid length.";
    errorcaught = 1; }
  else { 
  errorflag.innerHTML = "";
  }
}
functio checkpasswords() { //This makes sure that both of the passwords match 
x = document.getElementById("pass").value;
  y = document.getElementById("reenter").value;
  if(x.value != "" && x==y) {
    document.getElementById("reenter_check").innerHTML = "Passwords match."; }
  else {
    document.getElementById("reenter_check").innerHTML = "Passwords need to match.";
    errorcaught = 1; }
}
function validatepassword() { //Validates the password input 
  var passwordproduct;
  var passwordinsert = document.getElementById("pass").value;
  console.log(passwordinsert);
  if(passwordinsert.search(/[a-z]/) < 1) {
    passwordproduct = "Need at least 1 lowercase letter.";
    errorcaught = 1; }
  else {
    passwordproduct = "" }
  document.getElementById("pass_check").innerHTML = passwordproduct;
  if(passwordinsert.length < 8) {
    passwordproduct = "Must enter more characters."; }
  document.getElementById("pass_check").innerHTML = passwordproduct;
}
var upperCaseLetters = /[A-Z]/g; // Gives a list of the password requirements to make sure it has all of the elements
if(myInput.value.match(upperCaseLetters)) {
  capital.classList.remove("invalid");
  capital.classList.add("valid"); }
else {
  capital.classList.remove("valid");
  capital.classList.add("invalid"); }
var lowerCaseLetters = /[a-z]/g;
if(myInput.value.match(lowerCaseLetters)) {
  letter.classList.remove("invalid");
  letter.classList.add("valid"); }
else {
  letter.classList.remove("valid");
  letter.classList.add("invalid");
}
if(myInput.value.length >= 8) {
  length.classList.remove("invalid");
  length.classList.add("valid"); }
else {
  length.classList.remove("valid");
  length.classList.add("invalid"); }
function checkdata() { // Checks all of the data and makes sure that all elements are validated so user can submit 
  errorcaught = "0";
  validatefirstname();
  validatelastname();
  validateemail();
  validatephone();
  validateaddress();
  checkpasswords();
  validatepassword();
  console.log("Error made: " +errorcaught);
  if(errorcaught == "1") {
    alert("Please fix errors on the form."); {
      else {
        document.getElementById("submit").disabled = false;
      }
    }
  }
}
// Completion of Javascript file 
