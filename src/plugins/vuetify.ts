import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css';
// Define the theme configuration type
type VuetifyTheme = {
    dark: boolean
    colors: Record<string, string>
}

const darkTheme: VuetifyTheme = {
    dark: true,
    colors: {

        // /** SCSS DARK THEME PRIMARY COLORS */
        primary: '#0fa694',
        'primary-100': '#3ba294',
        'primary-200': '#59ada1',
        'primary-300': '#73b9ae',
        'primary-400': '#8bc5bb',
        'primary-500': '#a3d0c8',
   // /** SCSS DARK THEME SECONDARY COLORS */
        secondary: '#9bab1f',
        'secondary-100': '#afbf30',
        'secondary-200': '#c2d147',
        'secondary-300': '#cedb5e',
        'secondary-400': '#dae675',
        'secondary-500': '#f1faa7',
        /** SCSS DARK THEME SURFACE COLORS */
        surface: '#121414',
        'surface-100': '#282929',
        'surface-200': '#3f4040',
        'surface-300': '#575858',
        'surface-400': '#717272',
        'surface-500': '#8b8c8c',
        'surface-600': '#e3dede',
        /** SCSS DARK THEME MIXED SURFACE COLORS */
        'surface-mixed-100': '#161f1e',
        'surface-mixed-200': '#2b3433',
        'surface-mixed-300': '#424a49',
        'surface-mixed-400': '#5a6160',
        'surface-mixed-500': '#737979',
        'surface-mixed-600': '#8e9392',
    }
}

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    theme: {
        defaultTheme: 'dark',
        themes: {
            dark: darkTheme,
        },
    },
    defaults: {
        VAlert: {
            density: 'comfortable',
        },
        VAvatar: {
            variant: 'flat',
        },
        VBadge: {
            color: 'primary',
        },
        VBtn: {
            class:'text-capitalize',
            color: 'primary',
        },
        VChip: {
            elevation: 0,
        },
        VMenu: {
            VList: {
                density: 'compact',
            },
        },
        VPagination: {
            density: 'comfortable',
        },
        VTabs: {
            color: 'primary',
        },
        VTooltip: {
            location: 'top',
        },
        VList: {
            VListItem: {
                baseColor: 'white',
            },
        },
        VCheckbox: {
            color: 'primary',
            density: 'comfortable',
            hideDetails: 'auto',
        },
        VRadioGroup: {
            color: 'primary',
            density: 'comfortable',
            hideDetails: 'auto',
        },
        VRadio: {
            density: 'comfortable',
            hideDetails: 'auto',
        },
        VSelect: {
            variant: 'outlined',
            density: 'comfortable',
            color: 'secondary-400',
            hideDetails: 'auto',
        },
        VRangeSlider: {
            color: 'primary',
            density: 'comfortable',
            thumbLabel: true,
            hideDetails: 'auto',
        },
        VRating: {
            color: 'warning',
        },
        VProgressCircular: {
            color: 'primary',
        },
        VSlider: {
            color: 'primary',
            hideDetails: 'auto',
        },
        VTextField: {
            variant: 'outlined',
            density: 'comfortable',
            color: 'secondary-400',
            hideDetails: 'auto',
        },
        VAutocomplete: {
            variant: 'outlined',
            density: 'comfortable',
            color: 'primary',
            hideDetails: 'auto',
        },
        VCombobox: {
            variant: 'outlined',
            density: 'comfortable',
            color: 'primary',
            hideDetails: 'auto',
        },
        VFileInput: {
            variant: 'outlined',
            density: 'comfortable',
            color: 'primary',
            hideDetails: 'auto',
        },
        VTextarea: {
            variant: 'outlined',
            density: 'comfortable',
            color: 'primary',
            hideDetails: 'auto',
        },
        VSwitch: {
            color: 'primary',
            hideDetails: 'auto',
        },
    }
})

export default vuetify
