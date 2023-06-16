let newBookButton = document.querySelector(".new-book");
let bookForm = document.querySelector("#book-form");
let authorInput = document.querySelector("#author-input");
let titleInput = document.querySelector("#title-input");
let numOfPagesInput = document.querySelector("#number-input");

let myLibrary = [];
let myObj = {};

    // the constructor of myLibrary objects : 
function Book(author, title, numberOfPages) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.readStatus = function () {
        if (this.textContent === "read") {
            this.textContent = "no read";
            this.style.cssText = "background-color :red";
        } else if (this.textContent === "no read") {
            this.textContent = "read";
            this.style.cssText = "background-color :green";
        }
    };
};

newBookButton.addEventListener("click", 
    () => {
        bookForm.style.cssText = 'display; block';
    });

function addBookToLibrary() {
        // book form event : 
    bookForm.addEventListener("submit", event => {

            // preventing default behavior of the form :
        event.preventDefault();

        myObj = new Book(authorInput.value, titleInput.value, numOfPagesInput.value);
        myLibrary.push(myObj);

            // calling this func : 
        displayEachBook();
        
    });
};
addBookToLibrary();

    // a func to remove existing book elements :
function removeExistingBooks () {
    let removeBooks = document.querySelectorAll(".show-book");
    removeBooks.forEach( book => {
        book.remove();
    });
};

function displayEachBook () {

            // calling this func : 
        removeExistingBooks();
    
    for (let book in myLibrary) {
            
                // creating new elements : 
            let showBook = document.createElement("div");
            let authorOutput = document.createElement("div");
            let titleOutput = document.createElement("div");
            let numberOfPagesOutput = document.createElement("div");
            let removeBookButton = document.createElement("button");
            let readStatusButton = document.createElement("button");
            
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
            removeBookButton.textContent = "remove";
            readStatusButton.textContent = "read";
            
                // appending elements :
            document.body.appendChild(showBook);
            showBook.appendChild(authorOutput);
            showBook.appendChild(titleOutput);
            showBook.appendChild(numberOfPagesOutput);
            showBook.appendChild(removeBookButton);
            showBook.appendChild(readStatusButton);
            
                // event button to remove the current book :
            removeBookButton.addEventListener("click", 
            () => {
                showBook.remove(); // removing the element.
                myLibrary.splice(0,1); // removing the "this" object from the Library array.
            });

                // event button to toggle read status :
            readStatusButton.addEventListener("click", myLibrary[book].readStatus);

            console.log(book)
            console.log(myLibrary)
            console.log(myLibrary[book])
    };
};
displayEachBook();
