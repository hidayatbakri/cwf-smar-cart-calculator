import { validationQuantityError } from "./Validation.js";

export function calculateSubtotal(items) {
  let subTotal = 0;
  let discount = 0;
  const requirementSubTotalDisc = 50;

  items.map((item) => {
    const isQuantityError = validationQuantityError(item.qty);
    if (isQuantityError) {
      console.log("Error quantity", item.qty);
    } else {
      subTotal += item.price * item.qty;
    }
    return;
  });

  if (subTotal > requirementSubTotalDisc) {
    discount = subTotal * 0.1;
  }

  return [subTotal - discount, discount];
}

export function calculateTax(subTotal) {
  const tax = 0.11;

  return subTotal * tax;
}

export function calculateTotal(subTotal, tax) {
  return subTotal + tax;
}
