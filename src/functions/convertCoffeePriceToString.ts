export function convertCoffeePriceToString(price: number, quantity: number) {
  const coffeeTotalPrice = price * quantity
  const coffeePriceView = coffeeTotalPrice.toFixed(2).replace('.', ',')

  return coffeePriceView
}