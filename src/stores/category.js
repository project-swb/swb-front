import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import axios from 'axios'

const BASE_URL = `http://localhost:8080/api/v1`
const REQUEST_URL = `${BASE_URL}/categories`

export const useCategoryStore = defineStore('category', () => {
  
    const categoryList = ref([])
    // 모든 카테고리
    const getCategoryList = function (){
    axios.get(REQUEST_URL)
        .then((response) => {
        console.log(response)
        categoryList.value = response.data
        })
    }

  return { categoryList, getCategoryList }
})