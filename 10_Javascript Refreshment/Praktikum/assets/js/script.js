document.getElementById("submitbutton").addEventListener("click", function () {
  var productName = document.getElementById("productname").value;
  var productCategory = document.getElementById("productcategory").value;
  var imageProduct = document.getElementById("image-product").value;
  var productFreshness = document.querySelector(
    'input[name="radioproduct"]:checked'
  );
  var additionalDescription = document.getElementById(
    "description"
  ).value;
  var productPrice = document.getElementById("productprice").value;

  // pengecekan alert jika ada field yg kosong maka muncul alert
  if (productName == "" || productPrice == "") {
    alert("Please enter a valid Product name and price.");
  } 

  if (productName === "") {
    alert("The Product Name field must be filled in.");
    return;
  } else if (/[**@/#{}**]/.test(productName)) {
    alert("Name must not contain symbols.");
    return;
  }

  if (productCategory === "") {
    alert("The Product Category field must be filled in.");
    return;
  }
  if (imageProduct === "") {
    alert("The Image of Product field must be filled in.");
    return;
  }
  if (!productFreshness) {
    alert("The Product Freshness field must be filled in.");
    return;
  }
  if (additionalDescription === "") {
    alert("The Additional Description field must be filled in.");
    return;
  }
  if (productPrice === "") {
    alert("The Product Price field must be filled in.");
    return;
  }
});

// maks 25 karakter inputan product name
const inputText = document.querySelector('input[type="text"]');
inputText.addEventListener('input', function() {
  if (this.value.length > 25) {
    this.value = this.value.slice(0, 25);
  }else if(this.value.length > 10) {
    alert("Product Name must not exceed 25 characters.");
  }
});

// inputan tidak boleh mengandung symbol @#{}
inputText.addEventListener('input', function() {
  const invalidCharacters = /[@#/{}]/g;
  if (invalidCharacters.test(this.value)) {
    alert('Name must not contain symbols.');
    this.value = this.value.replace(invalidCharacters, '');
  }
});