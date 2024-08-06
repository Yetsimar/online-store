import { defineStore } from 'pinia';
import { apiCall } from '../services/apiCall'; 
import { ref } from 'vue';


export const useCategoryStore = defineStore('category', () => {

const categories = ref([])

    const getAllCategories = async () => {
        try {
          const response = await apiCall({
            url: '/categories',
            method: 'GET'
          });
          categories.value = response?.data?.data
        } catch (err: any) {
          
        //   error.value = err.response?.data?.message || 'Login failed';
        console.log(err)
        } finally {
        }
      };
    return {
        getAllCategories,
        categories
    }
})