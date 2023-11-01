<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar :sliding="false">
      <f7-nav-left>
        <f7-link panel-open="left">
          <i class="i-mdi-menu w-6 h-6"></i>
        </f7-link>
      </f7-nav-left>
      <f7-nav-title
        sliding
        class="flex items-center uppercase tracking-wider"
        text="lg blue-600 dark:white"
        font="bold title"
        ><i class="i-simple-icons-framework7 w-5 h-5 mr-1"></i> F7-Vue
        TypeScript</f7-nav-title
      >
      <f7-nav-right>
        <div class="flex items-center">
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
            <f7-link class="min-w-a px-1" panel-open="right">
              <i class="i-mdi-menu w-6 h-6"></i>
            </f7-link>
          </div>
        </div>
      </f7-nav-right>
    </f7-navbar>

    <!-- Page content-->
    <f7-block strong class="text-white mt-0 mb-0" bg="blue-500 dark:blue-900">
      <h2 class="text-xl font-bold mb-3 font-inter">UnoCSS Classes & Icons</h2>
      <p>
        This is an example of tabs-layout application. The main point of such
        tabbed layout is that each tab contains independent view with its own
        routing and navigation.
      </p>

      <p>
        Each tab/view may have different layout, different navbar type (dynamic,
        fixed or static) or without navbar like this tab.
      </p>

      <div class="flex items-center justify-center space-x-2">
        <div>
          <i class="i-mdi-alarm hover:text-teal-400 w-6 h-6" /> Material Icon
        </div>
        <div>
          <i class="i-tabler-bell hover:text-teal-400 w-6 h-6" /> Tabler Icon
        </div>
        <div>
          <i class="i-carbon:face-wink hover:text-teal-400 w-6 h-6" />
          Carbon Icon
        </div>
      </div>
    </f7-block>

    <f7-block strong class="mt-[1px] mb-0">
      <h2 text="xl blue-500" font="bold inter">Pinia Example</h2>
      <div class="flex items-center justify-center">
        <f7-button class="mr-2 w-10" fill @click="counter.decrement"
          >-</f7-button
        >
        <div
          class="px-5 py-1.6 border-rounded-2 flex-1"
          bg="blue-500 dark:blue-900"
          font="bold"
          text="white center lg"
        >
          Current Count: {{ counter.count }}
        </div>
        <f7-button class="ml-2 w-10" fill @click="counter.increment"
          >+</f7-button
        >
      </div>
    </f7-block>

    <f7-block strong class="mt-2 py-5">
      <h2 text="xl blue-500" font="bold inter">Vue i18n Translation</h2>
      <p text="center lg">{{ $t("string") }}</p>

      <f7-list no-hairlines-md class="p-0 -mx-4 mt-1 mb-0">
        <f7-list-input
          label="Switch Language"
          outline
          floating-label
          type="select"
          v-model:value="$i18n.locale"
        >
          <option
            v-for="locale in $i18n.availableLocales"
            :key="`locale-${locale}`"
            :value="locale"
          >
            {{ locale }}
          </option>
        </f7-list-input>
      </f7-list>
    </f7-block>

    <f7-block-title font="xl bold inter">Modals</f7-block-title>
    <f7-block strong class="mx-3 rounded-xl">
      <div class="grid grid-cols-2 grid-gap">
        <div>
          <f7-button fill raised popup-open="#my-popup">Popup Screen</f7-button>
        </div>
        <div>
          <f7-button fill raised login-screen-open="#my-login-screen"
            >Login Screen</f7-button
          >
        </div>
      </div>
    </f7-block>

    <f7-block-title font="xl bold inter">Panels</f7-block-title>
    <f7-block strong class="mx-3 rounded-xl">
      <div class="grid grid-cols-2 grid-gap">
        <div>
          <f7-button fill raised panel-open="left">Left Panel</f7-button>
        </div>
        <div>
          <f7-button fill raised panel-open="right">Right Panel</f7-button>
        </div>
      </div>
    </f7-block>

    <f7-list>
      <f7-list-item
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      ></f7-list-item>
      <f7-list-item
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      ></f7-list-item>
      <f7-list-item
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      ></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script setup lang="ts">
import {
  f7,
  f7Page,
  f7Navbar,
  f7NavRight,
  f7NavLeft,
  f7Block,
  f7List,
  f7ListItem,
  f7Link,
  f7Button,
  f7NavTitle,
  f7BlockTitle,
  f7ListInput,
} from "framework7-vue";
import { ref, watch, onMounted } from "vue";
import { useCounterStore } from "../stores/counter";
const counter = useCounterStore();

const isDark = ref<boolean>(false);

onMounted(() => {
  // Get and Check for darkMode value inside localStorage
  const darkMode = localStorage.getItem("darkMode");
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
