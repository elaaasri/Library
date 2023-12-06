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
// const popupOverlay = document.getElementById("popup-overlay");
// const popupWindow = document.getElementById("popup-form");
// const logInButton = document.getElementById("log-in-button");
// const showForm = function () {
//   popupOverlay.style.display = "flex";
//   popupWindow.style.display = "flex";
// };
// logInButton.addEventListener("click", showForm);
