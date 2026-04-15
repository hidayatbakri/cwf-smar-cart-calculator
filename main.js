function validationQuantity(qty) {
  if (qty < 0) {
    return console.log("Quantity tidak boleh kurang dari 0");
  }
}

function calculateSubtotal(items) {
  let subTotal = 0;
  let discount = 0;
  const requirementSubTotalDisc = 50;

  items.map((item) => {
    validationQuantity(item.qty);
    subTotal += item.price * item.qty;
    return;
  });

  if (subTotal > requirementSubTotalDisc) {
    discount = subTotal * 0.1;
  }

  return subTotal - discount;
}

function calculateTax(subTotal) {
  const tax = 0.11;

  return subTotal * tax;
}

function calculateTotal(subtotal, tax) {
  return subTotal + tax;
}

const items = [
  { name: "Fish A", price: 10, qty: 4 },
  { name: "Fish B", price: 5, qty: 4 },
];

const subTotal = calculateSubtotal(items);
const tax = calculateTax(subTotal);
const total = calculateTotal(subTotal, tax);
console.log(`Sub Total: ${subTotal}`);
console.log(`Tax (11%): ${tax}`);
console.log(`Total: ${total}`);

// const buttonAddNewData = document.getElementById("addNewData");
// const elementLocation = document.getElementById("elementLocation");

// buttonAddNewData.addEventListener("click", (e) => {
//   e.preventDefault();
//   elementLocation.innerHTML += `
//     <div class="grid md:grid-cols-2 gap-4 mb-3">
//             <div class="form-group flex flex-col gap-2 col-span-2">
//               <label for="name" class="text-slate-800">Nama:</label>
//               <input
//                 type="text"
//                 class="outline -outline-offset-2 outline-gray-400 p-2 rounded"
//                 placeholder="Masukkan Nama"
//                 id="name"
//                 required
//               />
//             </div>
//             <div class="form-group flex flex-col gap-2">
//               <label for="price" class="text-slate-800">Harga:</label>
//               <input
//                 type="number"
//                 class="outline -outline-offset-2 outline-gray-400 p-2 rounded"
//                 placeholder="Masukkan Harga"
//                 id="price"
//                 required
//               />
//             </div>
//             <div class="form-group flex flex-col gap-2">
//               <label for="qty" class="text-slate-800">Quantity:</label>
//               <input
//                 type="number"
//                 class="outline -outline-offset-2 outline-gray-400 p-2 rounded"
//                 placeholder="Masukkan Quantity"
//                 id="qty"
//                 required
//               />
//             </div>
//           </div>
//   `;
// });

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  const names = document.querySelectorAll("input.name");
  e.preventDefault();
  names.forEach((val, key) => {
    console.log(val.value);
  });
});
