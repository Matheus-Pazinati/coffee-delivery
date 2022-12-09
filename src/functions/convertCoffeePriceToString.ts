export function convertCoffeePriceToString(price: number, quantity: number) {
  const coffeeTotalPrice = price * quantity
  const coffeePriceView = coffeeTotalPrice.toFixed(1).replace('.', ',').concat('0')

  return coffeePriceView
}