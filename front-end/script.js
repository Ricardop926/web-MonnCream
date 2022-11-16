let foodContainer = document.getElementById('page-content');
let productList = [];

 



// const food = fooditem.map(item => {
//     const listitem = ` <div class="col-md-6 foodbox ${item.type}">
//     <!-- content div -->
//     <div class="content b my-2">
//         <!-- image -->
//         <div class="c-image">
//             <img src="${item.foodimg}" alt="">
//         </div>
//         <div class="t-n-p my-2">
//             <div class="header">  
//                 <!-- title -->
//                 <span class="title">${item.FoodName}</span>
//                 <!-- price -->
//                 <span class="price">${item.price}</span>
//             </div>
//             <!-- Description -->
//             <div class="des my-3 ">
//                 <p>${item.des}</p>
//             </div>
//         </div>   
//     </div>
// </div>`;
// foodContainer.innerHTML += listitem;
// })

function displayProducts() {
    document.getElementById("all-products").style.display = "block";

  
    const breakfast = productList.filter((p) => p.type === "copas");
    displayProductsByType(breakfast , "product-cards-copas");
  
    const malteada = productList.filter((p) => p.type === "malteada");
    displayProductsByType(malteada, "product-cards-malteada");
  
    const waffles = productList.filter((p) => p.type === "waffles");
    displayProductsByType(waffles, "product-cards-waffles");

    const cucurucho = productList.filter((p) => p.type === "cucurucho");
    displayProductsByType(cucurucho, "product-cards-cucurucho");
  }

  function displayProductsByType(productsByType, tagId) { 
    let productsHTML = '';
    productsByType.forEach(element => {
        productsHTML +=
        ` <div class="col-md-6 id="foodbox" ${element.type}">
        <!-- content div -->
        <div class="content b my-2">
            <!-- image -->
            <div class="c-image">
                <img src="${element.foodimg}" alt="">
            </div>
            <div class="t-n-p my-2">
                <div class="header">  
                    <!-- title -->
                    <span class="title">${element.FoodName}</span>
                    <!-- price -->
                    <span class="price">${element.price}</span>
                </div>
                <!-- Description -->
                <div class="des my-3 ">
                    <p>${element.des}</p>
                </div>
                <!-- whatsapp -->
                <p> Pide el tuyo </p>
                <a href="https://wa.me/573045558737?text=hola  tiene disponible este  ${element.FoodName} " class="des my-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
</svg>
                </a>
            </div>   
        </div>
    </div>`
    });
    document.getElementById(tagId).innerHTML = productsHTML;
}

async function fetchProducts() {
    productList = await (await fetch("/api/productos")).json();
    displayProducts();
  }

  window.onload = async () => {
    await fetchProducts();
  };


// window.onload = async() => {
//     const productList = await (await fetch("/api/productos")).json();
//     console.log(productList);
//     displayProducts(productList);
// }




// const foodbox = document.getElementById('foodbox');
// const menu = document.querySelectorAll('ul');

// menu.forEach(m => {
//     m.addEventListener('click', e =>{
//         console.log(e.target.innerHTML)
//         foodbox.forEach(box => {
//             box.classList.add('d-none')
           
//              if(e.target.innerHTML==='Breakfast'){
//                 if(box.classList.contains('breakFast'))
//                 {
//                     box.classList.remove('d-none')
//                 }
                
//             }
//             else if(e.target.innerHTML==='Lunch'){
//                 if(box.classList.contains('Lunch'))
//                 {
//                     box.classList.remove('d-none')
//                 }
                
//             }
           
//             else if(e.target.innerHTML==='Dinner'){
//                 if(box.classList.contains('Dinner'))
//                 {
//                     box.classList.remove('d-none')
//                 }
                
//             }
//         })
        
//     })
// })
