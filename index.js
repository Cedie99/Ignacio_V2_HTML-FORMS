function order() {
    window.location.href = "orderform.html";
   
}
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function(){
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
}


// Define variables
let cartItems = [];
let cartTotal = 0;
let cartCount = 0;

// Get cart count element
const cartCountElement = document.getElementById('cart-count');

// Get cart items list
const cartList = document.getElementById('cart-items');

// Get cart total display
const totalDisplay = document.getElementById('cart-total');

// Add click event listener to each "Add to Cart" button
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const button = event.target;
    const itemName = button.dataset.name;
    const itemPrice = parseFloat(button.dataset.price);

    // Check if the item already exists in the cart
    const existingItem = cartItems.find(item => item.name === itemName);
    if (existingItem) {
        // If the item already exists, increment its quantity and update the cart
        existingItem.quantity++;
    } else {
        // If the item does not exist, add it to the cart
        cartItems.push({ name: itemName, price: itemPrice, quantity: 1 });
    }

    // Update cart total
    cartTotal += itemPrice;

    // Update cart count
    cartCount++;

    // Update cart count element text content
    cartCountElement.textContent = cartCount;

    // Update total display
    totalDisplay.textContent = cartTotal.toFixed(2);

    // Update cart display
    displayCart();

    // Store cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}




// Function to display cart
function displayCart() {
    // Clear previous cart items
    cartList.innerHTML = '';

    // Add each item to the cart list
    cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} x${item.quantity} (${item.price.toFixed(2)})`;

        // Create delete button for each item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => removeItem(index)); // Add click event listener to remove item
        li.appendChild(deleteButton);

        cartList.appendChild(li);
    });
}

function removeItem(index) {
    // Update cart total and count
    cartTotal -= cartItems[index].price;
    cartCount--;
    cartCountElement.textContent = cartCount;

    // Decrease the quantity of the item by 1
    cartItems[index].quantity--;

    // Remove item completely if the quantity becomes 0
    if (cartItems[index].quantity === 0) {
        cartItems.splice(index, 1);
    }

    // Update cart display
    displayCart();

    // Update total display
    totalDisplay.textContent = cartTotal.toFixed(2);

    // Update local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Get the add to cart buttons
const addToCartButton = document.querySelectorAll('.add-to-cart-btn');

// Get the cart container
const cartContainer = document.getElementById('cart-container');
const closeCartButton = document.getElementById('close-cart-btn');

// Add click event listener to each add to cart button
addToCartButton.forEach(button => {
    button.addEventListener('click', (event) => {
        // Prevent the default action of the button
        event.preventDefault();
        
        // Make sure the cart container is open
        cartContainer.classList.add('active');
    });
});
// Add click event listener to the close button
closeCartButton.addEventListener('click', () => {
    // Hide the cart container
    cartContainer.classList.remove('active');

    // Reset cart items
    cartItems = [];

    // Clear the cart items display
    displayCart();

    // Reset cart total and count
    cartTotal = 0;
    cartCount = 0;

    // Update cart count display
    cartCountElement.textContent = 0;

    // Update total display
    totalDisplay.textContent = cartTotal.toFixed(2);
});



function order(){
    // Construct the URL with cart items as parameters
    let url = "orderform.html?";
    cartItems.forEach((item, index) => {
        url += `item${index + 1}=${encodeURIComponent(item.name)}&quantity${index + 1}=${item.quantity}&`;
    });
    // Redirect to the index.html page with cart items as parameters
    window.location.href = url.slice(0, -1); // Remove the last "&" character
}



function facebook() {
    window.open("https://www.facebook.com/profile.php?id=100023556549102", "_blank");
}

function instagram() {
    window.open("https://www.instagram.com/jcsx99/?hl=en", "_blank");
}

function github() {
    window.open ("https://github.com/Cedie99", "_blank");
}

/*-------------------------------------------------- */


//full image view function in menu card
function showFullImage(img) {
    // Create a modal element
    var modal = document.createElement('div');
    modal.classList.add('modal');

    // Create an image element for the full image
    var fullImage = document.createElement('img');
    fullImage.src = img.src;
    fullImage.alt = img.alt;

    // Append the full image to the modal
    modal.appendChild(fullImage);

    // Append the modal to the body
    document.body.appendChild(modal);

    // Close the modal when clicked outside the image
    modal.addEventListener('click', function() {
        modal.remove();
    });
}

function tAndC() {
    window.open ("t&c.html", "_blank");
}

