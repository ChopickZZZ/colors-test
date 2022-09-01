<script setup lang="ts">
import ProductCard from './ProductCard.vue';
import { useColorStore } from '../stores/colors';
import { useCartStore } from '../stores/cart'
import { ref, Ref, computed } from '@vue/reactivity';
import { Filter, Condition } from '../types';

const colorStore = useColorStore()
const cartStore = useCartStore()
await colorStore.fetchColors()
const colors = computed(() => colorStore.filteredColors)

const isDropdownActive = ref(false)
const filters: Ref<Filter[]> = ref([])
const condition: Ref<Condition> = ref('expensive')

const filter = () => colorStore.filterColors(filters)
const sort = () => {
   setTimeout(() => {
      colorStore.sortColors(condition)
      dropdownToggle()
   })
}

const dropdownToggle = () => {
   isDropdownActive.value = !isDropdownActive.value
   if (document.body.style.overflow === 'hidden') {
      document.body.style.overflow = 'auto'
   }
   else {
      document.body.style.overflow = 'hidden'
   }
}
const toggleItem = (id: string) => cartStore.itemToggle(id)

</script>

<template>
   <div class="container">
      <section class="products">
         <div class="filters" @click="filter">
            <div class="filters__item">
               <input class="filters__checkbox" v-model="filters" value="new" type="checkbox" name="filter" id="new">
               <label class="filters__label" for="new">Новинки</label>
            </div>
            <div class="filters__item">
               <input class="filters__checkbox" v-model="filters" value="avaliable" type="checkbox" name="filter"
                  id="avaliable">
               <label class="filters__label" for="avaliable">Есть в наличие</label>
            </div>
            <div class="filters__item">
               <input class="filters__checkbox" v-model="filters" value="contract" type="checkbox" name="filter"
                  id="contract">
               <label class="filters__label" for="contract">Контрактные</label>
            </div>
            <div class="filters__item">
               <input class="filters__checkbox" v-model="filters" value="exclusive" type="checkbox" name="filter"
                  id="exclusive">
               <label class="filters__label" for="exclusive">Эксклюзивные</label>
            </div>
            <div class="filters__item">
               <input class="filters__checkbox" v-model="filters" value="sale" type="checkbox" name="filter" id="sale">
               <label class="filters__label" for="sale">Распродажа</label>
            </div>
         </div>
         <div class="colors">
            <div class="colors__top">
               <div class="colors__amount">{{ colors.length }} товаров</div>
               <div class="colors__dropdown dropdown">
                  <div class="dropdown__select-box">
                     <div class="dropdown__options-container" v-if="isDropdownActive">
                        <Teleport to="body">
                           <div @click="dropdownToggle" class="dropdown__backdrop"></div>
                        </Teleport>
                        <div class="dropdown__option" @click="sort">
                           <input class="dropdown__radio" v-model="condition" value="expensive" id="sort-expensive"
                              type="radio" name="filter">
                           <label class="dropdown__label" @click.stop for="sort-expensive">Сначала дорогие</label>
                        </div>
                        <div class="dropdown__option" @click="sort">
                           <input class="dropdown__radio" v-model="condition" value="cheap" id="sort-cheap" type="radio"
                              name="filter">
                           <label class="dropdown__label" @click.stop for="sort-cheap">Сначала недорогие</label>
                        </div>
                        <div class="dropdown__option" @click="sort">
                           <input class="dropdown__radio" v-model="condition" value="popular" id="sort-popular"
                              type="radio" name="filter">
                           <label class="dropdown__label" @click.stop for="sort-popular">Сначала популярные</label>
                        </div>
                        <div class="dropdown__option" @click="sort">
                           <input class="dropdown__radio" v-model="condition" value="new" id="sort-new" type="radio"
                              name="filter">
                           <label class="dropdown__label" @click.stop for="sort-new">Сначала новые</label>
                        </div>
                     </div>
                     <button class="dropdown__selected" @click="dropdownToggle">
                        Сначала дорогие
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                           <path d="M16 24l13.856-18h-27.713l13.856 18z"></path>
                        </svg>
                     </button>
                  </div>
               </div>
            </div>
            <div class="colors__products">
               <ProductCard v-for="color in colors" :key="color.id" :item="color" @toggle="toggleItem" />
            </div>
         </div>
      </section>
   </div>
