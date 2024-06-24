document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.parentElement;
            const productId = productCard.dataset.productId;
            const productName = productCard.querySelector('h3').innerText;
            const productPrice = productCard.querySelector('.price').innerText;
            const productImage = productCard.querySelector('img').src;

            const product = {
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage
            };

            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));

            alert('Product added to cart!');
        });
    });

    if (document.querySelector('.cart-items')) {
        const cartItemsContainer = document.querySelector('.cart-items');
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="Product Image">
                <h3>${item.name}</h3>
                <p class="price">${item.price}</p>
                <button class="remove" data-product-id="${item.id}">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        // Add event listeners to "Remove" buttons
        const removeButtons = document.querySelectorAll('.cart-item .remove');
        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.getAttribute('data-product-id');
                removeProductFromCart(productId);
                button.parentElement.remove();
            });
        });
    }

    function removeProductFromCart(productId) {
        const updatedCart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
});
