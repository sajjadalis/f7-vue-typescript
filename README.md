# Framework7 Vue with TypeScript

This is a starter template for Framework7 setup via Vite CLI.

Project structure is little bit different than original Framework7 CLI setup and is according to default Vue 3 setup. It's using pages from Framework7 Tabbed layout, which is default view for this starter template. Compiled files on build are located in root `dist` directory. `index.html` is also in the root directory.

## Features

- 🚀 [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite)

- 📱 [Framework7](https://framework7.io/) to develop mobile, desktop apps with native look & feel.

- ⚡️ [Capacitor](https://capacitorjs.com/) - A cross-platform native runtime for web apps

- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)

- 🎨 [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework

- 🌍 [I18n ready](./src/locale)

- 🔥 Use the [new `<script setup>` syntax](https://vuejs.org/api/sfc-script-setup.html)

- 💪 TypeScript

![Demo Screenshot](https://i.imgur.com/zCWa57C.png)

## Project Setup

**Install npm packages**
```sh
npm install 
```
**Compile and Hot-Reload for Development**
```sh
npm run dev
```
**Type-Check, Compile and Minify for Production**
```sh
npm run build
```
**Builds project, sync capacitor, copies to android**
```sh
npm run cap-android
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customization
See 
- [Framework7 Vue Documentation](https://framework7.io/vue/).
- [Vue Documentation](https://vuejs.org/guide/introduction.html).
- [Vite Configuration Reference](https://vitejs.dev/config/).