</template>

<style scoped lang="scss">
.dropdown {
   &__backdrop {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.3);
      overflow: hidden;
      cursor: pointer;
   }

   &__select-box {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 28rem;
      font-size: 1.2rem;
      font-weight: 500;
      letter-spacing: 0.06em;
      color: var(--primary-color);
      z-index: 10;
   }

   &__options-container {
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
      width: 100%;
      transition: .3s ease;
      overflow: hidden;
      order: 1;
   }

   &__option {
      padding: 1.5rem 2.4rem;
      transition: .3s ease;
      cursor: pointer;
   }

   &__selected {
      display: inline-flex;
      align-items: center;
      justify-content: flex-end;
      background-color: #fff;
      border: none;
      outline: none;
      cursor: pointer;
   }

   &__selected svg {
      width: 8px;
      height: 6px;
      margin-left: 5px;
   }

   &__option:hover {
      background-color: var(--color-green);
   }

   &__radio {
      display: none;
   }

   &__label {
      display: block;
      width: 100%;
      height: 100%;
      cursor: pointer;
   }
}

.products {
   position: relative;
   display: flex;
   padding: 7.2rem 0 14.7rem 0;
}

.filters {
   flex: 0 0 calc(303 / 1790 * 100%);
   margin-right: 2rem;

   &__item {
      display: flex;
      align-items: center;
   }

   &__item:not(:last-child) {
      margin-bottom: 2rem;

      @media (max-width: 56.25em) {
         margin-bottom: 5rem;
      }
   }

   &__checkbox {
      position: relative;
      visibility: hidden;
   }

   &__checkbox+&__label {
      position: relative;
      padding-left: 4.8rem;
      cursor: pointer;
   }

   &__checkbox+&__label::before,
   &__checkbox+&__label::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: .2s linear;
   }

   &__checkbox+&__label::before {
      left: 0;
      width: 3.6rem;
      height: 2.2rem;
      border-radius: 4rem;
      padding: 0 .8rem;
      background-color: #f2f2f2;
   }

   &__checkbox+&__label::after {
      left: .8rem;
      width: .8rem;
      height: .8rem;
      border-radius: 50%;
      background-color: var(--color-primary);
   }

   &__checkbox:checked+&__label::before {
      background-color: var(--color-green);
   }

   &__checkbox:checked+&__label::after {
      left: 2rem;
   }

   &__label {
      font-size: 1.2rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
   }
}

.colors {
   flex: 1;

   &__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 4.4rem;
   }

   &__amount {
      font-size: 1.2rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.06em;
   }

   &__products {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
      column-gap: 2.4rem;
      row-gap: 1.6rem;

      @media (max-width: 68.125em) {
         grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
      }

      @media (max-width: 66.25em) {
         grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      }
   }
}

.dropdown {
   position: relative;

   &__category {
      font-size: 1.2rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.06em;
   }

   &__btn {
      font-size: 1.2rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      background-color: transparent;
      border: none;
      margin-right: .5rem;
      cursor: pointer;
   }

   &__triangle {}

   &__backdrop {}

   &__list {
      position: absolute;
      top: 0;
      right: 0;
      list-style: none;
      min-width: 28rem;
   }

   &__item {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 1.7rem 2.4rem;
      font-size: 1.2rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      background-color: #fff;
      border: none;
      transition: .3s ease;
      cursor: pointer;
   }

   &__item:hover {
      background-color: var(--color-green);
   }
}
</style>