<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <v-app>
    <v-toolbar app>
      <v-icon icon="mdi-arrow-left"></v-icon>
      <v-toolbar-title>
        <span>VueNoteApp</span>        
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>  
      <img alt="Vue logo" src="./assets/logo.svg">
      <HelloWorld msg="Welcome to Your Vue.js App" />      
  </v-app>
</template>