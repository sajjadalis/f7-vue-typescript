# [Framework7 Vue TypeScript](https://f7-vue-typescript.vercel.app/)

This is a starter template for Framework7 created via Vite Cli.

[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://github.com/sajjadalis/f7-vue-typescript/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-purple.svg)](http://makeapullrequest.com) 
[![Framework7](https://img.shields.io/badge/Framework7-333333?logo=framework7)](https://framework7.io/)
[![Capacitorjs](https://img.shields.io/badge/Capacitor-333333?logo=capacitor)](https://capacitorjs.com/)
[![Vue3](https://img.shields.io/badge/Vue-333333?logo=vue.js)](https://vuejs.org/)
[![Play on StackBlitz](https://img.shields.io/badge/Play%20on-Stackblitz-1B8CFD?logo=stackblitz)](https://stackblitz.com/github/sajjadalis/f7-vue-typescript)

The project structure diverges somewhat from the conventional Framework7 CLI setup, aligning itself with the standard Vue 3 structure. It's using pages from the Framework7 Tabbed layout, which acts as the default view for this starter template. Upon building, the compiled files can be found in the main `dist` directory. Furthermore, the `index.html` file resides in the root directory of the project.

[👊 Check out the live demo](https://f7-vue-typescript.vercel.app/). It looks even better in the mobile view of your browser.

[⚡️ Play on StackBlitz](https://stackblitz.com/github/sajjadalis/f7-vue-typescript)

## Features

- 🚀 [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite)
  
- 📱 [Framework7](https://framework7.io/) to develop mobile, desktop apps with native look & feel.
  
- 🔋 [Capacitor](https://capacitorjs.com/) - A cross-platform native runtime for web apps
  
- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)
  
- 🎨 [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine
  
- 😃 [Use icons from any icon sets with classes](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🌍 [I18n ready](./src/locale)

- 🔥 Use the [new `<script setup>` syntax](https://vuejs.org/api/sfc-script-setup.html)

- 💪 TypeScript

## UnoCSS

UnoCSS presets are managed through the `uno.config.ts` file. The default setup employs the Wind Preset, which closely resembles Tailwind and Windi CSS. Additionally, the default configuration includes presets for Material Icons, Tabler Icons, and Carbon Icons for handling icons. This configuration serves as the initial setup, but you can expand its capabilities by incorporating additional [presets](https://github.com/unocss/unocss#presets).

You can use it like this for example.

```html
<f7-block strong class="bg-blue-500 text-white mt-3">
    <h2 class="text-xl font-bold mb-3">UnoCSS Classes & Icons</h2>
    <p>This is an example of tabs-layout application.</p>
</f7-block>

<!-- Usage with UnoCSS Attributify preset & custom font via WebFonts preset -->
<h2 text="xl blue-500" font="bold lobster">Lobster Font Heading</h2>

<!-- An orange alarm from Material Design Icons -->
<div class="i-mdi-alarm text-orange-400 hover:text-teal-400" />
<!-- Sun in light mode, Moon in dark mode, from Carbon -->
<button class="i-carbon-sun dark:i-carbon-moon" />
<!-- Bell icon from Carbon -->
<i class="i-tabler-bell" />
```

## i18n Translation Ready

The project utilizes the official [vue-i18n translation plugin](https://vue-i18n.intlify.dev/). To add a new language, simply insert a JSON file into the `./src/locale/lang` directory. For instance, you can name it `zh-CN.json`. Afterward, include this new file in the `./src/locale/index.ts` file.

```js
import zhCN from "./lang/zh-CN.json";

const i18n = createI18n<[MessageSchema], "en-US" | "zh-CN">({
	locale: "en-US",
	fallbackLocale: "en-US",
	messages: {
        'en-US': enUS,
        'zh-CN': zhCN,
	},
});
```
The language switcher drop-down select can be found in the `./src/pages/home.vue` file.

## Project Setup

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/sajjadalis/f7-vue-typescript/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```sh
npx degit sajjadalis/f7-vue-typescript f7-vue-typescript
cd f7-vue-typescript
npm install
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the author name in `LICENSE`
- [ ] Change the `appId` and `appName` in `capacitor.config.json`
- [ ] Change the `name` and `id` for f7params in `App.vue`

The easiest way is to use Search (Ctrl+Shift+F) feature in VS Code. Search for `com.example.app` and replace with `com.yourdomain.app`. Similarly search for `F7-Vue Typescript` and replace with `Your App Name`.

And, enjoy :)

## Usage

### Development

```sh
npm run dev
```

### Build

**To build, run**

```sh
npm run build
```

**To builds, sync capacitor & copies to Android**

```sh
npm run android
```

**To builds, sync capacitor & copies to iOS**

```sh
npm run ios
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) + [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss).

## Credits & Customization
- [Framework7 Vue Documentation](https://framework7.io/vue/).
- [Vue Documentation](https://vuejs.org/guide/introduction.html).
- [Capacitor Documentation](https://capacitorjs.com/docs).
- [UnoCSS Guide](https://unocss.dev/guide/).
- [Vite Configuration Reference](https://vitejs.dev/config/).