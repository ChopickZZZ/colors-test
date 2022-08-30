<script setup lang="ts">
import { Filter } from '../types';

defineProps<{
   value: string,
   modelValue: Filter[]
}>()

const emit = defineEmits<{
   (event: 'modelUpdate', value: string): void
}>()
</script>

<template>
   <div class="filters__item">
      <input class="filters__checkbox" @click="emit('modelUpdate', value)" :modelValue="modelValue" :value="value"
         type="checkbox" name="filter" :id="value" v-bind="$attrs">
      <label class="filters__label" :for="value">
         <slot />
      </label>
   </div>
</template>

<style scoped lang="scss">
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
</style>