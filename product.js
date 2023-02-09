//https://kea-alt-del.dk/t7/api/products/1535

console.log("product.js");

//Lav url search objekt
const urlParams = new URLSearchParams(window.location.search);
//Find ID
const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

async function getProduct() {
  fetch(url)
    .then((res) => res.json())
    .then(showProduct);
}

function showProduct(product) {
  document.querySelector(".box h2").textContent = product.productdisplayname;
  document.querySelector(".box .brand").textContent = product.brandname;
  document.querySelector(".brand").textContent = product.brandname;

  document.querySelector(".box .type").textContent = product.articletype;

  document.querySelector(".variant").textContent = product.variantname;
  document.querySelector(".modelvariant").textContent = product.variantname;
  document.querySelector(".colour").textContent = product.basecolour;
  document.querySelector(".id").textContent = product.id;

  document.querySelector("#hero1").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}

getProduct();
