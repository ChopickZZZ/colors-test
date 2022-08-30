import { ColorItem, Filter } from './../types';
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
         filteredColors.value = [...colors.value]
      }
      catch (e) {
         console.error(e)
      }
   }

   const filter = (filters: Ref<Filter[]>) => {
      setTimeout(() => {
         filteredColors.value = colors.value.filter(color => filters.value.every(fil => {
            if (fil === 'avaliable') {
               return color.amount
            }
            return color[fil]
         }))
      }, 0)
   }

   return { colors, filteredColors, filter, fetchColors }
})