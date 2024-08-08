<script lang="ts" setup>
import { ref, computed, defineProps, defineEmits } from 'vue';
import { useShopStore, Filter, Category } from '@/store/modules/shop';
import { storeToRefs } from 'pinia';


//~~ store
const shopStore = useShopStore();
const { page, loading, headers } = storeToRefs(shopStore);

//~~ Define props and emits
const emits = defineEmits<{ (event: 'update:filter', filter: Filter): void }>();
const props = defineProps<{
    items: Array<any>;
    categories: Array<Category>;
    filter: Filter;
}>();

//~~ ref
const itemsPerPage = ref<number>(10);
const name = ref(props.filter.name);
const category_uuid = ref(props.filter.category_uuid);
//~~ computed
const pageCount = computed(() => Math.ceil(props.items.length / itemsPerPage.value));
;

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
        <v-data-table :loading="loading" v-model:page="page" :headers="headers" :items="items"
            :items-per-page="itemsPerPage">
            <template #item.image.url="{ item }">
                <v-img :src="item?.image?.url" aspect-ratio="1.7" width="100%"></v-img>

            </template>
            <template #item.action="{ item }">
               <VBtn icon="mdi-cart" color="secondary" variant="tonal" size="small"></VBtn>

            </template>
            
            <template v-slot:bottom>
                <div class="text-center pt-2">
                    <v-pagination color="secondary-200" v-model="page"
                        @update:model-value="emits('update:filter', { name, category_uuid })"
                        :length="pageCount"></v-pagination>
                </div>
            </template>
        </v-data-table>
    </v-card>
</template>