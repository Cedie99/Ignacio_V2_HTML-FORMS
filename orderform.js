


// PLACE ORDER BUTTON
document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const nameField = document.querySelector('#name');
    const emailField = document.querySelector('#email');
    const ageField = document.querySelector('#age');
    const locationField = document.querySelector('#location');
    const dineInTakeOutField = document.querySelector('#dineInTakeOut');

    if (nameField.value === '' || emailField.value === '' || ageField.value === '') {
        alert("Error: Please fill out all required fields.");
    } else if (dineInTakeOutField.value === 'takeOut' && locationField.value === '') {
        alert("Error: Please provide a delivery location.");
    } else {
        window.location.href = "op.html";
    }
});



//takeout location

document.getElementById('dineInTakeOut').addEventListener('change', function() {
    const deliveryLocation = document.getElementById('deliveryLocation');
    if (this.value === 'takeOut') {
        deliveryLocation.style.display = 'block';
    } else {
        deliveryLocation.style.display = 'none';
    }
});




document.addEventListener('DOMContentLoaded', () => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
        cartItems = JSON.parse(storedCartItems);
        cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        cartCountElement.textContent = cartCount;
        totalDisplay.textContent = cartTotal.toFixed(2);
        displayCart();
    }
});

function backButton() {
    
    window.location.href = "index.html#Home";
}




window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const cartContainer = document.getElementById('cart-container');
    const cartList = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('cart-total');

    let cartTotal = 0;

    for (const [key, value] of params) {
        if (key.startsWith('item')) {
            const itemName = decodeURIComponent(value);
            const quantity = parseInt(params.get(`quantity${key.slice(4)}`));
            const li = document.createElement('li');
            li.textContent = `${itemName} x${quantity}`;
            cartList.appendChild(li);
        }
    }

    // Calculate total price
    cartItems.forEach(item => {
        cartTotal += item.price * item.quantity;
    });

    // Update total display
    totalDisplay.textContent = cartTotal.toFixed(2);

   
}



