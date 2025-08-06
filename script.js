

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        read ? console.log(this.title + " by " + this.author + ", " + this.pages + " pages" + " already read") : console.log(this.title + " by" + this.author + ", " + this.pages + " pages" + " not yet read");
    }
}

const theHobbit = new Book("Vendre ou perdre", "Grand Cardone", 200, true);
theHobbit.info();