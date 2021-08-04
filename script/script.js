let myLibrary = [];

const form = document.getElementById("form");
form.addEventListener("submit", addBookToLibrary);

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
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  read = read ? "Read" : "Unread";
  const testBook = new Book(title, author, pages, read);
  myLibrary.push(testBook);
  toggleForm();
  displayBooks();
  form.reset();
}

function toggleForm() {
  let form = document.getElementById("form-popup");
  if (form.style.display === "block") {
    form.style.display = "none";
  } else {
    form.style.display = "block";
  }
}

function displayBooks() {
  const book = document.createElement("div");
  book.classList.add("book");
  book.classList.add("bookNumber" + myLibrary.length);
  books.appendChild(book);
  cancelBtn(book);
  bookInfo(book, "title");
  bookInfo(book, "author");
  bookInfo(book, "pages");
  readBox(book);
}

function cancelBtn(book) {
  cancel = document.createElement("button");
  cancel.type = "button";
  cancel.textContent = "X";
  cancel.classList.add("bookNumber" + myLibrary.length);
  cancel.setAttribute("id", "cancel-button");
  cancel.addEventListener("click", removeBook);
  book.appendChild(cancel);
}

function bookInfo(book, bookElement) {
  const info = document.createElement("div");
  if (bookElement === "title") {
    info.textContent = myLibrary[myLibrary.length - 1].title();
  } else if (bookElement === "author") {
    info.textContent = "By: " + myLibrary[myLibrary.length - 1].author();
  } else if (bookElement === "pages") {
    info.textContent = "Pages: " + myLibrary[myLibrary.length - 1].pages();
  }
  info.classList.add(bookElement);
  book.appendChild(info);
}

function readBox(book) {
  const info = document.createElement("div");
  info.classList.add("read");

  const readText = document.createElement("div");
  readText.textContent = "Status: " + myLibrary[myLibrary.length - 1].read();
  readText.setAttribute("id", "book" + myLibrary.length);
  info.appendChild(readText);

  const readButton = document.createElement("button");
  readButton.type = "button";
  readButton.setAttribute("id", "read-button");
  readButton.classList.add("book" + myLibrary.length);
  readButton.addEventListener("click", changeStatus);
  readButton.style.backgroundColor =
    myLibrary[myLibrary.length - 1].read() === "Read"
      ? "yellowgreen"
      : "rgb(227, 38, 54)";

  info.appendChild(readButton);
  book.appendChild(info);
}

function removeBook(e) {
  const book = document.getElementsByClassName(e.target.className);
  book.item(0).remove();
}

function changeStatus(e) {
  const readStatus = document.getElementById(e.target.className);
  readStatus.textContent =
    readStatus.textContent === "Status: Read"
      ? "Status: Unread"
      : "Status: Read";
  setColor(e);
}

function setColor(e) {
  let target = e.target;

  target.style.backgroundColor =
    target.style.backgroundColor === "yellowgreen"
      ? "rgb(227, 38, 54)"
      : "yellowgreen";
}
