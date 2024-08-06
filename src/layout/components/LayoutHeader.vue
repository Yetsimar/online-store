<script setup lang="ts">
import { useDisplay } from "vuetify";
import { ref } from "vue";
import logo from "/vite.svg";
import MenuUser from "./MenuUser.vue";
</script>

<template>
    <VAppBar elevation="0" class=" d-flex justify-space-between">
        <div style="
          max-width: 75px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 2rem;
        ">
            <img :src="logo" alt="Vite" style="object-fit: cover; max-width: 100%; height: auto" />
        </div>
        <div>
            <MenuUser />
        </div>
    </VAppBar>
</template>
<style>
.v-toolbar__content {
    justify-content: space-between;
}
</style>
