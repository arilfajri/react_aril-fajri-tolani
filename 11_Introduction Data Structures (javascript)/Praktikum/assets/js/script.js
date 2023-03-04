let noUrut = 1;
document.getElementById("submitbutton").addEventListener("click", function () {
  // buat variabel untuk menyimpan value field inputan
  let productName = document.getElementById("productname").value;
  let productCategory = document.getElementById("productcategory").value;
  let imageProduct = document.getElementById("image-product").files[0].name;
  let productFreshness = document.querySelector(
    'input[name="radioproduct"]:checked'
  ).value;
  let additionalDescription = document.getElementById(
    "description"
  ).value;
  let productPrice = document.getElementById("productprice").value;

	// Buat elemen cell untuk nomor urut
	let cellNoUrut = noUrut++;

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

  // membuat variabel untuk nanti mengcreate elemen td
  const tableBody = document.getElementById("table-body");
  const newRow = document.createElement("tr");
  const newCell1 = document.createElement("td");
  const newCell2 = document.createElement("td");
  const newCell3 = document.createElement("td");
  const newCell4 = document.createElement("td");
  const newCell5 = document.createElement("td");
  const newCell6 = document.createElement("td");
  const newCell7 = document.createElement("td");

  // menambahkan nilai ke dalam
  newCell1.innerHTML = cellNoUrut;
  newCell2.innerHTML = productName;
  newCell3.innerHTML = productCategory;
  newCell4.innerHTML = imageProduct;
  newCell5.innerHTML = productFreshness;
  newCell6.innerHTML = additionalDescription;
  newCell7.innerHTML = productPrice;

  newRow.append(newCell1, newCell2, newCell3, newCell4, newCell5, newCell6, newCell7);
  tableBody.appendChild(newRow);
});

// maks 25 karakter inputan product name
const inputText = document.querySelector('input[type="text"]');
inputText.addEventListener('input', function() {
  if (this.value.length > 25) {
    this.value = this.value.slice(0, 25);
  }else if(this.value.length >= 25) {
    alert("Product Name must not exceed 25 characters.");
  }
});

// inputan additional description tidak boleh mengandung symbol @#{}
inputText.addEventListener('input', function() {
  const invalidCharacters = /[@#/{}]/g;
  if (invalidCharacters.test(this.value)) {
    alert('Name must not contain symbols.');
    this.value = this.value.replace(invalidCharacters, '');
  }
});

// membuat fungsi untuk menghapus data di table
let deleteButton = document.getElementById("delete-button");
deleteButton.addEventListener("click", function (event) {
  event.preventDefault();

  const tableBody = document.getElementById("table-body");
  let lastRow = tableBody.lastElementChild;
  tableBody.removeChild(lastRow);
  noUrut--;
});

// membuat fungsi searching untuk mencari data di table
let searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function (event) {
  event.preventDefault();

  let search = document.getElementById("search").value;
  let tableRows = document.getElementsByTagName("tr");
  let found = false;

  for (let i = 1; i < tableRows.length; i++) {
    let rowCells = tableRows[i].getElementsByTagName("td");
    if (rowCells[1].innerText === search) {
      alert(
        "Data ditemukan!\nNo: " +
          rowCells[0].innerText +
          "\nProduct Name: " +
          rowCells[1].innerText +
          "\nProduct Category: " +
          rowCells[2].innerText +
          "\nImage of Product: " +
          rowCells[3].innerText +
          "\nProduct Freshness: " +
          rowCells[4].innerText +
          "\nAdditional Description: " +
          rowCells[5].innerText +
          "\nProduct Price: " +
          rowCells[6].innerText
      );
      found = true;
      break;
    }
  }

  if (!found) {
    alert("Data tidak ditemukan.");
  }
});

