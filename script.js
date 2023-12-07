// selecting elements :
const newBookButton = document.querySelector(".new-book");
const bookForm = document.querySelector("#book-form");
const authorInput = document.querySelector("#author-input");
const titleInput = document.querySelector("#title-input");
const numOfPagesInput = document.querySelector("#number-input");
const booksContainer = document.querySelector(".books-container");
const checkbox = document.querySelector("#checkbox");

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

function addBookToLibrary() {
  const newBook = new Book(
    authorInput.value,
    titleInput.value,
    numOfPagesInput.value
  );
  myLibrary.push(newBook);

  return { newBook };
}

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
// ###################################
const popupOverlay = document.getElementById("popup-overlay");
const popupWindow = document.getElementById("popup-window");
const logInButton = document.getElementById("log-in-button");
const loginCancelButton = document.getElementById("login-cancel-button");
const showForm = function () {
  popupOverlay.style.display = "flex";
  popupWindow.style.display = "flex";
};
const hideForm = function () {
  popupOverlay.style.display = "none";
  popupWindow.style.display = "none";
};
logInButton.addEventListener("click", showForm);
loginCancelButton.addEventListener("click", hideForm);
// ####################
// const loginSubmitButton = document.getElementById("login-submit-button");
const fullNameInput = document.getElementById("full-name");
const fullNameError = document.querySelector("#full-name-error");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const zipInput = document.getElementById("zip");
const zipError = document.getElementById("zip-error");
// full name input event :
// validate full name input:
const validateFullName = function () {
  if (fullNameInput.validity.valid) {
    fullNameError.className = "";
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
  fullNameError.className = "fullName-error-active";
  fullNameError.textContent = errorMessage;
  fullNameInput.style.border = "2px dashed red";
};
fullNameInput.addEventListener("input", validateFullName);
// email input event :
// validate email input:
const validateEmail = function () {
  if (emailInput.validity.valid) {
    emailError.className = "";
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
  emailError.className = "email-error-active";
  emailInput.style.border = "2px dashed red";
  emailError.textContent = errorMessage;
};
emailInput.addEventListener("input", validateEmail);
// zip input event :
const validateZip = function () {
  console.log(zipInput.validity.patternMismatch);
  if (zipInput.validity.valid) {
    console.log("valid");
    zipError.className = "";
    zipError.textContent = "";
    zipInput.style.border = "2px dashed green";
  } else if (zipInput.validity.valueMissing) {
    zipErroMessage("You need to enter zip code.");
  } else if (zipInput.validity.patternMismatch) {
    setPattern();
  } else {
    console.log("invalid");
    zipError.className = "email-error-active";
    zipInput.style.border = "2px dashed red";
    // zipInput.textContent = errorMessage;
    // checkZip();
    // emailErrorMessage("must include '@' (eg: name@domain.com)");
  }
};
const zipErroMessage = function (errorMessage) {
  zipError.className = "email-error-active";
  zipInput.style.border = "2px dashed red";
  zipError.textContent = errorMessage;
};
const setPattern = function () {
  const countryValue = document.getElementById("country").value;
  const allConstraintsArray = [
    {
      name: "Maroc",
      pattern: "^d{5}$",
      errorMessage: "Morocco ZIP codes must have exactly 5 digits, e.g., 12345",
    },
    {
      name: "Egypt",
      pattern: "^d{5}$",
      errorMessage: "Egypt ZIP codes must have exactly 5 digits, e.g., 12345",
    },
    {
      name: "Germany",
      pattern: "^(D-)?\\d{5}$",
      errorMessage:
        "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
    },
  ];
  const targetConstraint = allConstraintsArray.filter(
    (constraint) => constraint.name === countryValue
  );
  targetConstraint.forEach((constraint) => {
    const name = constraint.name;
    const pattern = constraint.pattern;
    const errorMessage = constraint.errorMessage;
    if (name === countryValue) {
      zipInput.setAttribute("pattern", pattern);
      zipErroMessage(errorMessage);
    } else {
      console.log("no");
    }
  });
};
// set zip error message and styles :
// const zipErrorMessage = function (errorMessage) {
//   zipError.className = "zip-error-active";
//   zipInput.style.border = "2px dashed red";
//   zipError.textContent = errorMessage;
// };
zipInput.addEventListener("input", validateZip);
