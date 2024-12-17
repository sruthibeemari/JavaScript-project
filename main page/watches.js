

// Get the cart from localStorage or initialize an empty array if it doesn't exist
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add to Cart Functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.getAttribute('data-item');
        const price = button.getAttribute('data-price');
        const image = button.getAttribute('data-image'); // Added image attribute
        
        // Check if the item already exists in the cart
        const existingItem = cart.find(cartItem => cartItem.item === item);
        
        if (existingItem) {
            // If item exists, increase quantity by 1
            existingItem.quantity += 1;
        } else {
            // If item is not in the cart, add it
            cart.push({ item, price, image, quantity: 1 });
        }

        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${item} has been added to the cart.`);
        console.log("Current Cart:", cart);

        // Redirect to the cart page
        window.location.href = "../checkout page/cart.html";
    });
});

// Buy Now Functionality
document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', () => {
        const image = button.getAttribute('data-image'); // Fixed the attribute name here
        const item = button.getAttribute('data-item');
        const price = button.getAttribute('data-price');
        
        const confirmBuy = confirm(`Do you want to buy ${item} for Rs.${price}?`);
        if (confirmBuy) {
            alert(`You have purchased ${item}. Thank you!`);
            console.log(`Purchased: ${item}`);
        }
    });
});

// Search Functionality
function searchItems() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const itemName = item.querySelector('p').textContent.toLowerCase();
        if (itemName.includes(searchInput)) {
            item.style.display = 'inline-block';
        } else {
            item.style.display = 'none';
        }
    });
}
