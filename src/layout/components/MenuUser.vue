<script setup>
import { useAuthStore } from "@/store/modules/auth";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter();
const storeAuth = useAuthStore();
const { logout } = useAuthStore();
const { user } = storeToRefs(storeAuth);

const logoutApp = async () => {
  await logout();
};
</script>

<template>
  <div class="d-flex align-center">

    <VAvatar style="cursor: pointer" color="secondary-300" variant="tonal">

      <span>{{ user?.name?.substr(0, 1)
        }}</span>
      <VMenu activator="parent" max-width="300" location="bottom end" offset="14px">
        <VCard min-width="220">
          <VList class="v-list_custom">
            <VListItem>
              <template #prepend>
                <VListItemAction start>
                  <VAvatar color="secondary-300" variant="tonal">

                    <span>{{ user?.name?.substr(0, 1)
                      }}</span>
                  </VAvatar>
                </VListItemAction>
              </template>
              <template #title>
                {{ `${user?.name}` ?? "Name" }}
              </template>
              <template #subtitle>
                {{ user?.email }}
              </template>
            </VListItem>
            <VDivider class="my-2" />

            <VListItem link @click="logoutApp()">
              <template #prepend>
                <VIcon class="me-2" icon="mdi-logout-variant" size="22" />
              </template>

              <VListItemTitle>Logout</VListItemTitle>
            </VListItem>
          </VList>
        </VCard>
      </VMenu>
    </VAvatar>
  </div>
</template>
