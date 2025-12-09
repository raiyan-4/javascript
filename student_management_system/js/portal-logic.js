// --- Mock Data ---
const studentGrades = [
    { course: "Math", grade: "A-", term: "Fall 2025" },
    { course: "Science", grade: "B+", term: "Fall 2025" },
];

const ecommerceProducts = [
    { id: 1, name: "School Uniform Polo", price: 25.00, inventory: 50 },
    { id: 2, name: "Yearbook 2025", price: 50.00, inventory: 100 },
];

// --- Rendering Function (in student.html) ---
function renderGrades() {
    const gradesList = document.getElementById('grades-list'); // Assuming an ID in student.html
    if (gradesList) {
        studentGrades.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.course}: ${item.grade} (${item.term})`;
            gradesList.appendChild(listItem);
        });
    }
}

// --- E-Commerce Logic (in store.html) ---
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    const product = ecommerceProducts.find(p => p.id === productId);
    
    if (product) {
        cart.push(product); // Simplified add
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
    }
}