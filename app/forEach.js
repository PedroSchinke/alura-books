const booksContainer = document.getElementById('books');

function showBooks(booksList) {
    booksList.forEach(book => {
        booksContainer.innerHTML += `
            <div class="book">
                <img class="book__images" src="${book.imagem}" alt="${book.titulo} cover" />
                <h2 class="book__title">
                    ${book.titulo}
                </h2>
                <p class="book__description">${book.autor}</p>
                <p class="book__price" id="price">R$${book.preco}</p>
                <div class="tags">
                    <span class="tag">${book.categoria}</span>
                </div>
            </div>
        `
    });
}