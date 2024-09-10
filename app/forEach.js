const availableBooksTotalPrice = document.getElementById('available_books_total_value');

function showBooks(booksList) {
    availableBooksTotalPrice.innerHTML = '';

    booksContainer.innerHTML = '';

    booksList.forEach(book => {
        let isAvailable = book.quantidade > 0 ? 'book__images' : 'book_images unavailable';

        booksContainer.innerHTML += `
            <div class="book">
                <img class="${isAvailable}" src="${book.imagem}" alt="${book.titulo} cover" />
                <h2 class="book__title">
                    ${book.titulo}
                </h2>
                <p class="book__description">${book.autor}</p>
                <p class="book__price" id="price">$${book.preco.toFixed(2)}</p>
                <div class="tags">
                    <span class="tag">${book.categoria}</span>
                </div>
            </div>
        `
    });
}