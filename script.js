let products = [
  [1, "מלפפון", 6],
  [2, "עגבניה", 9],
  [3, "בצל", 3],
];
let shoppingCart = [];
function addToCart(product) {
  shoppingCart.push(products[product - 1]);
  console.log(shoppingCart);
  renderCartFromArray();
}
function renderCartFromArray() {
  document.getElementById("shoppingCart").innerHTML = ""; //removes all the HTML content.
  for (let i = 0; i < shoppingCart.length; i++) {
    let productHTML = document.createElement("div"); //<div></div>
    let productDescription = document.createTextNode(
      shoppingCart[i][1] + ": " + shoppingCart[i][2]
    );
    let removeBtn = document.createElement("button");

    removeBtn.setAttribute("onclick", "removeProduct(" + i + ")");
    //sets an attribute to the button
    //<button onclick="removeProduct(i)"></button>
    removeBtn.textContent = "מחק";
    productHTML.appendChild(productDescription);
    productHTML.appendChild(removeBtn);

    document.getElementById("shoppingCart").appendChild(productHTML);
  }
}
function removeProduct(product) {
  shoppingCart.splice(product, 1); //removes the array item i.
  //   console.log(shoppingCart);
  renderCartFromArray();
}

function emptyCart() {
  let a = document.getElementById("shoppingCart");
  a.innerHTML = "";
  shoppingCart = [];
}
