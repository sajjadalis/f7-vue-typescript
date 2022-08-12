<template>
  <f7-page name="settings">
    <f7-navbar title="Settings"></f7-navbar>

    <f7-block-title>Form Example</f7-block-title>
    <f7-list no-hairlines-md>
      <f7-list-input
        label="Name"
        type="text"
        placeholder="Your name"
      ></f7-list-input>

      <f7-list-input
        label="E-mail"
        type="email"
        placeholder="E-mail"
      ></f7-list-input>

      <f7-list-input
        label="URL"
        type="url"
        placeholder="URL"
      ></f7-list-input>

      <f7-list-input
        label="Password"
        type="password"
        placeholder="Password"
      ></f7-list-input>

      <f7-list-input
        label="Phone"
        type="tel"
        placeholder="Phone"
      ></f7-list-input>

      <f7-list-input
        label="Gender"
        type="select"
        >
        <option>Male</option>
        <option>Female</option>
      </f7-list-input>

      <f7-list-input
        label="Birth date"
        type="date"
        placeholder="Birth day"
        defaultValue="2014-04-30"
      ></f7-list-input>

      <f7-list-item
        title="Toggle"
      >
        <template #after>
          <f7-toggle />
        </template>
      </f7-list-item>

      <f7-list-input
        label="Range"
        :input="false"
      >
        <template #input>
          <f7-range :value="50" :min="0" :max="100" :step="1" />
        </template>
      </f7-list-input>

      <f7-list-input
        type="textarea"
        label="Textarea"
        placeholder="Bio"
      ></f7-list-input>
      <f7-list-input
        type="textarea"
        label="Resizable"
        placeholder="Bio"
        resizable
      ></f7-list-input>
    </f7-list>

    <f7-block-title>Checkbox group</f7-block-title>
    <f7-list>
      <f7-list-item
        checkbox
        name="my-checkbox"
        value="Books"
        title="Books"
      ></f7-list-item>
      <f7-list-item
        checkbox
        name="my-checkbox"
        value="Movies"
        title="Movies"
      ></f7-list-item>
      <f7-list-item
        checkbox
        name="my-checkbox"
        value="Food"
        title="Food"
      ></f7-list-item>
    </f7-list>

    <f7-block-title>Radio buttons group</f7-block-title>
    <f7-list>
      <f7-list-item
        radio
        name="radio"
        value="Books"
        title="Books"
      ></f7-list-item>
      <f7-list-item
        radio
        name="radio"
        value="Movies"
        title="Movies"
      ></f7-list-item>
      <f7-list-item
        radio
        name="radio"
        value="Food"
        title="Food"
      ></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script setup lang="ts">
  import { f7Page, f7Navbar, f7List, f7ListItem, f7BlockTitle, f7ListInput, f7Range, f7Toggle  } from 'framework7-vue';
</script>
