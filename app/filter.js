import { showBooks } from "./forEach.js";
import { books } from "./main.js";

const filterButtons = document.querySelectorAll('.btn');

filterButtons.forEach(btn => btn.addEventListener('click', frontEndFilter));

function frontEndFilter() {
    const btnElement = document.getElementById(this.id);
    const category = btnElement.value;
    let filteredBooks = books.filter(book => book.categoria == category);
    showBooks(filteredBooks);
}