<template>
  <f7-page>
    <f7-navbar
      :title="`${user.firstName} ${user.lastName}`"
      back-link="Back"
    ></f7-navbar>
    <f7-block strong>
      {{ user.about }}
    </f7-block>
    <f7-list>
      <f7-list-item
        v-for="(link, index) in user.links"
        :key="index"
        :link="link.url"
        :title="link.title"
        external
        target="_blank"
      ></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script setup lang="ts">
import { f7Page, f7Navbar, f7Block, f7List, f7ListItem } from "framework7-vue";

// Define a type for the user object
interface User {
  firstName: string;
  lastName: string;
  about: string;
  links: { url: string; title: string }[];
}

interface Props {
  user: User;
}

const { user } = defineProps<Props>();
</script>
