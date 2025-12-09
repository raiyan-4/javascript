// --- Mock Data: E-Commerce Products ---
const ecommerceProducts = [
    { id: 1, name: "School Uniform Polo", price: 25.00, inventory: 50, image: 'uniform.png' },
    { id: 2, name: "Yearbook 2025", price: 50.00, inventory: 100, image: 'yearbook.png' },
    { id: 3, name: "Textbook Set", price: 120.00, inventory: 30, image: 'books.png' },
];

// --- Mock Data: Student Grades ---
const mockStudentData = {
    name: "Aman Sharma",
    id: "S1001",
    grades: [
        { course: "Math", grade: "A-", term: "Fall 2025" },
        { course: "Science", grade: "B+", term: "Fall 2025" },
    ],
    attendance: 95
};

// ------------------------------------------
// E-COMMERCE FUNCTIONS
// ------------------------------------------

// Function to render products on store.html
function renderProducts() {
    const productList = document.getElementById('product-list');
    if (!productList) return;

    productList.innerHTML = '';
    ecommerceProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${product.name}</h3>
            <img src="/img/${product.image}" alt="${product.name}" style="width:100%; max-height: 150px; object-fit: cover;">
            <p>Price: $${product.price.toFixed(2)}</p>
            <p class="inventory">Stock: ${product.inventory}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(card);
    });
}

// Function to add item to Cart (uses localStorage)
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    const product = ecommerceProducts.find(p => p.id === productId);
    
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
        updateCartCount();
        alert(`${product.name} added to cart!`);
    }
}

// Function to update the cart count in the header
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    }
}

// ------------------------------------------
// PORTAL DATA RENDERING (Example for Student)
// ------------------------------------------
function renderStudentData() {
    // Assuming student.html has elements with these IDs
    document.getElementById('student-name').textContent = mockStudentData.name;
    document.getElementById('student-id').textContent = mockStudentData.id;
    document.getElementById('attendance-rate').textContent = `${mockStudentData.attendance}%`;

    const gradesList = document.getElementById('grades-list');
    if (gradesList) {
        gradesList.innerHTML = '';
        mockStudentData.grades.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.course}: ${item.grade} (${item.term})`;
            gradesList.appendChild(listItem);
        });
    }
}