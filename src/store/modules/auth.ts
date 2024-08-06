import { defineStore } from 'pinia';
import { ref } from 'vue';
import { apiCall } from '../services/apiCall';
import { useRouter } from 'vue-router';

//~~ INTERSACES
export interface User {
    id: number;
    email: string;
    name: string;
}

export interface UserRegister {
    email: string;
    name: string;
    c_password: string;
    password: string;
}
//~~ STORE AUTH
export const useAuthStore = defineStore('auth', () => {
    // State
    const user = ref<User | null>(null);
    const token = ref<string | null>(localStorage.getItem('token'));
    const isAuthenticated = ref<boolean>(!!token.value);
    const loading = ref<boolean>(false);    
    const { push } = useRouter();

    // Actions
    const login = async (email: string, password: string) => {
        loading.value = true;
        try {
            const response = await apiCall({
                url: '/login',
                method: 'POST',
                data: { email, password },
                message: 'Sesión iniciada'
            });

            const { user: userData, token: userToken } = response.data?.data || {};
            user.value = userData;
            token.value = userToken;
            isAuthenticated.value = true;
            localStorage.setItem('token', userToken as string);
            push('/dashboard');

        } catch (err: any) {
            console.error('Error during login:', err);
            // Puedes manejar el error aquí si lo deseas
        } finally {
            loading.value = false;
        }
    };

    const logout = async () => {
        loading.value = true;
        try {
            await apiCall({
                url: '/logout',
                method: 'POST',
                data: {},
            });
            user.value = null;
            token.value = null;
            isAuthenticated.value = false;
            localStorage.removeItem('token');
            push('/login');
        } catch (err: any) {
            console.error('Error during logout:', err);
            // Puedes manejar el error aquí si lo deseas
        } finally {
            loading.value = false;
        }
    };

    const register = async (form: UserRegister) => {
        loading.value = true;
        try {
            await apiCall({
                url: '/register',
                method: 'POST',
                data: form,
                message: 'Registrado correctamente'
            });
            push('/login');
        } catch (err: any) {
            console.error('Error during registration:', err);
            // Puedes manejar el error aquí si lo deseas
        } finally {
            loading.value = false;
        }
    };

    const checkAuth = async () => {
        if (token.value) {
            try {
                const response = await apiCall({
                    url: '/me',
                    method: 'GET',
                    tokenQ: token.value
                });
                user.value = response.data?.data || null;
                isAuthenticated.value = true;
            } catch (err: any) {
                console.error('Error during authentication check:', err);
                // Puedes manejar el error aquí si lo deseas
                // logout();
            }
        }
    };

    return {
        user,
        token,
        isAuthenticated,
        loading,
        login,
        logout,
        checkAuth,
        register
    };
});
