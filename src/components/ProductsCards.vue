<script lang="ts" setup>
import { ref, computed, defineProps, defineEmits } from 'vue';
import { useShopStore, Category, Filter, Shop } from '@/store/modules/shop';
import { storeToRefs } from 'pinia';
import OneProduct from './OneProduct.vue';

//~~ store
const shopStore = useShopStore();
const { page, loading } = storeToRefs(shopStore);

//~~ Define props and emits
const emits = defineEmits<{
    (event: 'update:filter', filter: Filter): void;
}>();
const props = defineProps<{
    items: Shop[];
    categories: Category[];
    filter: Filter;
}>();

//~~ Refs
const itemsPerPage = ref<number>(12);
const name = ref(props.filter.name);
const category_uuid = ref(props.filter.category_uuid);

//~~ Computed
const pageCount = computed(() => Math.ceil(props.items.length / itemsPerPage.value));
const paginatedProducts = computed(() => {
    const start = (page.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return props.items.slice(start, end);
});

</script>
<template>
    <v-card class="pa-8">
        <VCardText>
            <VRow>
                <VCol cols="12" md="6">
                    <VTextField @click:append-inner="emits('update:filter', { name, category_uuid })" v-model="name"
                        label="Buscar productos" append-inner-icon="mdi-magnify" />
                </VCol>
                <VCol cols="12" md="6">
                    <VAutocomplete v-model="category_uuid" item-title="name" item-value="uuid"
                        @update:model-value="emits('update:filter', { name, category_uuid })" :items="categories"
                        label="Filtrar por categoría" clearable />
                </VCol>
            </VRow>
        </VCardText>
        <v-row>
            <v-col v-for="(product, i) in items" :key="i" cols="12" sm="6" md="4" lg="3" xl="2">
                <OneProduct :product="product" />
            </v-col>
        </v-row>
        <v-pagination v-model="page" color="secondary-200"
            @update:model-value="emits('update:filter', { name, category_uuid })" :length="pageCount" class="mt-4" />
    </v-card>
</template>
