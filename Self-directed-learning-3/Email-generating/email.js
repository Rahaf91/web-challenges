/*Write a function called generateEmail that accepts an object as the only parameter,
 and returns <firstName>.<lastName>@example.com, all in lowercase (e.g. in this case jane.doe@example.com).*/
console.clear();

function generateEmail(user) {
  return `${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}@example.com`;
}

/*const newUser = {
  firstName: "Jane",
  lastName: "Doe",
};

console.log(generateEmail(newUser));*/

function getUserFromEmail(email) {
  if (!email.includes("@")) {
    return null;
  }
  const [usernamePart] = email.split("@");
  if (!usernamePart.includes(".")) {
    return null;
  }
  const [firstName, lastName] = usernamePart.split(".");
  return { firstName, lastName };
}

// logs null
console.log(getUserFromEmail("not an email address"));

// logs null
console.log(getUserFromEmail("nodots@example.com"));

// logs { firstName: 'Jane', lastName: 'Doe' }
console.log(getUserFromEmail("jane.doe@example.com"));

//////////////generate email//////////////////////////////

const emailForm = document.querySelector('[data-js="generateEmailForm"]');
const emailSpan = document.querySelector('[data-js="generated-email"]');

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const generatedEmail = generateEmail(data);
  emailSpan.textContent = `The Email is: ${generatedEmail}`;
});

/////////////////////guess user name///////////
const NameForm = document.querySelector('[data-js="getUserFromEmailForm"]');
const userNameSpan = document.querySelector('[data-js="guessedName"]');

NameForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const email = data.email;
  const guessedName = getUserFromEmail(email);

  if (guessedName) {
    const capitalizedFirstName =
      guessedName.firstName.charAt(0).toUpperCase() +
      guessedName.firstName.slice(1); //to capitalize the first letter
    const capitalizedLastName =
      guessedName.lastName.charAt(0).toUpperCase() +
      guessedName.lastName.slice(1); //charAt(0) It gets the first character of the  string.
    const fullName = `The User Name is:  ${capitalizedFirstName} ${capitalizedLastName}`; //slice(1)  : extracts a section of a string and returns it as a new string, starting from the specified index (in this case, index 1) to the end of the string.

    userNameSpan.textContent = fullName;
  } else {
    userNameSpan.textContent = "Unable to guess name.";
  }
});
