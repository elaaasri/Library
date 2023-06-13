let userInput = document.querySelector(".user-input");
let submit = document.querySelector("#submit-form");
// let form = document.querySelector("#form");
let newBookButton = document.querySelector(".new-book");
let bookForm = document.querySelector("#book-form")

let myLibrary = [];

console.log(newBookButton);

function addBookToLibrary() {
    
    //  takes the user input and store it as an object in new array :
    submit.addEventListener("submit", function () {

        let userValue = userInput.value;
        myLibrary.push({userValue});
        
        console.log(myLibrary);
        console.log(typeof myLibrary);
        console.log(myLibrary[0] instanceof Object);

        displayEachBook();
        
    });
};
addBookToLibrary();

function Book() {
    // the constructor...

    }

// myLibrary = [{userValue : "anas"}, {userValue : "zbe"},{userValue : "aa"}]

function displayEachBook () {

    for (let book in myLibrary) {
        
        let showBook = document.createElement("div");
        showBook.classList = "show-book";
        showBook.textContent = myLibrary[book].userValue;
        document.body.appendChild(showBook);
        
    };
};
displayEachBook();

function Book(author, title, numberOfPages) {
    // the constructor...
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    };


newBookButton.addEventListener("click", function() {
    console.log("clicked");
    bookForm.style.cssText = 'display; block';
});

























// newBookButton.addEventListener("click",function () {
//     let newForm = document.createElement("form");
//     newForm.classList = "new-form";
//     newForm.textContent = "Add New Book";
//     document.body.appendChild(newForm);

//     let author = document.createElement("input");
//     author.setAttribute("placeholder", "author");
//     newForm.appendChild(author)

//     let title = document.createElement("input");
//     title.setAttribute("placeholder", "title");
//     newForm.appendChild(title);
    
//     let numberOfPages = document.createElement("input");
//     numberOfPages.setAttribute("placeholder", "numberOfPages");
//     newForm.appendChild(numberOfPages);
// });





















    //  inside the addBookToLibrary to show every book on the page!
            // display each book func : 
        // function displayEachBook () {
        //     let result = document.createElement("div");
        //     result.classList = "result";
        //     document.body.appendChild(result);

        //     for (let books in myLibrary) {
        //         result.textContent = myLibrary[books].userValue;
                
        //         myLibrary[books].userValue === "" ? console.log("zbe") : "";
                

        //     };
        // };
        // displayEachBook();*





















