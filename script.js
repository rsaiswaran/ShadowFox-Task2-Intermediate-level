let cart = [];
let total = 0;

// Function to add items to the cart
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    document.getElementById('cart-count').innerText = cart.length;
}

// Function to display the cart
function showCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';

    cart.forEach(item => {
        const div = document.createElement('div');
        div.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsDiv.appendChild(div);
    });

    document.getElementById('cartTotal').innerText = total.toFixed(2);
    document.getElementById('cartModal').style.display = 'block';
}

// Close cart modal
function closeCartModal() {
    document.getElementById('cartModal').style.display = 'none';
}

// Show payment options modal
function showPaymentOptions() {
    document.getElementById('paymentModal').style.display = 'block';
    closeCartModal(); // Close cart modal
}

// Close payment modal
function closePaymentModal() {
    document.getElementById('paymentModal').style.display = 'none';
}

// Process payment
function processPayment() {
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    const cardFields = document.getElementById('creditCardFields');
    if (paymentMethod === "Credit Card") {
        cardFields.style.display = 'block';
    } else {
        alert(`Payment successful with ${paymentMethod}`);
        closePaymentModal();
    }
}

// Show address modal
function openAddressModal() {
    document.getElementById('addressModal').style.display = 'block';
}

// Close address modal
function closeAddressModal() {
    document.getElementById('addressModal').style.display = 'none';
}

// Save address
function saveAddress() {
    const addressLine1 = document.getElementById('addressLine1').value;
    const city = document.getElementById('city').value;
    // Additional address fields can be captured similarly

    alert(`Address saved: ${addressLine1}, ${city}`);
    closeAddressModal();
}

// Open login modal
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

// Close login modal
function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Login function
function login() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        document.getElementById('welcomeMessage').innerText = `Welcome, ${username}!`;
        document.getElementById('welcomeMessage').style.display = 'block';
        document.getElementById('loginBtn').style.display = 'none';
        closeLoginModal(); // Close the login modal after successful login
    } else {
        alert('Please fill in all fields');
    }
}
function processPayment() {
    const cardNumber = document.getElementById("cardNumber").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    // Simple validation
    if (cardNumber === "" || expiryDate === "" || cvv === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Example of processing the payment (this would typically involve sending data to your server)
    console.log("Payment details:");
    console.log("Card Number:", cardNumber);
    console.log("Expiry Date:", expiryDate);
    console.log("CVV:", cvv);
    console.log("Payment Method:", paymentMethod);

    // After successful payment processing
    alert("Payment processed successfully!");

    // Close the payment modal
    closePaymentModal();
}
