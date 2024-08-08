<script lang="ts" setup>
import { ref } from 'vue';
import { required, email, password, confirmPassword } from '@/utils/validators';
import { useAuthStore, UserRegister } from '@/store/modules/auth';


//~~ refs
const valid = ref(false);
const form = ref<UserRegister>({
    name: '',
    email: '',
    password: '',
    c_password: '',
});
const registerForm = ref<HTMLFormElement | null>(null);
const visible = ref(false);
const visible1 = ref(false);

// Usa el store de autenticación
const authStore = useAuthStore();
const { register } = authStore;

const submit = async () => {
    if (registerForm.value?.validate()) {
        try {
            await register(form.value);
        } catch (error) {
            console.error('Registration failed', error);
        }
    }
};
</script>

<template>
    <VContainer class="login-container">
        <VRow justify="center">
            <VCol cols="12" md="8" lg="6" xl="4">
                <VCard>
                    <VCardTitle class="my-4 text-center">
                        <span class="headline">Register</span>
                    </VCardTitle>
                    <VCardText>
                        <VForm ref="registerForm" v-model="valid" class="login-form">
                            <VRow>
                                <VCol cols="12">
                                    <VTextField v-model="form.name" label="Name" :rules="[required]" required />
                                </VCol>
                                <VCol cols="12">
                                    <VTextField v-model="form.email" label="Email" :rules="[email]" required
                                        type="email" />
                                </VCol>
                                <VCol cols="12">
                                    <VTextField v-model="form.password" label="Password"
                                        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                                        @click:append-inner="visible = !visible" :type="visible ? 'text' : 'password'"
                                        :rules="[password]" required />
                                </VCol>
                                <VCol cols="12">
                                    <VTextField v-model="form.c_password" label="Confirm Password"
                                        :append-inner-icon="visible1 ? 'mdi-eye-off' : 'mdi-eye'"
                                        @click:append-inner="visible1 = !visible1"
                                        :type="visible1 ? 'text' : 'password'"
                                        :rules="[confirmPassword(form.password, form.c_password)]" required />
                                </VCol>
                                <VCol cols="12">
                                    <VBtn block :disabled="!valid" color="secondary" variant="tonal" @click="submit">
                                        Register
                                    </VBtn>
                                </VCol>
                                <VCol cols="12">
                                    <div class="d-flex justify-center">
                                        ¿Ya tienes cuenta?
                                        <VBtn color="primary" class="mt-n2 ml-2" variant="text" :to="{ name: 'login' }">
                                            Iniciar sesión
                                        </VBtn>
                                    </div>
                                </VCol>
                            </VRow>
                        </VForm>
                    </VCardText>
                </VCard>
            </VCol>
        </VRow>
    </VContainer>
</template>

<style scoped>
.login-container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.headline {
    font-weight: bold;
    text-align: center;
    font-size: 2rem;
}

.login-form {
    max-width: 500px;
    margin: 0 auto;
}

@media (max-width: 600px) {
    .headline {
        font-size: 1.5rem;
    }

    .login-form {
        padding: 0 1rem;
    }
}
</style>
