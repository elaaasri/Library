// selecting elements :
const newBookButton = document.querySelector(".new-book");
const bookForm = document.querySelector("#book-form");
const authorInput = document.querySelector("#author-input");
const titleInput = document.querySelector("#title-input");
const numOfPagesInput = document.querySelector("#number-input");
const booksContainer = document.querySelector(".books-container");
const checkbox = document.querySelector("#checkbox");
// declaring variables :
let myLibrary = [];
let readStatusButton;
let book;
// display the form :
newBookButton.addEventListener("click", () => {
  bookForm.style.cssText = "display; flex";
});
// book class :
class Book {
  constructor(author, title, numberOfPages) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.checkbox = checkbox.checked;
  }
  // toggle the readStatusButton if its clicked :
  toggleReadButton() {
    let readStatusButton = this;
    if (readStatusButton.textContent === "Read") {
      readStatusButton.textContent = "Not Read";
      readStatusButton.style.cssText = "background-color: red";
    } else {
      readStatusButton.textContent = "Read";
      readStatusButton.style.cssText = "background-color: greenyellow";
    }
  }
  // func to remove the current book :
  deleteBook() {
    let bookDiv = this;
    bookDiv.remove();
  }
}
// create new book object :
function addBookToLibrary() {
  const newBook = new Book(
    authorInput.value,
    titleInput.value,
    numOfPagesInput.value
  );
  myLibrary.push(newBook);
  return { newBook };
}
// book event :
bookForm.addEventListener("submit", (event) => {
  // preventing default behavior of the form :
  event.preventDefault();
  showBook();
});
// func to show books :
function showBook() {
  book = addBookToLibrary().newBook;
  // creating new elements :
  const bookDiv = document.createElement("div");
  const authorOutput = document.createElement("div");
  const titleOutput = document.createElement("div");
  const numberOfPagesOutput = document.createElement("div");
  const removeBookButton = document.createElement("button");
  readStatusButton = document.createElement("button");
  // setting classlist of the new elements :
  bookDiv.classList = "show-book";
  authorOutput.classList = "author-output";
  titleOutput.classList = "title-output";
  numberOfPagesOutput.classList = "numOfPages-output";
  removeBookButton.classList = "remove-button";
  readStatusButton.classList = "read-button";
  // adding text content :
  authorOutput.textContent = book.author;
  titleOutput.textContent = book.title;
  numberOfPagesOutput.textContent = book.numberOfPages;
  // elements textcontent :
  removeBookButton.textContent = "Remove";
  // appending elements :
  booksContainer.appendChild(bookDiv);
  bookDiv.appendChild(authorOutput);
  bookDiv.appendChild(titleOutput);
  bookDiv.appendChild(numberOfPagesOutput);
  bookDiv.appendChild(removeBookButton);
  bookDiv.appendChild(readStatusButton);
  // calling this func :
  checkboxStatusCheck();
  // event button to toggle read button :
  readStatusButton.addEventListener("click", book.toggleReadButton);
  // event button to remove the current book :
  removeBookButton.addEventListener("click", book.deleteBook.bind(bookDiv));
}
// func to check the box status :
function checkboxStatusCheck() {
  if (book.checkbox === true) {
    readStatusButton.textContent = "Read";
    readStatusButton.style.cssText = "background-color: greenyellow";
  } else {
    readStatusButton.textContent = "Not Read";
    readStatusButton.style.cssText = "background-color: red";
  }
}

