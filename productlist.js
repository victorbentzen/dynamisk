//https://kea-alt-del.dk/t7/api/products

const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("cat");
const url = `https://kea-alt-del.dk/t7/api/products?limit=30&category=${cat}`;

document.querySelector(".category").textContent = cat;

//1 grab the data
async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  //2 loope gennem data //3 for hver af dem:
  data.forEach(showProduct);
}
getData();

function showProduct(product) {
  console.log(product);

  //4 fange vores template
  const template = document.querySelector("#smallProductTemplate").content;
  //5 clone
  const copy = template.cloneNode(true);
  //6 skifte data
  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
    const discountPrice = product.price - product.price * (product.discount / 100);
    copy.querySelector(".newprice").textContent = `${discountPrice.toFixed(2)} kr`;
    copy.querySelector(".percent").textContent = `${product.discount}%`;
  }
  copy.querySelector(".brand").textContent = product.brandname;

  copy.querySelector(".type").textContent = product.articletype;
  copy.querySelector(".price").textContent = `${product.price} kr`;
  copy.querySelector("a").href = "product.html?id=" + product.id;

  copy.querySelector(".product-img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  //7 appende
  document.querySelector(".productlist").appendChild(copy);
}

/*
{
  "id": 1529,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Fall",
  "productionyear": 2010,
  "usagetype": "Casual",
  "productdisplayname": "Tee",
  "price": 1899,
  "discount": null,
  "brandname": "Puma",
  "soldout": 0
}
 */
