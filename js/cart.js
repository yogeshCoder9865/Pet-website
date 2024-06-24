document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const orderButton = document.getElementById('order-button');
    const modal = document.getElementById('order-modal');
    const closeButton = document.querySelector('.close-button');
    const orderForm = document.getElementById('order-form');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    displayCartItems();

    function displayCartItems() {
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <div class="cart-item-content">
                    <img src="${item.image}" alt="Product Image">
                    <div>
                        <p>${item.name}</p>
                        <p>$${item.price.toFixed(2)}</p>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }

    orderButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    orderForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const address = document.getElementById('address').value;
        if (address && cart.length > 0) {
            alert(`Thank you for your order!\nYour items will be shipped to: ${address}`);
            localStorage.removeItem('cart');
            window.location.href = 'index.html';
        } else {
            alert('Order cancelled. Address is required and cart should not be empty.');
        }
    });
});
