import { defineStore } from 'pinia';
import { apiCall } from '../services/apiCall';
import { ref } from 'vue';

// INTESFACE
export interface Shop { 
  name: string;
  resumen: string;
  sku: string;
  nmp: string;
  width: number;
  height: number;
  weight: number;
  lenght: number;
  depth: number;
  price: string;
  make_offer: boolean;
  user: {
    name: string;
    rating: number;
  };
  stock: number;
  status: string;
  image: {
    url: string;
  };
}

export interface Category {
  id: string;
  uuid: String;
  name: string;
}
export interface Filter  { name: string | null; category_uuid: string | null }

export const useShopStore = defineStore('shop', () => {
  // State
  const page = ref<number>(1);
  const shops = ref<Shop[]>([]);
  const categories = ref<Category[]>([]);
  const loading = ref<boolean>(false);
  
  const headers = ref([
    { align: 'start', key: 'name', sortable: false, title: 'Product Name' },
    { title: 'Resumeen', key: 'resumen' },
    { title: 'SKU', key: 'sku' },
    { title: 'NMP', key: 'nmp' },
    { title: 'Width', key: 'width' },
    { title: 'Height', key: 'height' },
    { title: 'Weight', key: 'weight' },
    { title: 'Lenght', key: 'lenght' },
    { title: 'Depth', key: 'depth' },
    { title: 'Price ($)', key: 'price' },
    { title: 'Make Offer', key: 'make_offer' },
    { title: 'User Name', key: 'user.name' },
    { title: 'User Rating', key: 'user.rating' },
    { title: 'Stock', key: 'stock' },
    { title: 'Status', key: 'status' },
    { title: 'Image', key: 'image.url' },
    { title: '', key: 'action' }
  ]);

  //~~ obtener todos los productos de la tienda
  const getAllShop = async (params: Filter) => {
    loading.value = true;
    try {
      const response = await apiCall({
        url: '/shop',
        method: 'GET',
        params: {
          page: page.value,
          ...params
        }
      });
      shops.value = response.data?.data || [];
      categories.value = response.data?.filters?.categories || [];
    } catch (err: any) {
      console.error('Error fetching shops:', err);
    } finally {
      loading.value = false;
    }
  };

  return {
    getAllShop,
    shops,
    page,
    categories,
    loading,
    headers
  };
});
