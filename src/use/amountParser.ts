
export const amountParser = (amount: number) => {
   if (amount === 0) {
      return 'Корзина пуста'
   }
   else if (amount > 0 && amount < 5) {
      return amount + ' товара'
   }
   else {
      return amount + ' товаров'
   }
}