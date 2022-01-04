const productEl = document.querySelector(".products");

const cartEl = document.querySelector(".cart");

const productUnit = document.querySelector(".unit");

const productNumber = document.querySelector(".product-number");

const totalPrice = document.querySelector(".total-price");

const emptyCart = document.querySelector(".empty-cart");

const imageSrc = document.getElementById("img1");

const imageSrc2 = document.getElementById("image1");

const leftArrow = document.querySelector(".left-arrow");

const rightArrow = document.querySelector(".right-arrow");

const popupContainer = document.querySelector(".popup");

const close = document.querySelector(".close-btn");

const imageContainer_2 = document.querySelector("#image2");

const imgContainer_2 = document.querySelector("#img2");

const imageContainer_1 = document.querySelector("#image1");

const imgContainer_1 = document.querySelector("#img1");

const menu = document.querySelector(".hamburger")

const navlist = document.querySelector('#nav-menu')

let numberOfUnit = productUnit.innerHTML;

var cartHead = document.querySelector(".cart-head");

var cart = document.querySelector(".cart");

var cartAdd = document.querySelector(".add-cart");

 const  image = [...document.querySelectorAll(".image")];

 const  img= [...document.querySelectorAll(".img")];




/// toggle nav-menu


menu.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    navlist.classList.toggle('active');
})








// add to cart
    function addCart (action) {
        if (action === "click" && Number(numberOfUnit) > 0 ) {
        var add = Number(numberOfUnit);
        cartHead.setAttribute('data-count', add);
        cartHead.classList.add('zero');
         productNumber.innerHTML = numberOfUnit;
        let price = numberOfUnit * 125.00
       totalPrice.innerHTML = "$" + price + ".00";
       updateCart();
    }
};

addCart();


// update cart

function updateCart () {
    if (Number(numberOfUnit) >= 1) {
        productEl.classList.add('display')
       emptyCart.classList.add('display')
    }
    }

function deleteCart (action) {
  if (action === "click") {
       productEl.classList.remove('display');
       emptyCart.classList.remove('display');
       cartHead.classList.remove('zero');
  }
}


// delete cart

deleteCart();

function showCart (action) {
    if (action === "click" ) {
        cartEl.classList.toggle('display');
    }
}

showCart();



function changeUnit (action) {
  
if (action === "minus" && numberOfUnit > 0) {
    numberOfUnit= numberOfUnit-1;
    productUnit.innerHTML = numberOfUnit
}

else if (action === "plus") {
    numberOfUnit++;
    productUnit.innerHTML = numberOfUnit
};

}


// image---toggle

window.addEventListener('DOMContentLoaded', ()=> {
     if(popupContainer.classList.contains('active') === false  || window.innerWidth < 1025) {
   let index = 0
image.forEach((item, i) => {
 item.addEventListener('click', ()=>{
 updateImage(i);
 })
});


const updateImage = (i) => {
    for (let n = 0; n<image.length; n++ ){
     image[n].classList.remove('active');
     };
     for (let n = 0; n<img.length; n++ ){
     img[n].classList.remove('active');
     };
    let path = `images/image-product-${i+1}.jpg`;
    imageSrc.src = path;
    index = i;
    image[i].classList.toggle('active');
    imageSrc2.src =imageSrc.src
    img[i].classList.toggle('active')
    }

    leftArrow.addEventListener("click", ()=> {
  if(index > 0) {
      updateImage(index - 1);
  }
});


rightArrow.addEventListener("click", ()=> {
  if(index < img.length -1 ) {
      updateImage(index + 1);
  }
});


     }

});
//image-popup



function popUp (action) {
    if(action === "click") {
        popupContainer.classList.toggle('active')
        if( popupContainer.classList.contains('active') === true  ){
        console.log('eh')
        let index = 0;
        const  img = [...document.querySelectorAll(".img")];
        img.forEach((item, i) => {
    item.addEventListener('click', ()=>{ 
    popupUpdate(i);
     
 })

})


const popupUpdate = (i) => {
for (let n = 0; n<img.length; n++ ){
     img[n].classList.remove('active');
     };
    let path = `images/image-product-${i+1}.jpg`;
    imageSrc2.src = path;
    index = i;
    img[i].classList.toggle('active');
}



//move image with arrow

leftArrow.addEventListener("click", ()=> {
  if(index > 0) {
      popupUpdate(index - 1);
  }
});


rightArrow.addEventListener("click", ()=> {
    console.log("yaah")
  if(index < img.length -1 ) {
      popupUpdate(index + 1);
  }
});
}   

}
}

popUp();


function closePopup (action) {
    if(action === "click") {
        popupContainer.classList.remove('active')
        
    }
}


closePopup();