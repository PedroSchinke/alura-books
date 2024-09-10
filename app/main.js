import { applyDiscount } from './map.js';
import { showBooks } from './forEach.js';

export let books = [];

const APIendpoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBooks();

const booksContainer = document.getElementById('books');

async function getBooks() {
    const response = await fetch(APIendpoint);
    books = await response.json();
    let booksWithDiscount = applyDiscount(books);

    showBooks(booksWithDiscount);
}