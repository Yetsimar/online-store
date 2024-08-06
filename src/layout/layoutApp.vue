<script setup>
import { RouterView } from "vue-router";
import { ref } from "vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import { useAuthStore } from "@/store/modules/auth";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const { checkAuth } = authStore;
const porps = defineProps({});

checkAuth()
</script>

<template>
  <VApp class="">
    <LayoutHeader class="mx-auto" />
    <VMain>
      <VContainer fluid style="height: 100%">
        <slot name="content" />
      </VContainer>
    </VMain>
  </VApp>
</template>
