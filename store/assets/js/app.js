console.log("App JS Loaded");

async function loadProducts() {

    console.log("Loading Products...");

    try {

        const response = await fetch("./data/products.json");

        console.log(response);

        const products = await response.json();

        console.log(products);

        const container = document.getElementById("products");

        if(!container){
            console.log("Products Container NOT Found");
            return;
        }

        products.forEach(product=>{

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

    catch(err){

        console.error(err);

    }

}

loadProducts();
