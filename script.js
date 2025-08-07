const bookCard = document.getElementById("book-card");
const openFormBtn = document.getElementById("open-form-btn");
const formContainer = document.getElementById("form-container");
const bookForm = document.getElementById("book-form");

openFormBtn.addEventListener("click", () => {
  formContainer.style.display = "block";
});

const myLibrary = [];

function Book(id, title, author, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const id = crypto.randomUUID();
  const newBook = new Book(id, title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary("Vendre ou Perdre", "Grant Cardone", 200, true);
addBookToLibrary("L'Alchimiste", "Paulo Coelho", 180, false);
addBookToLibrary("La semaine de 4h", "Tim Ferriss", 100, true);
addBookToLibrary("Tout est possible", "Nathalie Upon", 300, false);
addBookToLibrary("Réfléchissez et devenez riche", "Napoleon Hill", 250, true);
addBookToLibrary("Père riche, père pauvre", "Robert T. Kiyosaki", 220, true);
addBookToLibrary("Les 7 habitudes de ceux qui réalisent tout ce qu'ils entreprennent", "Stephen R. Covey", 260, false);
addBookToLibrary("L'art subtil de s'en foutre", "Mark Manson", 210, true);
addBookToLibrary("Influence et Manipulation", "Robert B. Cialdini", 230, false);
addBookToLibrary("Le pouvoir du moment présent", "Eckhart Tolle", 240, true);

console.log(myLibrary);

function displayBook() {
  bookCard.innerHTML = "";

  myLibrary.forEach((book) => {
    bookCard.innerHTML += `
      <div class="book">
        <div class="card">
          <div>
            <h4>Titre </h4>
            <span>${book.title}</span>
          </div>
          <div>
            <h4>Auteur </h4>
            <span>${book.author}</span>
          </div>
          <div>
            <h4>Pages </h4>
            <span>${book.pages}</span>
          </div>
          <div>
            <h4>Lu </h4>
            <span>${book.read ? "Oui" : "Non"}</span>
          </div>
        </div>
        <div class="update">
          <button class="add-btn" >Modifier</button>
          <button class="delete-btn" data-id="${book.id}">Supprimer</button>
        </div>
      </div>
    `;
  });
  
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener(("click"), () => {
      const id = button.getAttribute("data-id");
      const index = myLibrary.findIndex(book => book.id === id);
      myLibrary.splice(index, 1);
      displayBook();
    });

  });

  const addBook = document.querySelectorAll(".add-btn");
  addBook.forEach((book) => {
    book.addEventListener(("click"), () => {

    })
  });

}

displayBook()

bookForm.addEventListener(("submit"), (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const page = document.getElementById("pages").value.trim();
  const read = document.getElementById("read").checked;

  if (title && author && !isNaN(page)) {
    addBookToLibrary(title, author, page, read);
    displayBook()
    bookForm.reset();
    formContainer.style.display = "none";
  }else {
    alert("Veuillez remplir tous les champs correctement.");
  }

});