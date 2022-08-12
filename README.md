# Framework7 Vue with TypeScript

This is a starter template for Framework7 setup via Vite CLI.

Project structure is little bit different than original Framework7 CLI setup and is according to default Vue 3 setup. It's using pages from Framework7 Tabbed layout, which is default view for this starter template. Compiled files on build are located in root `dist` directory. `index.html` is also in the root directory.

## Features

- 🚀 [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite)

- 📱 [Framework7](https://framework7.io/) to develop mobile, desktop apps with native look & feel.

- ⚡️ [Capacitor](https://capacitorjs.com/) - A cross-platform native runtime for web apps

- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)

- 🎨 [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework

- 🌍 [I18n ready](./locales)

- 🔥 Use the [new `<script setup>` syntax](https://vuejs.org/api/sfc-script-setup.html)

- 🦾 TypeScript

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
**Builds project, copies to android and open in Android Studio**
```sh
npm run cap-android
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).