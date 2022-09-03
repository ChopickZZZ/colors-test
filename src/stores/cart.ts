import { useColorStore } from './colors';
import { ColorItem } from './../types';
import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'
import { overflowToggle } from '../helpers';

export const useCartStore = defineStore('cart', () => {

   const cart: Ref<ColorItem[]> = ref([])
   const isCartOpen = ref(false)

   const colorStore = useColorStore()

   const itemToggle = (id: string) => {
      const colorProduct = colorStore.colors.find(color => color.id === id)
      if (colorProduct === undefined) {
         throw TypeError('No color found in store')
      }

      if (cart.value.some(product => product.id === id)) {
         colorProduct.amountInCart = 0
         cart.value = cart.value.filter(product => product.id !== colorProduct?.id)
      }
      else {
         colorProduct.amountInCart ? colorProduct.amountInCart++ : colorProduct.amountInCart = 1
         cart.value.push(colorProduct!)
      }
      localStorage.setItem('cart', JSON.stringify(cart.value))
   }

   const increaseAmount = (id: string) => {
      const colorProduct = cart.value.find(color => color.id === id)
      colorProduct!.amountInCart!++
      localStorage.setItem('cart', JSON.stringify(cart.value))
   }
   const decreaseAmount = (id: string) => {
      const colorProduct = cart.value.find(color => color.id === id)
      if (colorProduct?.amountInCart !== 1) {
         colorProduct!.amountInCart!--
      }
      localStorage.setItem('cart', JSON.stringify(cart.value))
   }

   const toggleCart = () => {
      isCartOpen.value = !isCartOpen.value
      overflowToggle()
   }
   const cartClear = () => {
      cart.value.forEach(item => item.amountInCart = 0)
      cart.value.length = 0
      localStorage.removeItem('cart')
   }

   const setProducts = () => {
      if (localStorage.getItem('cart') !== null) {
         cart.value = JSON.parse(localStorage.getItem('cart')!)
      }
   }

   return { cart, isCartOpen, toggleCart, itemToggle, increaseAmount, decreaseAmount, cartClear, setProducts }
})