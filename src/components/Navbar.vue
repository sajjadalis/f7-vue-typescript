<template>
  <f7-navbar :sliding="false">
    <f7-nav-left>
      <f7-link panel-open="left">
        <i class="i-mdi-menu w-6 h-6"></i>
      </f7-link>
    </f7-nav-left>
    <f7-nav-title
      sliding
      class="flex items-center uppercase tracking-wider text-color-primary"
      text="lg"
      font="bold title"
      ><i class="i-simple-icons-framework7 w-5 h-5 mr-1"></i> F7-Vue
      TypeScript</f7-nav-title
    >
    <f7-nav-right>
      <div class="flex items-center">
        <f7-link class="min-w-a px-1" popover-open=".popover-menu">
          <i
            class="i-mdi-palette-swatch-outline w-5 h-5 text-color-primary"
          ></i>
        </f7-link>
        <f7-link class="min-w-a px-1" @click="isDark = !isDark">
          <i v-if="isDark" class="i-tabler-moon w-5 h-5"></i>
          <i v-else class="i-tabler-sun w-5 h-5"></i>
        </f7-link>
        <div class="flex items-center border-l-3 border-white">
          <f7-link
            href="https://github.com/sajjadalis/f7-vue-typescript"
            target="_blank"
            class="min-w-a px-1"
            external
          >
            <i class="i-carbon-logo-github w-5 h-5"></i>
          </f7-link>
        </div>
      </div>
    </f7-nav-right>
  </f7-navbar>

  <f7-popover class="popover-menu">
    <f7-block>
      <div class="grid grid-cols-6 large-grid-cols-6 grid-gap">
        <div v-for="(color, index) in colors" :key="index">
          <f7-button
            fill
            round
            small
            class="h-8"
            :color="color"
            @click.prevent="setColorTheme(color)"
          ></f7-button>
        </div>
      </div>
    </f7-block>
  </f7-popover>
</template>
<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import {
  f7,
  f7Navbar,
  f7NavRight,
  f7NavLeft,
  f7Link,
  f7NavTitle,
  f7Popover,
  f7Block,
  f7Button,
} from "framework7-vue";

// COLOR THEMES
const colors: string[] = Object.keys(f7.colors).filter(
  c => c !== "primary" && c !== "white" && c !== "black"
);

const setColorTheme = (c: string): void => {
  hexColor.value = f7.colors[c];
  f7.setColorTheme(hexColor.value);
  localStorage.setItem("themeColor", hexColor.value!);
};

const hexColor = ref<string | null>(null);

onMounted(() => {
  // Check for themeColor value inside localStorage
  hexColor.value = localStorage.getItem("themeColor");
  if (hexColor.value !== null) {
    f7.setColorTheme(hexColor.value);
  }
});

// DARK MODE
const isDark = ref<boolean>(false);

onMounted(() => {
  // Check for darkMode value inside localStorage
  const darkMode = localStorage.getItem("darkMode") as string | null;
  if (darkMode) {
    isDark.value = true;
  }
});

watch(
  () => isDark.value,
  (val: boolean) => {
    if (val === true) {
      f7.setDarkMode(true);
      // Persist darkMode value in localStorage
      localStorage.setItem("darkMode", "true");
    } else {
      f7.setDarkMode(false);
      // Remove the darkMode value from localStorage
      localStorage.removeItem("darkMode");
    }
  }
);
</script>
