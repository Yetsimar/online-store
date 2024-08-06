<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
    <VOverlay
      v-model="loading"
      persistent
      :opacity="100"
      class="align-center justify-center"
      scrim="#00000000"
    >
      <VCard class="border">
        <VContainer class="d-flex flex-column align-center justify-space-center">
          <VCardText>
            <VProgressCircular
              indeterminate
              size="64"
              color="secondary-200"
            ></VProgressCircular>
          </VCardText>

          <VCardTitle class="text-h5">Please wait...</VCardTitle>
        </VContainer>
      </VCard>
    </VOverlay>
  </v-app>
</template>

<script lang="ts" setup>
import { loading } from '@/store/services/apiCall';

</script>

<style>
</style>