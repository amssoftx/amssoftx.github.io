// ================================
// AMSSoftX Store Engine v1
// ================================

const STORE_NAME = "AMSSoftX Store";

console.log(STORE_NAME + " Loaded");

async function loadProducts() {

    try {

        const response = await fetch("data/products.json");

        const products = await response.json();

        console.log(products);

    }

    catch(error){

        console.error("Products Loading Error");

        console.error(error);

    }

}

loadProducts();
