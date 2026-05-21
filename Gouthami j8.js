fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {

      let productsDiv = document.getElementById("products");
         allProducts = data;

        showProducts(allProducts);
      })

      data.forEach(product => {
         // Limit text using slice()
      let shortTitle = product.title.slice(0, 20);
      let shortDescription = product.description.slice(0, 50);
        productsDiv.innerHTML += `
          <div class="card">
            <img src="${product.image}" alt="">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
            <button class="cartBtn addBtn"
              onclick='addToCart(${JSON.stringify(product)})'>
              Add To Cart
            </button>
<button class="cartBtn removeBtn"
              onclick='removeFromCart(${product.id})'>
              Remove
          </div>
        `;
      })
.catch(error => {
      console.log("Error:", error);
});

// Show loading message
     document.getElementById("products").innerHTML = "Loading...";
// Clear loading message
    document.getElementById("products").innerHTML = "";
// Search Feature
document.getElementById("search").addEventListener("keyup", function() {
let searchText = this.value.toLowerCase();
let filteredProducts = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchText)
      );

      showProducts(filteredProducts);
    });
// Add To Cart
    function addToCart(product) {

      // Store product inside array
      cart.push(product);

      // Increase cart count
      document.getElementById("cartCount").innerHTML =
        `Cart: ${cart.length}`;

      console.log(cart);
    }
// Remove From Cart
    function removeFromCart(id) {

      // Find item index
      let index = cart.findIndex(item => item.id === id);

      // Remove item if found
      if (index !== -1) {
        cart.splice(index, 1);
      }

      updateCartCount();

      console.log(cart);
    }

    // Update Cart Count
    function updateCartCount() {

      document.getElementById("cartCount").innerHTML =
        `Cart: ${cart.length}`;
    }
// Update Cart Count + Total
    function updateCart() {

      // Update count
      document.getElementById("cartCount").innerHTML =
        cart.length;

      // Calculate total amount
      let total = 0;
      cart.forEach(item => {
        total += item.price;
      });

      // Show total
      document.getElementById("totalAmount").innerHTML =
        total.toFixed(2);
    }


