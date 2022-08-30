<script setup lang="ts">
import { ColorItem } from '../types';

defineProps<{
   color: ColorItem
}>()

const emit = defineEmits<{
   (event: 'toggle', id: string): void
   (event: 'increase', id: string): void
   (event: 'decrease', id: string): void
}>()
</script>

<template>
   <div class="cart__item item">
      <img class="item__img" :src="color.image" alt="Err">
      <div class="item__content">
         <h4 class="item__title">{{  color.title  }}</h4>
         <div class="item__price">{{  color.price  }} ₽</div>
      </div>
      <div class="item__controls">
         <button class="item__btn-toggle" @click="emit('decrease', color.id)">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
               <title>Vector</title>
               <path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4"
                  stroke-width="3.7333" stroke="#000" d="M3.556 16h24.889"></path>
            </svg>
         </button>
         <div class="item__amount">{{  color.amountInCart  }}</div>
         <button class="item__btn-toggle" @click="emit('increase', color.id)">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
               <title>plus</title>
               <path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="3.2"
                  stroke="#000" d="M16 6.667v18.667"></path>
               <path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="3.2"
                  stroke="#000" d="M6.667 16h18.667"></path>
            </svg>
         </button>
      </div>
      <button class="item__btn-close" @click="emit('toggle', color.id)">
         <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="1.8667"
               stroke="#000" d="M24 8l-16 16"></path>
            <path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="1.8667"
               stroke="#000" d="M8 8l16 16"></path>
         </svg>
      </button>
   </div>
</template>

<style scoped lang="scss">
.item {
   display: flex;
   align-items: center;
   padding: 1.2rem 1.2rem 1.2rem 0;
   border-top: 1px solid rgba(0, 0, 0, 0.1);

   &__img {
      width: 9.6rem;
      height: 9.6rem;
      margin-right: .8rem;
      object-fit: cover;
   }

   &__content {
      max-width: 16.5rem;
      margin-right: auto;
   }

   &__title {
      font-size: 1.6rem;
      line-height: 112%;
      font-weight: 300;
      color: var(--color-primary);
      letter-spacing: 0.02em;
      margin-bottom: 1.6rem;

      @media (max-width: 31.25em) {
         font-size: 1.4rem;
         text-align: center;
      }
   }

   &__price {
      font-size: 1.6rem;
      font-weight: 600;
      color: var(--color-primary);

      @media (max-width: 31.25em) {
         font-size: 1.4rem;
         text-align: center;
      }
   }

   &__controls {
      display: flex;
      align-items: center;
      gap: 2rem;

      @media (max-width: 31.25em) {
         gap: 1.5rem;
      }
   }

   &__amount {
      color: var(--color-primary);
      font-size: 1.6rem;
   }

   &__btn-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      width: 4rem;
      height: 2.4rem;
      background-color: #f2f2f2;
      border: none;
      border-radius: 4px;
      cursor: pointer;
   }

   &__btn-toggle svg {
      width: 1.4rem;
      height: 1.4rem;
   }

   &__btn-close {
      font-size: 2rem;
      margin-left: 4.2rem;
      color: var(--color-primary-light);
      background-color: transparent;
      border: none;
      cursor: pointer;

      @media (max-width: 31.25em) {
         margin-left: 2rem;
      }
   }

   &__btn-close svg {
      width: 2.3rem;
      height: 2.3rem;
      opacity: .2;
      transition: opacity .25s;
   }

   &__btn-close:hover svg {
      opacity: 1;
   }
}
</style>