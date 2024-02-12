


let getmail = localStorage.getItem("email")

let email =document.getElementById('email'); 
window.onload=function(){
  email.value=getmail;
}





let userInfo=document.querySelector('#userInfo');
let userDom = document.querySelector('#user');
let logout = document.querySelector("#logout");

if (localStorage.getItem("username")) {
  userInfo.style.display="block";
  userDom.innerHTML =localStorage.getItem("username");   
}




let productincart = localStorage.getItem('ProductsInCart');
let productDom = document.querySelector('.products');

if (productincart) {
  let items = JSON.parse(productincart);
  drawCartProductsUi(items);
}


// Function to draw the cart products UI
function drawCartProductsUi(items) {
  // Use the `map` function to create an array of product UIs
  let productsUi = items.map((item) => {
    return `
      <div class="product-item">
        <img src="${item.imgUrl}" class="product-item-img" alt="photo">
        <div class="product-item-desc">
          <h2>${item.description}</h2>
          <span>${item.span}</span>
          <h4>${item.price}</h4>
        </div>
        <div class="product-item-actions">
          <button class="add-to-cart" onclick="removeFromCart(${item.id})"><i class="fa-solid fa-cart-plus"></i>Remove From Cart</button>
        </div>
      </div>
    `;
  });
  // Set the HTML of the productDom element to the productsUi array joined into a string
  productDom.innerHTML = productsUi.join('');
}



function removeFromCart(id) {
  let productincart = localStorage.getItem('ProductsInCart');
  // Parse the cart data and filter out the product with the matching id
  let items = JSON.parse(productincart).filter(item => item.id !== id);
  drawCartProductsUi(items);
}



let buybtn = document.getElementById('buy');
buybtn.onclick = () => {
  if (localStorage.getItem('ProductsInCart')) {
    alert(`The product has been successfully purchased ✅✅`);
  } else {
    alert("No products in cart!");
  }
};
