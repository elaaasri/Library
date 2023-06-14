let newBookButton = document.querySelector(".new-book");
let bookForm = document.querySelector("#book-form")
let authorInput = document.querySelector("#author-input");
let titleInput = document.querySelector("#title-input");
let numOfPagesInput = document.querySelector("#number-input");

let myLibrary = [];
let myObj = {};

function Book(author, title, numberOfPages) {
    // the constructor...
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
};

newBookButton.addEventListener("click", function() {
    bookForm.style.cssText = 'display; block';
});

function addBookToLibrary() {
    
    //  takes the user input and store it as an object in new array :
    bookForm.addEventListener("submit", function (event) {
        let authorValue = authorInput.value;
        let titleValue = titleInput.value;
        let numberOfPagesValue = numOfPagesInput.value;

        myObj = new Book(authorValue, titleValue, numberOfPagesValue);
        myLibrary.push(myObj);

        displayEachBook();
        event.preventDefault();
        
    });
};
addBookToLibrary();

// myLibrary = [{value : "zbe"},{value : "a"}];

function displayEachBook () {
    
    for (let book in myLibrary) {
        // a condition to check if library is instanceof the constructor and if it has a length (condition not necessary!) :
        if (myLibrary[book] instanceof Book && myLibrary.length) {
            
                // creating new elements : 
            let showBook = document.createElement("div");
            let authorOutput = document.createElement("div");
            let titleOutput = document.createElement("div");
            let numberOfPagesOutput = document.createElement("div");
            let removeBookButton = document.createElement("button");

            //  setting classlist of the new elements : 
            showBook.classList = "show-book";
            authorOutput.classList = "author-output";
            titleOutput.classList = "title-output";
            numberOfPagesOutput.classList = "author-output";
            removeBookButton.classList = "remove-button";
            
            //  adding text content : 
            authorOutput.textContent = myLibrary[book].author;
            titleOutput.textContent = myLibrary[book].title; 
            numberOfPagesOutput.textContent = myLibrary[book].numberOfPages;
            removeBookButton.textContent = "remove";
            
            // appending elements :
            document.body.appendChild(showBook);
            showBook.appendChild(authorOutput);
            showBook.appendChild(titleOutput);
            showBook.appendChild(numberOfPagesOutput);
            showBook.appendChild(removeBookButton);
            
            myLibrary.shift();
            
                // event button to remove the current book :
            removeBookButton.addEventListener("click", function() {
                showBook.remove();
            });

        
        };
    };
};
displayEachBook();
























        