// ######### sign up form validation : #########
const logInForm = document.getElementById("log-in-form");
const loginSubmitButton = document.getElementById("login-submit-button");
const popupOverlay = document.getElementById("popup-overlay");
const popupWindow = document.getElementById("popup-window");
const logInButton = document.getElementById("log-in-button");
const loginCancelButton = document.getElementById("login-cancel-button");
const countryInput = document.getElementById("country");
const fullNameInput = document.getElementById("full-name");
const fullNameError = document.querySelector("#full-name-error");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const zipInput = document.getElementById("zip");
const zipError = document.getElementById("zip-error");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const confirmPasswordInput = document.getElementById("password-confirm");
const confirmPasswordError = document.getElementById("confirm-password-error");
// full name input event :
// validate full name input:
const validateFullName = function () {
  if (fullNameInput.validity.valid) {
    fullNameError.id = "";
    fullNameInput.style.border = "2px dashed green";
    fullNameError.textContent = "";
  } else if (fullNameInput.validity.valueMissing) {
    fullNameErrorMessage("You need to enter a full name.");
  } else if (fullNameInput.validity.tooShort) {
    fullNameErrorMessage(
      `full name should be at least ${fullNameInput.minLength} characters; you entered ${fullNameInput.value.length}.`
    );
  } else {
    fullNameErrorMessage("must be a non-numeric value.");
  }
};
// set full name error message and styles :
const fullNameErrorMessage = function (errorMessage) {
  fullNameError.id = "fullName-error-active";
  fullNameError.textContent = errorMessage;
  fullNameInput.style.border = "2px dashed red";
};
// full name input event :
fullNameInput.addEventListener("input", validateFullName);
// email input event :
// validate email input:
const validateEmail = function () {
  if (emailInput.validity.valid) {
    emailError.id = "";
    emailError.textContent = "";
    emailInput.style.border = "2px dashed green";
  } else if (emailInput.validity.valueMissing) {
    emailErrorMessage("You need to enter an email address.");
  } else {
    emailErrorMessage("must include '@' (eg: name@domain.com)");
  }
};
// set email error message and styles :
const emailErrorMessage = function (errorMessage) {
  emailError.id = "email-error-active";
  emailInput.style.border = "2px dashed red";
  emailError.textContent = errorMessage;
};
// email input event :
emailInput.addEventListener("input", validateEmail);
// zip input event :
// validate zip input:
const validateZip = function () {
  if (zipInput.validity.valid) {
    zipError.id = "";
    zipError.textContent = "";
    zipInput.style.border = "2px dashed green";
  } else if (zipInput.validity.valueMissing) {
    zipErrorMessage("You need to enter zip code.");
  } else if (zipInput.validity.patternMismatch) {
    checkZipCode().setZipPatternAndErrorMessage();
  }
};
// set zip error message and styles :
const zipErrorMessage = function (errorMessage) {
  zipError.id = "zip-error-active";
  zipInput.style.border = "2px dashed red";
  zipError.textContent = errorMessage;
};
// zip code event :
zipInput.addEventListener("input", validateZip);
// check zip code and return correct pattern and error message :
const checkZipCode = function () {
  const countryValue = countryInput.value;
  // set all constrains and their error messages :
  const allConstraintsArray = [
    {
      name: "Maroc",
      pattern: "^\\d{5}$",
      errorMessage: "Morocco ZIP codes must have exactly 5 digits, e.g., 12345",
    },
    {
      name: "Egypt",
      pattern: "^\\d{5}$",
      errorMessage: "Egypt ZIP codes must have exactly 5 digits, e.g., 12345",
    },
    {
      name: "Germany",
      pattern: "^(D-)?\\d{5}$",
      errorMessage:
        "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
    },
    {
      name: "France",
      pattern: "^(F-)?\\d{5}$",
      errorMessage:
        "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
    },
  ];
  // get target constaint :
  const targetConstraint = allConstraintsArray.filter(
    (constraint) => constraint.name === countryValue
  );
  // check zip code pattern :
  const setZipPatternAndErrorMessage = function () {
    targetConstraint.forEach((element) => {
      const name = element.name;
      const pattern = element.pattern;
      const errorMessage = element.errorMessage;
      if (name === countryValue) {
        zipInput.setAttribute("pattern", pattern);
        zipErrorMessage(errorMessage);
      }
    });
  };
  return { setZipPatternAndErrorMessage };
};
// password input event :
// validate password input:
const validatePassword = function () {
  if (passwordInput.validity.valid) {
    passwordError.id = "";
    passwordError.textContent = "";
    passwordInput.style.border = "2px dashed green";
  } else if (passwordInput.validity.valueMissing) {
    passwordErrorMessage("You need to enter a password.");
  } else {
    passwordErrorMessage(
      "Password must be at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character including (@$!%*#?&.'+,:;<=>^_`~)."
    );
  }
};
// set password error message and styles :
const passwordErrorMessage = function (errorMessage) {
  passwordError.id = "zip-error-active";
  passwordInput.style.border = "2px dashed red";
  passwordError.textContent = errorMessage;
};
// password event :
passwordInput.addEventListener("input", validatePassword);
// confirm password input event :
// validate confirm password input:
const validateConfirmPassword = function () {
  const passwordValue = passwordInput.value;
  const confirmPasswordValue = confirmPasswordInput.value;
  if (
    confirmPasswordInput.validity.valid &&
    passwordValue === confirmPasswordValue
  ) {
    confirmPasswordError.id = "";
    confirmPasswordError.textContent = "";
    confirmPasswordInput.style.border = "2px dashed green";
  } else if (confirmPasswordInput.validity.valueMissing) {
    confirmPasswordErrorMessage("u must enter the same password.");
  } else {
    confirmPasswordErrorMessage(
      "Password confirmation must be identical to your password."
    );
  }
};
// set confirm password error message and styles :
const confirmPasswordErrorMessage = function (errorMessage) {
  confirmPasswordError.id = "zip-error-active";
  confirmPasswordInput.style.border = "2px dashed red";
  confirmPasswordError.textContent = errorMessage;
};
// confirm password event :
confirmPasswordInput.addEventListener("input", validateConfirmPassword);
// display form :
const showForm = function () {
  popupOverlay.style.display = "flex";
  popupWindow.style.display = "flex";
};
logInButton.addEventListener("click", showForm);
// hide form :
const hideForm = function (event) {
  event.preventDefault();
  popupOverlay.style.display = "none";
  popupWindow.style.display = "none";
};
// log in cancel event :
loginCancelButton.addEventListener("click", hideForm);
// checks all inputs validation :
const checkLogInFormValidity = function () {
  const allInputs = logInForm.querySelectorAll("input");
  if (logInForm.checkValidity()) {
    alert("congratulations!");
    logInForm.reset();
    allInputs.forEach((input) => {
      input.style.border = "none";
    });
    return;
  } else alert("not valid!");
};
// log in submit event :
loginSubmitButton.addEventListener("click", checkLogInFormValidity);
// pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$";
// pattern =
// "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&#_k])[A-Za-zd@$!%*?&#_k]{8,}$";
