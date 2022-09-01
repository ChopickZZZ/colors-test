
export const amountParser = (amount: number) => {
   const words = ['товар', 'товара', 'товаров']

   amount = Math.abs(amount) % 100;
   const num = amount % 10;

   if (amount === 0)
      return 'Корзина пуста'
   if (amount > 10 && amount < 20)
      return amount + ' ' + words[2];
   if (num > 1 && num < 5)
      return amount + ' ' + words[1];
   if (num == 1)
      return amount + ' ' + words[0];

   return amount + ' ' + words[2];
}