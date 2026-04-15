function validationQuantityError(qty) {
  if (qty < 0) {
    return true;
  }
  return false;
}

function calculateSubtotal(items) {
  let subTotal = 0;
  let discount = 0;
  const requirementSubTotalDisc = 50;

  items.map((item) => {
    const isQuantityError = validationQuantityError(item.qty);
    if (isQuantityError) {
      console.log("Error quantity", item.qty);
    }
    subTotal += item.price * item.qty;
    return;
  });

  if (subTotal > requirementSubTotalDisc) {
    discount = subTotal * 0.1;
  }

  return [subTotal - discount, discount];
}

function calculateTax(subTotal) {
  const tax = 0.11;

  return subTotal * tax;
}

function calculateTotal(subtotal, tax) {
  return subTotal + tax;
}

const items = [
  { name: "Fish A", price: 10, qty: 2 },
  { name: "Fish B", price: 5, qty: 4 },
];

const [subTotal, discount] = calculateSubtotal(items);
const tax = calculateTax(subTotal);
const total = calculateTotal(subTotal, tax);

console.log("=========================\n");
console.log("  Smart Cart Calculator\n");
console.log("=========================\n");
console.log(`Diskon: -${discount}`);
console.log(`Sub Total: ${subTotal}`);
console.log(`Tax (11%): ${tax}`);
console.log(`Total: ${total}`);

// === UI

const form = document.getElementById("form");
const names = document.querySelectorAll("input.name");
const quantities = document.querySelectorAll("input.qty");
const prices = document.querySelectorAll("input.price");

const setSubTotal = document.getElementById("setSubTotal");
const setDiscount = document.getElementById("setDiscount");
const setTax = document.getElementById("setTax");
const setTotal = document.getElementById("setTotal");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  data = [];

  const isQuantityError = quantities.forEach((qty) =>
    validationQuantityError(qty.value),
  );

  // console.log(Math.max(names.length, quantities.length, prices.length));

  if (isQuantityError) {
    return;
  } else {
    for (let i = 0; i < names.length; i++) {
      data.push({
        name: names[i].value,
        qty: quantities[i].value,
        price: prices[i].value,
      });
    }

    const [subTotal, discount] = calculateSubtotal(data);
    const tax = calculateTax(subTotal);
    const total = calculateTotal(subTotal, tax);

    setSubTotal.innerHTML = subTotal;
    setDiscount.innerHTML = discount;
    setTax.innerHTML = tax;
    setTotal.innerHTML = total;

    // console.log("=========================\n");
    // console.log("  Smart Cart Calculator\n");
    // console.log("=========================\n");
    // console.log(`Diskon: -${discount}`);
    // console.log(`Sub Total: ${subTotal}`);
    // console.log(`Tax (11%): ${tax}`);
    // console.log(`Total: ${total}`);
  }
});
