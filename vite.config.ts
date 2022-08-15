import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'
import presetWebFonts from '@unocss/preset-web-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    Unocss({
      presets: [
        // https://github.com/unocss/unocss/tree/main/packages/preset-attributify
        presetAttributify({ /* preset options */}),
        // https://github.com/unocss/unocss/tree/main/packages/preset-uno
        presetUno(), 
        // https://github.com/unocss/unocss/tree/main/packages/preset-icons/
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
        }),
        presetWebFonts({
          provider: 'google', // default provider
          fonts: {
            // these will extend the default theme
            sans: 'Roboto',
            mono: ['Fira Code', 'Fira Mono:400,700'],
            // custom ones
            lobster: 'Lobster',
            inter: 'Inter',
          },
        }),
        // ...custom presets
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
