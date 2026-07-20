async function loadProducts() {

    const response = await fetch("data/products.json");

    const products = await response.json();

    const container = document.getElementById("products");

    container.innerHTML = "";

    products.forEach(product => {

        container.innerHTML += `

        <div class="card">

            <h2>${product.title}</h2>

            <p>${product.description}</p>

            <h3>₹${product.price}</h3>

            <button onclick="window.open('${product.paymentLink}')">
                Buy Now
            </button>

        </div>

        `;

    });

}

loadProducts();
