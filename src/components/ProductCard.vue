<script setup lang="ts">
import { ColorItem } from '../types';

defineProps<{
   item: ColorItem
}>()
</script>

<template>
   <a href="#" class="card">
      <img class="card__image" :src="item.image" :alt="`${item.id} image`">
      <p class="card__text">{{  item.title  }}</p>
      <div class="card__bottom">
         <div class="card__price">{{  item.price  }} ₽</div>
         <button class="card__btn">+</button>
      </div>
   </a>
</template>

<style scoped lang="scss">
.card {
   border-bottom: 1px solid rgba(0, 0, 0, 0.1);

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
      display: inline-block;
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