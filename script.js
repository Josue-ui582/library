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