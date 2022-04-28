const form = document.querySelector("form");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const age = document.querySelector("#age");
const email = document.querySelector("#email");
const button = document.querySelector("#submit");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
  let text = "";
  let message = `Please confirm the data is true:
  first name: ${fname.value}
  Last name: ${lname.value}
  age: ${age.value}
  email: ${email.value}`;
  console.log(message);
  if (confirm(message) === true) {
    text = "congratulations you successfully sent this form";
    // form.submit();
  } else {
    text = "Please fill again and submit";
  }
  result.innerHTML = text;
  // e.preventDefault();
});

arr = [1, 2];
console.log(arr);
