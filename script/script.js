let myLibrary = [];

const books = document.getElementById("books");
const submit = document.getElementById("submit");

setBook();

function setBook() {
  const book1 = new Book("John F Kennedy", "Steven Speilsberg", 250, "read");
  myLibrary.push(book1);
  console.log(myLibrary);
  displayBooks();
}

submit.addEventListener("click", addBookToLibrary);

function toggleForm() {
  let form = document.getElementById("form-popup");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return title + " " + author + " " + pages + " " + read;
  };
}

function addBookToLibrary(e) {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  console.log(read);
  if (read == false) {
    read = "Not Read";
  } else {
    read = "read";
  }
  const testBook = new Book(title, author, pages, read);
  myLibrary.push(testBook);
  toggleForm();
  displayBooks();
}

function displayBooks() {
  const book = document.createElement("div");
  book.classList.add("book");
  book.setAttribute("id", myLibrary.length);
  book.textContent = myLibrary[myLibrary.length - 1].info();
  books.appendChild(book);
}
