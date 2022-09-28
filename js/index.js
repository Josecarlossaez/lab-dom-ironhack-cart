// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  let subTotal = price.textContent * quantity.value
  let subTotal2 =product.querySelector('.subtotal span')
  subTotal2.innerHTML = subTotal
 return subTotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
             //const singleProduct = document.querySelector('.product');
             // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let sumTotal = 0
  let allProducts = document.querySelectorAll('.product')
  allProducts.forEach((cadaElemento) => {

   //ITERATION 3
     sumTotal = sumTotal + updateSubtotal(cadaElemento)
    
    
         
  })
    

let total = document.querySelector("#total-value span")
 total.innerHTML = sumTotal
 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
