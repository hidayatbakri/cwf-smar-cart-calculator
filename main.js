import {
  calculateSubtotal,
  calculateTax,
  calculateTotal,
} from "./CartCalculation.js";
import { validationQuantityError } from "./Validation.js";

const form = document.getElementById("form");
const names = document.querySelectorAll("input.name");
const quantities = document.querySelectorAll("input.qty");
const prices = document.querySelectorAll("input.price");

const setSubTotal = document.getElementById("setSubTotal");
const setSubTotalDiscount = document.getElementById("setSubTotalDiscount");
const setDiscount = document.getElementById("setDiscount");
const setTax = document.getElementById("setTax");
const setTotal = document.getElementById("setTotal");
let setItemsDetail = document.getElementById("setItemsDetail");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  setItemsDetail.innerHTML = "";

  let data = [];

  const isQuantityError = quantities.forEach((qty) =>
    validationQuantityError(qty.value),
  );

  if (isQuantityError) {
    return;
  } else {
    for (let i = 0; i < names.length; i++) {
      data.push({
        name: names[i].value,
        qty: quantities[i].value,
        price: prices[i].value,
      });

      setItemsDetail.innerHTML += `
        <table class="w-full my-6">
          <tr>
            <th class=" pb-2 text-start font-normal text-sm text-slate-500">
              Nama
            </th>
            <th class=" pb-2 text-end font-normal text-sm text-slate-500">
              Quantity
            </th>
            <th class=" pb-2 text-end font-normal text-sm text-slate-500">
              Harga
            </th>
            <th class=" pb-2 text-end font-normal text-sm text-slate-500">
            #
            </th>
          </tr>
          <tr>
            <td class="pb-2 text-slate-700 ">${names[i].value}</td>
            <td class="pb-2 text-slate-700 text-end">x${quantities[i].value}</td>
            <td class="pb-2 text-slate-700 text-end">${prices[i].value}</td>
            <td class="pb-2 text-slate-900 font-semibold w-60 text-end">
              ${quantities[i].value * prices[i].value}
            </td>
          </tr>
          </table>
      `;
    }

    const [subTotal, discount] = calculateSubtotal(data);
    const tax = calculateTax(subTotal);
    const total = calculateTotal(subTotal, tax);

    setSubTotal.innerHTML = subTotal + discount;
    setSubTotalDiscount.innerHTML = subTotal;
    setDiscount.innerHTML = discount;
    setTax.innerHTML = tax;
    setTotal.innerHTML = total;

    console.log("=========================\n");
    console.log("  Smart Cart Calculator\n");
    console.log("=========================\n");
    console.log(`Diskon: -${discount}`);
    console.log(`Sub Total: ${subTotal}`);
    console.log(`Tax (11%): ${tax}`);
    console.log(`Total: ${total}`);
  }
});
