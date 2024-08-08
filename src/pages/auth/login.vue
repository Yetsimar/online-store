<script lang="ts" setup>
import { ref } from 'vue';
import { email, password } from '@/utils/validators';
import { useAuthStore } from '@/store/modules/auth';

//~~ Store
const authStore = useAuthStore();
const { login } = authStore;

//~~ Ref
const valid = ref(false);
const form = ref<{ email: string; password: string }>({
    email: '',
    password: '',
});
const loginForm = ref<HTMLFormElement | null>(null);
const visible = ref(false);


// ~~ funciones
const submit = async () => {
    if (loginForm.value?.validate()) {
        try {
            //~~ Llama a la acción de inicio de sesión del store
            await login(form.value.email, form.value.password);
        } catch (error) {
            console.error('Login failed', error);
        }
    }
};
</script>

<template>
    <VContainer class="login-container">
        <VRow justify="center">
            <VCol cols="12" md="8" lg="6" xl="4">
                <VCard>
                    <VCardTitle class="text-center">
                        <span class="headline">Login</span>
                    </VCardTitle>
                    <VCardText>
                        <VForm ref="loginForm" v-model="valid" class="login-form">
                            <VRow>
                                <VCol cols="12">
                                    <VTextField
                                        v-model="form.email"
                                        label="Email"
                                        :rules="[email]"
                                        required
                                        type="email"
                                    />
                                </VCol>
                                <VCol cols="12">
                                    <VTextField
                                        v-model="form.password"
                                        label="Password"
                                        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                                        @click:append-inner="visible = !visible"
                                        :type="visible ? 'text' : 'password'"
                                        :rules="[password]"
                                        required
                                    />
                                </VCol>
                                <VCol cols="12">
                                    <VBtn
                                        block
                                        :disabled="!valid"
                                        color="secondary"
                                        variant="tonal"
                                        @click="submit"
                                    >
                                        Login
                                    </VBtn>
                                </VCol>
                                <VCol cols="12">
                                    <div class="d-flex justify-center">
                                        ¿No tienes cuenta?
                                        <VBtn
                                            color="primary"
                                            class="mt-n2 ml-2"
                                            variant="text"
                                            :to="{ name: 'register' }"
                                        >
                                            Registrarse
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
