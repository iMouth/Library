let myLibrary = [];

const books = document.getElementById("books");
const form = document.getElementById("form");
const read = document.getElementById("read-button");

form.addEventListener("submit", addBookToLibrary);

setBook();

function setBook() {
  const book1 = new Book("John F Kennedy", "Steven Speilsberg", 250, "Read");
  myLibrary.push(book1);
  displayBooks();
}

function toggleForm() {
  let form = document.getElementById("form-popup");
  if (form.style.display === "block") {
    form.style.display = "none";
  } else {
    form.style.display = "block";
  }
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.title = () => title;
  this.author = () => author;
  this.pages = () => pages;
  this.read = () => read;
}

function addBookToLibrary(e) {
  console.log(e);
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  read = read ? "Read" : "Not Read";
  const testBook = new Book(title, author, pages, read);
  myLibrary.push(testBook);
  toggleForm();
  displayBooks();
}

function displayBooks() {
  const book = document.createElement("div");
  book.classList.add("book");
  books.appendChild(book);
  cancel = document.createElement("button");
  cancel.type = "button";
  cancel.textContent = "X";
  cancel.setAttribute("id", "cancel-button");
  book.appendChild(cancel);

  bookInfo(book, "title");
  bookInfo(book, "author");
  bookInfo(book, "pages");
  bookInfo(book, "read");
}

function bookInfo(book, bookElement) {
  const info = document.createElement("div");
  if (bookElement === "title") {
    info.textContent = myLibrary[myLibrary.length - 1].title();
  } else if (bookElement === "author") {
    info.textContent = "By: " + myLibrary[myLibrary.length - 1].author();
  } else if (bookElement === "pages") {
    info.textContent = "Pages: " + myLibrary[myLibrary.length - 1].pages();
  } else if (bookElement === "read") {
    const readText = document.createElement("div");
    readText.textContent = "Status: " + myLibrary[myLibrary.length - 1].read();
    readText.setAttribute("id", "book" + myLibrary.length);
    info.appendChild(readText);
    const readButton = document.createElement("button");
    readButton.type = "button";
    readButton.setAttribute("id", "read-button");
    readButton.classList.add("book" + myLibrary.length);
    readButton.addEventListener("click", changeStatus);
    info.appendChild(readButton);
  }
  info.classList.add(bookElement);
  book.appendChild(info);
}

function changeStatus(e) {
  const readStatus = document.getElementById(e.toElement.className);
  if (readStatus.textContent === "Status: Read") {
    readStatus.textContent = "Status: Unread";
  } else {
    readStatus.textContent = "Status: Read";
  }
}

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
