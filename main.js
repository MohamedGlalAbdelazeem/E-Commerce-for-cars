 //*********************************************** Home page ********************************************/

0
 // scroll btn 
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



//*******************************shotpNow btn******************************** */
let shotpNowbtn = document.getElementById('shopNow');

shotpNowbtn.onclick=(event)=>{
  event.preventDefault();

  if (localStorage.getItem("username") && localStorage.getItem("password")) {
    window.location="shop.html";
  }else{
    window.location="singup.html";
  }
}

//---------------------------carts btn--------------------------------------------


let productDom  =document.querySelector('.products');
let prodducts =[
  {
    id:1,
    imgUrl:"./imges/auto1.jpg",
    description:"4pcs for Mercedes Benz Wheel Center Caps Parts",
    span:"All Cars 🚗",
    price:" EGP 250"
  },
  {
    id:2,
    imgUrl:"./imges/p1.jpg",
    description:"1PC Car Motorcycle Van Bike Tyre Air Inflator Valve Tire Nozzle Pneumatic Pump Adapter Auto Replacement Parts (6MM)",
    span:"All Cars 🚗",
    price:"EGP89.00"
  },

  {
    id:3,
    imgUrl:"./imges/p3.jpg",
    description:"DELFINO Car Rearview Mirror Protective Film Waterproof Film",
    span:"All Cars 🚗",
    price:"EGP49.17"
  },

  {
    id:4,
    imgUrl:"./imges/p2.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  },
  {
    id:5,
    imgUrl:"./imges/p10.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  },
  {
    id:6,
    imgUrl:"./imges/p2.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  },
  {
    id:7,
    imgUrl:"./imges/p2.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  },
  {
    id:8,
    imgUrl:"./imges/p2.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  },
  {
    id:9,
    imgUrl:"./imges/p2.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  },
  {
    id:10,
    imgUrl:"./imges/p11.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  },
  {
    id:11,
    imgUrl:"./imges/p11.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  },
  {
    id:12,
    imgUrl:"./imges/p2.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  },
  {
    id:13,
    imgUrl:"./imges/p2.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
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
    span:"All Cars 🚗",
    price:"EGP40.00"
  },
  {
    id:16,
    imgUrl:"./imges/p13.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  },
  {
    id:17,
    imgUrl:"./imges/p2.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  },
  {
    id:19,
    imgUrl:"./imges/p14.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  },
  {
    id:20,
    imgUrl:"./imges/auto1.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  },
  {
    id:21,
    imgUrl:"./imges/p8.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  }, 
  {
    id:20,
    imgUrl:"./imges/p8.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  }, 
  {
    id:22,
    imgUrl:"./imges/p8.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  }, 
  {
    id:23,
    imgUrl:"./imges/p8.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  }, 
  {
    id:24,
    imgUrl:"./imges/p8.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  }, 
  {
    id:25,
    imgUrl:"./imges/p15.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  }, 
  {
    id:27,
    imgUrl:"./imges/p15.jpg ",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  }, 
  {
    id:28,
    imgUrl:"./imges/p8.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
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
    span:"All Cars 🚗",
    price:"EGP40.00"
  }, 
  {
    id:31,
    imgUrl:"./imges/p15.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  }, 
  {
    id:32,
    imgUrl:"./imges/p8.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  }, 
  {
    id:33,
    imgUrl:"./imges/p15.jpg",
    description:"Two Pieces Universal Car Storage Net Phone Holder Pocket",
    span:"All Cars 🚗",
    price:"EGP40.00"
  }, 
 ]

 
 // this function to make products in website 
 function drawProductsUi(){
  let productsUi  = prodducts.map((item)=>{
    return`
    <div class="product-item">
    <img src="${item.imgUrl}" class="product-item-img" alt="photo">
    <div class="product-item-desc">
        <h2>${item.description}</h2>
        <span> ${item.span} </span>
        <h4>${item.price}</h4>
    </div>
    <div class="product-item-actions">
        <button class="add-to-cart" onclick="checkedLoginUser()"><i class="fa-solid fa-cart-plus"></i>AddToCart</button>
    </div>
</div>
    ` 
  })
  productDom.innerHTML=productsUi;
 }
 drawProductsUi();

 
 function checkedLoginUser() {
  if (localStorage.getItem('username')){
 window.location="cart.html"
  }else{
    window.location="singup.html"
  }
 }