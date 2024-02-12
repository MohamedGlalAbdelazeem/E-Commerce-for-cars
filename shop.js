 
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#scrollBtn').fadeIn();
    } else {
      $('#scrollBtn').fadeOut();
    }
  });
  $('#scrollBtn').click(function() {
    $('html, body').animate({scrollTop : 0},0);
  });
});


//******************************UserName and logout*************************** */
let userInfo=document.querySelector('#userInfo');
let userDom = document.querySelector('#user');
let logout = document.querySelector("#logout");

if (localStorage.getItem("username")){
    userInfo.style.display="block";
    userDom.innerHTML = localStorage.getItem("username");
}
logout.onclick = function () {
    localStorage.clear();
    setTimeout(() => {
        window.location="singup.html"
    }, 2000);
}
 

//*************************************************{prodducts}***************************************************** */
let productDom  =document.querySelector('.products');
let prodducts =[
  {
    id:1,
    imgUrl:"./imges/auto1.jpg",
    description:"4pcs for Mercedes Benz Wheel Center Caps Parts",
    span:"Bentley Continental GT",
    price:" EGP 250"
  },
  {
    id:2,
    imgUrl:"./imges/p1.jpg",
    description:"1PC Car Motorcycle Van Bike Tyre Air Inflator Valve Tire Nozzle Pneumatic Pump Adapter Auto Replacement Parts (6MM)",
    span:"Koenigsegg Agera RS",
    price:"EGP89.00"
  },

  {
    id:3,
    imgUrl:"./imges/p3.jpg",
    description:"DELFINO Car Rearview Mirror Protective Film Waterproof Film",
    span:"Pagani Huayra",
    price:"EGP49.17"
  },

  {
    id:4,
    imgUrl:"./imges/p2.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"Maserati GranTurismo",
    price:"EGP40.00"
  },
  {
    id:5,
    imgUrl:"./imges/p10.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"Alfa Romeo Giulia Quadrifoglio",
    price:"EGP40.00"
  },
  {
    id:6,
    imgUrl:"./imges/p2.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"Cadillac CTS-V",
    price:"EGP40.00"
  },
  {
    id:7,
    imgUrl:"./imges/p2.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"Acura NSX",
    price:"EGP40.00"
  },
  {
    id:8,
    imgUrl:"./imges/p2.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"Nissan GT-R",
    price:"EGP40.00"
  },
  {
    id:9,
    imgUrl:"./imges/p2.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"Honda Civic Type R",
    price:"EGP40.00"
  },
  {
    id:10,
    imgUrl:"./imges/p11.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"Toyota Supra",
    price:"EGP40.00"
  },
  {
    id:11,
    imgUrl:"./imges/p11.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"Dodge Viper",
    price:"EGP40.00"
  },
  {
    id:12,
    imgUrl:"./imges/p2.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"totas",
    price:"EGP40.00"
  },
  {
    id:13,
    imgUrl:"./imges/p2.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"Toyota Supra",
    price:"EGP40.00"
  },
  {
    id:14,
    imgUrl:"./imges/p11.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  },
  {
    id:15,
    imgUrl:"./imges/p2.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"Ford GT",
    price:"EGP40.00"
  },
  {
    id:16,
    imgUrl:"./imges/p13.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"Ford GT",
    price:"EGP40.00"
  },
  {
    id:17,
    imgUrl:"./imges/p2.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"Aston Martin DB11",
    price:"EGP40.00"
  },
  {
    id:19,
    imgUrl:"./imges/p14.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"McLaren 720S",
    price:"EGP40.00"
  },
  {
    id:20,
    imgUrl:"./imges/auto1.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"Bentley Continental GT",
    price:"EGP40.00"
  },
  {
    id:21,
    imgUrl:"./imges/p8.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"Jaguar F-Type",
    price:"EGP40.00"
  }, 
  {
    id:20,
    imgUrl:"./imges/p8.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"Tesla Model S",
    price:"EGP40.00"
  }, 
  {
    id:22,
    imgUrl:"./imges/p8.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"BMW M5",
    price:"EGP40.00"
  }, 
  {
    id:23,
    imgUrl:"./imges/p8.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"Bentley Continental GT",
    price:"EGP40.00"
  }, 
  {
    id:24,
    imgUrl:"./imges/p8.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"Mercedes-Benz S-Class",
    price:"EGP40.00"
  }, 
  {
    id:25,
    imgUrl:"./imges/p15.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"Ferrari 488 GTB",
    price:"EGP40.00"
  }, 
  {
    id:27,
    imgUrl:"./imges/p15.jpg ",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"Lamborghini Aventador",
    price:"EGP40.00"
  }, 
  {
    id:28,
    imgUrl:"./imges/p8.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"Audi R8",
    price:"EGP40.00"
  }, 
  {
    id:29,
    imgUrl:"./imges/p15.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  }, 
  {
    id:30,
    imgUrl:"./imges/p8.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"Porsche 911",
    price:"EGP40.00"
  }, 
  {
    id:31,
    imgUrl:"./imges/p15.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"Dodge Challenger",
    price:"EGP40.00"
  }, 
  {
    id:32,
    imgUrl:"./imges/p8.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"Chevrolet Camaro",
    price:"EGP40.00"
  }, 
  {
    id:33,
    imgUrl:"./imges/p15.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"Ford Mustang",
    price:"EGP40.00"
  }, 
 ]
// loop
 function drawProductsUi(){
  let productsUi  =prodducts.map((item)=>{
    return`
    <div class="product-item">
    <img src="${item.imgUrl}" class="product-item-img" alt="photo">
    <div class="product-item-desc">
        <h2>${item.description}</h2>
        <span> ${item.span} </span>
        <h4>${item.price}</h4>
    </div>
    <div class="product-item-actions">
        <button class="add-to-cart" onclick="addproducts(${item.id})"><i class="fa-solid fa-cart-plus"></i>AddToCart</button>
    </div>
</div>
    `
  })
  productDom.innerHTML=productsUi;
 }
 drawProductsUi();
 
 //-----------------save products in localstorage ---------------------------------
  let addproduct = document.getElementById('myproduct');
  let message = document.getElementById('message');
  
  
  let addItem =[];
  
  function addproducts(id){
  let myProductsadd = document.querySelectorAll('#myproduct p');

  let choosenItem = prodducts.find((item)=> item.id ===id);

  addproduct.style.display="block";

  addproduct.innerHTML += `<p>${choosenItem.span}</p>`;

  addItem = [...addItem,choosenItem];
  
  localStorage.setItem("ProductsInCart",JSON.stringify(addItem))

  message.style.display="block";  

  message.innerHTML=myProductsadd.length+1;
}


//--------to hidden cart products when click it----------
addproduct.onclick=function () {
  addproduct.style.cursor="pointer"
  addproduct.style.display="none"
}
//------------------------------------------------------

