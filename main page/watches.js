//add to cart 

const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add to Cart Functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.getAttribute('data-item');
        const price = button.getAttribute('data-price');
        

        cart.push({ item, price });

             
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${item} has been added to the cart.`);
        console.log("Current Cart:", cart);

             
        window.location.href = "../checkout page/cart.html";
    });
});
        document.querySelectorAll('.buy-now').forEach(button => {
            button.addEventListener('click', () => {
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
