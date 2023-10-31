## i18n

This directory is to serve your locale translation files in JSON format. 

## Setup

Import JSON file in `./index.ts`.
```js
import zhCN from "./lang/zh-CN.json";
```

Register it under `messages` property.
```js
messages: {
    'en-US': enUS,
    'zh-CN': zhCN,
}
```

Check out [`vue-i18n`](https://github.com/intlify/vue-i18n-next) for more details.

If you are using VS Code, [`i18n Ally`](https://github.com/lokalise/i18n-ally) is recommended to make the i18n experience better.