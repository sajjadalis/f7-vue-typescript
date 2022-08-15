# Framework7 Vue with TypeScript

This is a starter template for Framework7 setup via Vite CLI.

Project structure is little bit different than original Framework7 CLI setup and is according to default Vue 3 setup. It's using pages from Framework7 Tabbed layout, which is default view for this starter template. Compiled files on build are located in root `dist` directory. `index.html` is also in the root directory.

## Features

- 🚀 [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite)

- 📱 [Framework7](https://framework7.io/) to develop mobile, desktop apps with native look & feel.

- ⚡️ [Capacitor](https://capacitorjs.com/) - A cross-platform native runtime for web apps

- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine

- 😃 [Use icons from any icon sets with classes](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🌍 [I18n ready](./src/locale)

- 🔥 Use the [new `<script setup>` syntax](https://vuejs.org/api/sfc-script-setup.html)

- 💪 TypeScript

## UnoCSS

The presets for UnoCSS are configured inside `vite.config.ts`. By default, It's using Preset Wind which is equivalent to Tailwind / Windi CSS. For Icons, it's using Metrial Icons, Tabler Icons & Carbon Icons presets. This is the default configuration. You can extend it by providing more [presets](https://github.com/unocss/unocss#presets).

```ts
Unocss({
      presets: [
        presetAttributify({ /* preset options */}),
        presetUno(), 
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
        }),
        presetWebFonts({
          provider: 'google',
          fonts: {
            sans: 'Roboto',
            mono: ['Fira Code', 'Fira Mono:400,700'],
            // custom google fonts
            lobster: 'Lobster',
            inter: 'Inter',
          },
        }),
        // ...more custom presets
      ]
    })
```

You can use it like this in `home.vue` for example.

```html
<f7-block strong class="bg-blue-500 text-white mt-3">
    <h2 class="text-xl font-bold mb-3">UnoCSS Classes & Icons</h2>
    <p>This is an example of tabs-layout application. The main point of such tabbed layout is that each tab contains independent view with its own routing and navigation.</p>
</f7-block>

<!-- An orange alarm from Material Design Icons -->
<div class="i-mdi-alarm text-orange-400 hover:text-teal-400" />
<!-- Sun in light mode, Moon in dark mode, from Carbon -->
<button class="i-carbon-sun dark:i-carbon-moon" />
<!-- Bell icon from Carbon -->
<i class="i-tabler-bell" />
```

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
- [ ] Change the favicon in `public`

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
npm run cap-android
```

**To builds, sync capacitor & copies to iOS**

```sh
npm run cap-ios
```

![Demo Screenshot](https://i.imgur.com/qMQIfUc.png)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) + [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss).

## Customization
See 
- [Framework7 Vue Documentation](https://framework7.io/vue/).
- [Vue Documentation](https://vuejs.org/guide/introduction.html).
- [UnoCSS](https://github.com/unocss/unocss).
- [Vite Configuration Reference](https://vitejs.dev/config/).