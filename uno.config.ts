// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  // preprocess to add !important tag to all classes. It's important to take over Framework7 default styles and apply style change on any component.
  preprocess: (t: string) => {
    if (t.includes("!")) {
      return t;
    }
    return `!${t}`;
  },
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        provider: "google", // default provider
        // these will extend the default theme
        sans: "Roboto",
        mono: ["Fira Code", "Fira Mono:400,700"],
        // custom ones
        title: "Oswald",
        inter: "Inter",
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
