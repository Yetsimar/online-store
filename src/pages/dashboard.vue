<script lang="ts" setup>
import { ref } from 'vue';
import layoutApp from '@/layout/layoutApp.vue';
import ProductsTable from '@/components/ProductsTable.vue';
import ProductsCards from '@/components/ProductsCards.vue';
import { useShopStore, Filter } from '@/store/modules/shop';
import { storeToRefs } from 'pinia';

//~~ Store
const shopStore = useShopStore();
const { getAllShop } = shopStore;
const { shops, categories } = storeToRefs(shopStore);

//~~ ref
const isTable = ref<boolean>(false);
const filter = ref<Filter>({
    name: null,
    category_uuid: null
});

//~~ Funciones
const sendRequest = async (filter: Filter) => {
    try {
        await getAllShop(filter);
    } catch (error) {
        console.error('Error fetching shops:', error);
    }
};


await getAllShop();

</script>

<template>
    <layoutApp>
        <template #content>
            <v-container>
                <v-row>
                    <v-col>
                        <p class="headline text-h5 text-md-h3 text-secondary">Nuestros Productos Exclusivos</p>
                        <p class="headline text-body-1">
                            Explora nuestra diversa gama de productos diseñados para satisfacer tus necesidades.
                        </p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <div class="text-end mb-2">
                            <VBtn icon="mdi-list-box" class="mr-2" @click="isTable = !isTable" color="secondary-200"
                                :variant="isTable ? 'tonal' : 'flat'"></VBtn>
                            <VBtn icon="mdi-table" @click="isTable = !isTable" color="secondary-200"
                                :variant="!isTable ? 'tonal' : 'flat'"></VBtn>
                        </div>
                        <ProductsTable v-if="isTable" :categories="categories" :filter="filter" :items="shops"
                            @update:filter="sendRequest($event)" />
                        <ProductsCards v-else :categories="categories" :filter="filter" :items="shops"
                            @update:filter="sendRequest($event)" />
                    </v-col>
                </v-row>
            </v-container>
        </template>
    </layoutApp>
</template>

<style lang="scss">
.v-table {
    background: rgb(var(--v-theme-surface-mixed-100));

    .v-table__wrapper {
        table {
            thead {
                tr {
                    background: rgb(var(--v-theme-surface-mixed-200)) !important;

                    th {
                        color: rgb(var(--v-theme-primary-400)) !important;
                        font-weight: bold !important;
                    }
                }
            }
        }
    }
}
</style>
