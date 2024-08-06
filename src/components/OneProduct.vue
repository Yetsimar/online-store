<script lang="ts" setup>
import { defineProps } from 'vue';
import { Shop } from '@/store/modules/shop';


//~~ Define props 
const props = defineProps<{
  product: Shop;
}>();

const defaultImageUrl = 'https://via.placeholder.com/300';
</script>

<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card
        v-bind="props"
        :class="isHovering ? 'v-card__shadow' : ''"
        color="surface-mixed-200"
      >
      

        <v-img
          :src="product.image?.url || defaultImageUrl"
          width="100%"
          height="200px"
          cover
        ></v-img>
        <v-card-title class="d-flex">
          <VBtn icon="mdi-cart" color="secondary" variant="tonal" class="mr-1" size="x-small"></VBtn> <p>{{ product.name }}</p>
        </v-card-title>
        <v-card-subtitle>{{ product.resumen }}</v-card-subtitle>
        <v-card-text>
          <p>Price: ${{ parseFloat(product.price).toFixed(2) }}</p>
          <p>Stock: {{ product.stock }}</p>
          <p>SKU: {{ product.sku }}</p>
          <p>Dimensions: {{ product.width }} x {{ product.height }} x {{ product.lenght }}</p>
          <p>Weight: {{ product.weight }} kg</p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn block size="small" color="secondary-200" variant="tonal">
            More Info
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-hover>
</template>

<style scoped>
/* Add any scoped styles here */
</style>
