export function validationQuantityError(qty) {
  if (qty < 0) {
    return true;
  }
  return false;
}
