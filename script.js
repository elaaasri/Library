// selecting elements :
const newBookButton = document.querySelector(".new-book");
const bookForm = document.querySelector("#book-form");
const authorInput = document.querySelector("#author-input");
const titleInput = document.querySelector("#title-input");
const numOfPagesInput = document.querySelector("#number-input");
const booksContainer = document.querySelector(".books-container");
const checkboxStatus = document.querySelector("#checkbox");

let myLibrary = [];
let myObj = {};
let storeCheckStatus = "";

// display the form :
newBookButton.addEventListener("click", () => {
  bookForm.style.cssText = "display; flex";
});

// the constructor of myLibrary objects :
function Book(author, title, numberOfPages) {
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.readStatus = function () {
    // toggle the readStatusButton output if its clicked :
    if (this.textContent === "Read") {
      this.textContent = "Not Read";
      this.style.cssText = "background-color: red";
    } else if (this.textContent === "Not Read") {
      this.textContent = "Read";
      this.style.cssText = "background-color: greenyellow";
    }
  };
}

function addBookToLibrary() {
  // book form event :
  bookForm.addEventListener("submit", (event) => {
    // preventing default behavior of the form :
    event.preventDefault();
    myObj = new Book(
      authorInput.value,
      titleInput.value,
      numOfPagesInput.value
    );
    myLibrary.push(myObj);
    // calling this func :
    displayEachBook();
  });
}

addBookToLibrary();

function displayEachBook() {
  for (let book in myLibrary) {
    // creating new elements :
    const showBook = document.createElement("div");
    const authorOutput = document.createElement("div");
    const titleOutput = document.createElement("div");
    const numberOfPagesOutput = document.createElement("div");
    const removeBookButton = document.createElement("button");
    const readStatusButton = document.createElement("button");

    //  setting classlist of the new elements :
    showBook.classList = "show-book";
    authorOutput.classList = "author-output";
    titleOutput.classList = "title-output";
    numberOfPagesOutput.classList = "author-output";
    removeBookButton.classList = "remove-button";
    readStatusButton.classList = "read-button";

    //  adding text content :
    authorOutput.textContent = myLibrary[book].author;
    titleOutput.textContent = myLibrary[book].title;
    numberOfPagesOutput.textContent = myLibrary[book].numberOfPages;
    removeBookButton.textContent = "Remove";
    readStatusButton.textContent = "Read";

    // appending elements :
    booksContainer.appendChild(showBook);
    showBook.appendChild(authorOutput);
    showBook.appendChild(titleOutput);
    showBook.appendChild(numberOfPagesOutput);
    showBook.appendChild(removeBookButton);
    showBook.appendChild(readStatusButton);

    // event button to remove the current book :
    removeBookButton.addEventListener("click", () => {
      showBook.remove(); // removes the current element.
      myLibrary.splice(book, 1); // removes the current object from myLibrary array.
      // delete myLibrary[book]; // returns empty!
    });
    // event button to toggle readStatusButton :
    readStatusButton.addEventListener("click", myObj.readStatus);
    // fix the iterating of the same book in myLibrary :
    myLibrary.splice(book, 1);
    // changing the output of the readStatusButton if its checked or not ;
    if (storeCheckStatus === "checked") {
      readStatusButton.textContent = "Read";
      readStatusButton.style.cssText = "background-color: greenyellow";
    } else {
      readStatusButton.textContent = "Not Read";
      readStatusButton.style.cssText = "background-color: red";
    }
  }
}

displayEachBook();

// event button to store the checkbox status :
checkboxStatus.addEventListener("click", checkBoxStatusFunc);
function checkBoxStatusFunc() {
  if (checkbox.checked) {
    storeCheckStatus = "checked";
  } else {
    storeCheckStatus = "unchecked";
  }
}
