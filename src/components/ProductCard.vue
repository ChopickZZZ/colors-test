<script setup lang="ts">
import { ColorItem } from '../types';

defineProps<{
   item: ColorItem
}>()

const emit = defineEmits<{
   (event: 'toggle', id: string): void
}>()
</script>

<template>
   <div class="card">
      <img class="card__image" :src="item.image" :alt="`${item.id} image`">
      <p class="card__text">{{  item.title  }}</p>
      <div class="card__bottom">
         <div class="card__price">{{  item.price  }} ₽</div>
         <button class="card__btn" @click="emit('toggle', item.id)">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" v-if="!item.amountInCart">
               <path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="3.2"
                  stroke="#000" d="M16 6.667v18.667"></path>
               <path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="3.2"
                  stroke="#000" d="M6.667 16h18.667"></path>
            </svg>
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" v-else>
               <path
                  d="M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z" />
            </svg>
         </button>
      </div>
   </div>
</template>

<style scoped lang="scss">
.card {
   border-bottom: 1px solid rgba(0, 0, 0, 0.1);
   cursor: pointer;

   &__image {
      width: 100%;
      max-width: 27.8rem;
      max-height: 27.8rem;
      margin-bottom: 1.6rem;
      object-fit: cover;
   }

   &__text {
      color: var(--color-primary);
      font-weight: 300;
      font-size: 1.6rem;
      letter-spacing: 0.02em;
      line-height: 112%;
      margin-bottom: 1.6rem;
   }

   &__bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
   }

   &__price {
      font-weight: 600;
      font-size: 1.6rem;
      color: var(--color-primary);
   }

   &__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 1.6rem;
      padding: .6rem 3.4rem;
      background-color: #f2f2f2;
      border-radius: .8rem;
      border: none;
      opacity: 0;
      transition: .3s ease;
      margin-bottom: 1.4rem;
      cursor: pointer;
   }

   &__btn svg {
      width: 1.7rem;
      height: 1.7rem;
   }

   &__btn:hover {
      background-color: var(--color-green);
   }

   &__btn:focus {
      outline: none;
   }

   &:hover &__btn {
      opacity: 1;
   }
}
</style>