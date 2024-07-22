const displayCartItems = () => {
    const cartItemsElement = document.getElementById('cartItems');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartItemsElement.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cartItemsElement.innerHTML = `
        <table class="table">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${cart.map((item, index) => `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td>
                            <button class="btn btn-danger remove-item" data-index="${index}">Remove</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function () {
            const index = this.dataset.index;
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCartItems();
        });
    });
};

document.getElementById('checkoutButton').addEventListener('click', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }

    localStorage.removeItem('cart');
    alert('Order placed successfully!');
    window.location.href = 'home.html';
});

displayCartItems();
