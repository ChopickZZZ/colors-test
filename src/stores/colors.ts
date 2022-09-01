import { ColorItem, Filter, Condition } from './../types';
import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'

export const useColorStore = defineStore('colors', () => {

   const colors: Ref<ColorItem[]> = ref([])
   let filteredColors: Ref<ColorItem[]> = ref([])

   const fetchColors = async () => {
      try {
         const res = await fetch('https://colors-ec420-default-rtdb.europe-west1.firebasedatabase.app/colors.json')
         const data: { value: ColorItem } = await res.json()
         Object.values(data).forEach((item) => colors.value.push(item))

         if (localStorage.getItem('cart') !== null) {
            const cartColors = JSON.parse(localStorage.getItem('cart')!)
            colors.value.forEach(color1 => {
               cartColors.forEach((color2: ColorItem) => {
                  if (color1.id === color2.id) {
                     color1.amountInCart = color2.amountInCart
                  }
               })
            })
         }

         filteredColors.value = [...colors.value]
      }
      catch (e) {
         console.error(e)
      }
   }

   const filterColors = (filters: Ref<Filter[]>) => {
      setTimeout(() => {
         filteredColors.value = colors.value.filter(color => filters.value.every(fil => {
            if (fil === 'avaliable') {
               return color.amount
            }
            return color[fil]
         }))
      }, 0)
   }

   const sortColors = (condition: Ref<Condition>) => {
      switch (condition.value) {
         case 'expensive': {
            filteredColors.value = filteredColors.value.sort((color1, color2) => color2.price - color1.price)
            break
         }
         case 'cheap': {
            filteredColors.value = filteredColors.value.sort((color1, color2) => color1.price - color2.price)
            break
         }
         case 'popular': {
            filteredColors.value = filteredColors.value.sort((color1, color2) => color2.soldTimes - color1.soldTimes)
            break
         }
         case 'new': {
            filteredColors.value = filteredColors.value.sort((color1, color2) =>
               Date.parse(color2.createdAt) - Date.parse(color1.createdAt))
            break
         }
      }
   }

   return { colors, filteredColors, filterColors, fetchColors, sortColors }
})