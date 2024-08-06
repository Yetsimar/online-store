import { toast, ToastOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const toastOptions: ToastOptions = {
    position: 'top-center',
    pauseOnHover: true,
    theme: 'dark',
    transition: 'zoom',
};

export const Success = (text: string) =>
    toast(text, {
        ...toastOptions,
        type: 'success',
    });

export const Error = (text: string) =>
    toast(text, {
        ...toastOptions,
        type: 'error',
    });

export const ErrorToast = (text: string) =>
    toast(text, {
        ...toastOptions,
        type: 'error',
    });

export const Warning = (text: string) =>
    toast(text, {
        ...toastOptions,
        type: 'warning',
    });

export const Info = (text: string) =>
    toast(text, {
        ...toastOptions,
        type: 'info',
    });
