<script setup lang="ts">
import AppBackdrop from './AppBackdrop.vue';
import { useCartStore } from '../stores/cart';
import { amountParser } from '../use/amountParser'
import { computed } from 'vue'
import CartItem from './CartItem.vue';

const cartStore = useCartStore()
const cartToggle = () => cartStore.toggleCart()
const isOpen = computed(() => cartStore.isCartOpen)

if (localStorage.getItem('cart')) {
   cartStore.setProducts()
}

const colorProducts = computed(() => cartStore.cart)
const totalSum = computed(() => cartStore.cart.reduce((sum, item) => sum + item.price * item.amountInCart!, 0))
const toggleItem = (id: string) => cartStore.itemToggle(id)
const increaseAmount = (id: string) => cartStore.increaseAmount(id)
const decreaseAmount = (id: string) => cartStore.decreaseAmount(id)

const clearCart = () => cartStore.cartClear()
</script>

<template>
   <div v-if="isOpen">
      <AppBackdrop @backdrop-event="cartToggle" />
      <div class="cart">
         <div class="cart__top">
            <h3 class="cart__title">Корзина</h3>
            <button class="cart__btn-close" @click="cartToggle">
               <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <title>x</title>
                  <path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4"
                     stroke-width="1.8667" stroke="#000" d="M24 8l-16 16"></path>
                  <path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4"
                     stroke-width="1.8667" stroke="#000" d="M8 8l16 16"></path>
               </svg>
            </button>
         </div>
         <div class="cart__content">
            <div class="cart__content-top">
               <div class="cart__amount">{{ amountParser(colorProducts.length) }}</div>
               <button class="cart__btn-clear" @click="clearCart">Очистить список</button>
            </div>
            <div class="cart__items">
               <CartItem v-for="color in colorProducts" :key="color.id" :color="color" @toggle="toggleItem"
                  @increase="increaseAmount" @decrease="decreaseAmount" />
            </div>
         </div>
         <div class="cart__bottom">
            <div class="cart__total-container">
               <div class="cart__sub-title">Итого</div>
               <strong class="cart__total">{{ totalSum }}₽</strong>
            </div>
            <div class="cart__btn-checkout">Оформить заказ</div>
         </div>
      </div>
   </div>
</template>

<style lang="scss" scoped>
.cart {
   display: flex;
   flex-direction: column;
   position: fixed;
   z-index: 105;
   top: 0;
   right: 0;
   width: 60rem;
   height: 100vh;
   padding: 4rem;
   background-color: #fff;

   &__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8rem;
   }

   &__content {
      flex: 1;
   }

   &__content-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
   }

   &__amount {
      color: var(--color-primary);
      font-size: 1.4rem;

      @media (max-width: 56.25em) {
         font-size: 1.5rem;
      }
   }

   &__items {
      max-height: 65vh;
      overflow: auto;
      margin-bottom: 2rem;
   }

   &__bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
   }

   &__total-container {}

   &__total {
      font-size: 3rem;
      color: var(--color-primary);
      font-weight: 500;
      letter-spacing: -0.02em;
      line-height: 1;

      @media (max-width: 31.25em) {
         font-size: 2.2rem;
      }
   }

   &__title {
      color: var(--color-primary);
      font-size: 3rem;
      font-weight: 500;
      letter-spacing: -0.04em;
   }

   &__sub-title {
      font-size: 1.6rem;
      line-height: 1;
      color: var(--color-primary);
      margin-bottom: .6rem;
   }

   &__btn-close {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      width: 4.8rem;
      height: 4.8rem;
      background-color: transparent;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.1);
      cursor: pointer;
   }

   &__btn-close svg {
      width: 2.3rem;
      height: 2.3rem;
   }

   &__btn-clear {
      font-size: 1.4rem;
      font-weight: 300;
      color: rgba(31, 32, 32, 0.4);
      text-transform: uppercase;
      border: none;
      background-color: transparent;
      cursor: pointer;
   }

   &__btn-checkout {
      display: inline-block;
      padding: 2rem 5.8rem;
      font-size: 1.2rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--color-primary);
      background-color: var(--color-green);
      border: none;
      border-radius: 4px;
      cursor: pointer;

      @media (max-width: 31.25em) {
         padding: 1.5rem 4.35rem;
      }
   }

   @media (max-width: 75em) {
      gap: 2rem;
      width: 50rem;
      padding: 2rem;
   }

   @media (max-width: 56.25em) {
      width: 100%;
      padding: 3rem;
   }
}
</style>