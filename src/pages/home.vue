<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar :sliding="false">
      <f7-nav-left>
        <f7-link panel-open="left">
          <i class="i-mdi-menu w-5 h-5"></i>
        </f7-link>
      </f7-nav-left>
      <f7-nav-title
        sliding
        class="text-lg font-bold font-oswald uppercase text-blue-600 dark:text-white"
        >F7-Vue TypeScript</f7-nav-title
      >
      <f7-nav-right>
        <div class="flex items-center">
          <f7-link class="min-w-a px-2" @click="isDark = !isDark">
            <i v-if="isDark" class="i-tabler-moon w-5 h-5"></i>
            <i v-else class="i-tabler-sun w-5 h-5"></i>
          </f7-link>
          <f7-link class="min-w-a px-2" panel-open="right">
            <i class="i-mdi-menu w-5 h-5"></i>
          </f7-link>
        </div>
      </f7-nav-right>
    </f7-navbar>

    <!-- Page content-->
    <f7-block strong class="bg-blue-500 text-white mt-0 mb-0">
      <h2 class="text-xl font-bold mb-3">UnoCSS Classes & Icons</h2>
      <p>
        This is an example of tabs-layout application. The main point of such
        tabbed layout is that each tab contains independent view with its own
        routing and navigation.
      </p>

      <p>
        Each tab/view may have different layout, different navbar type (dynamic,
        fixed or static) or without navbar like this tab.
      </p>

      <div class="text-xs">
        <i class="i-mdi-alarm hover:text-teal-400 w-7 h-7" /> Material Icon
      </div>
      <div class="text-xs mt-2">
        <i class="i-tabler-bell hover:text-teal-400 w-7 h-7" /> Tabler Icon
      </div>
    </f7-block>

    <f7-block strong class="mt-0">
      <h2 text="xl blue-500" font="bold inter">Vue i18n Translation</h2>
      <p>{{ $t("title") }}</p>

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

    <f7-block-title class="font-xl bold lobster">Modals</f7-block-title>
    <f7-block strong>
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

    <f7-block-title>Panels</f7-block-title>
    <f7-block strong>
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
import { ref, watch } from "vue";

const isDark = ref(false);

watch(
  () => isDark.value,
  async val => {
    if (val === true) {
      f7.setDarkMode(true);
    } else {
      f7.setDarkMode(false);
    }
  }
);
</script>
