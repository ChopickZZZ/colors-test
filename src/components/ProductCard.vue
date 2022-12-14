<script setup lang="ts">
import { ColorItem } from '../types';

defineProps<{
   item: ColorItem,
}>()

const emit = defineEmits<{
   (event: 'toggle', id: string): void
}>()
</script>

<template>
   <div class="card">
      <img class="card__image" :src="item.image" :alt="`${item.id} image`">
      <p class="card__text">{{ item.title }}</p>
      <div class="card__bottom">
         <div class="card__price">{{ item.price }} ₽</div>
         <button class="card__btn" @click="emit('toggle', item.id)" :class="{ active: item.amountInCart }">
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
   display: flex;
   flex-direction: column;
   border-bottom: 1px solid rgba(0, 0, 0, 0.1);
   cursor: pointer;

   &:nth-last-child(-n + 5) {
      border: none;
   }

   @media (max-width: 1670px) {
      &:nth-last-child(-n + 5) {
         border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }

      &:nth-last-child(-n + 3) {
         border: none;
      }
   }

   @media (max-width: 1400px) {
      &:nth-last-child(-n + 5) {
         border: none;
      }
   }

   @media (max-width: 1347px) {
      &:nth-last-child(-n + 5) {
         border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }

      &:nth-last-child(-n + 3) {
         border: none;
      }
   }

   @media (max-width: 568px) {
      &:nth-last-child(-n + 5) {
         border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }

      &:nth-last-child(-n + 1) {
         border: none;
      }
   }

   &__image {
      width: 100%;
      height: 100%;
      max-width: 27.8rem;
      max-height: 27.8rem;
      margin-bottom: 16px;
      object-fit: cover;
   }

   &__text {
      color: var(--color-primary);
      font-weight: 300;
      font-size: 1.6rem;
      letter-spacing: 0.02em;
      line-height: 112%;
      margin-bottom: 1.6rem;
      flex: 1;

      @media (max-width: 31.25em) {
         margin-bottom: 20px;
      }
   }

   &__bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.4rem;

      @media (max-width: 31.25em) {
         margin-bottom: 34px;
      }

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
      padding: .75rem 3.4rem;
      background-color: #f2f2f2;
      border-radius: .8rem;
      border: none;
      opacity: 0;
      transition: .3s ease;
      cursor: pointer;

      @media (max-width: 75em) {
         opacity: 1;
      }

      @media (min-width: 75em) {
         &:hover {
            background-color: var(--color-green);
         }
      }

      @media (max-width: 31.25em) {
         padding: .65rem 1.65rem;
      }
   }

   &__btn.active {
      background-color: var(--color-green);
   }

   &__btn svg {
      width: 1.7rem;
      height: 1.7rem;
   }

   &__btn:focus {
      outline: none;
   }

   &:hover &__btn {
      opacity: 1;
   }
}

.card:nth-last-child(-n + 5) .card__bottom {
   margin-bottom: 0;
}

@media (max-width: 1670px) {
   .card:nth-last-child(-n + 5) .card__bottom {
      margin-bottom: 1.4rem;
   }

   .card:nth-last-child(-n + 3) .card__bottom {
      margin-bottom: 0;
   }
}

@media (max-width: 1400px) {
   .card:nth-last-child(-n + 5) .card__bottom {
      margin-bottom: 0;
   }
}

@media (max-width: 1347px) {
   .card:nth-last-child(-n + 5) .card__bottom {
      margin-bottom: 1.4rem;
   }

   .card:nth-last-child(-n + 3) .card__bottom {
      margin-bottom: 0;
   }
}

@media (max-width: 568px) {
   .card:nth-last-child(-n + 5) .card__bottom {
      margin-bottom: 1.4rem;
   }

   .card:nth-last-child(-n + 1) .card__bottom {
      margin-bottom: 0;
   }
}
</style>