const filterButtons = document.querySelectorAll('.btn');

filterButtons.forEach(btn => btn.addEventListener('click', filterBooks));

function filterBooks() {
    const btnElement = document.getElementById(this.id);
    const category = btnElement.value;

    let filteredBooks = category == 'available' ? 
        filterByAvailability() : 
        filterByCategory(category);

    showBooks(filteredBooks);

    if (category == 'available') {
        const totalPrice = getAvailableBooksValue(filteredBooks);
        showTotalPrice(totalPrice);
    }
}

function filterByAvailability() {
    return books.filter(book => book.quantidade > 0);
}

function filterByCategory(category) {
    return books.filter(book => book.categoria == category);
}

function showTotalPrice(totalPrice) {
    availableBooksTotalPrice.innerHTML = `
        <div class="available_books">
            <p>All books available for $<span id="value">${totalPrice}</span></p>
        </div>
    `;
}