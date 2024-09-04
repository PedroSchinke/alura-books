import { applyDiscount } from './map.js'

let books = [];

const APIendpoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBooks();

const booksContainer = document.getElementById('books');

async function getBooks() {
    const response = await fetch(APIendpoint);
    books = await response.json();
    let booksWithDiscount = applyDiscount(books);

    showBooks(booksWithDiscount);
}