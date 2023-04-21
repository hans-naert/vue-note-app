<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Notes from './components/Notes.vue';
import TheWelcome from './components/TheWelcome.vue'
import { ref } from 'vue'

let pages=ref([{title: 'First Note', content: 'Note Content of First Note'},{title: 'Second Note', content: 'Note Content of Second Note'}])


function newNote(){
    console.log('newNote');
    pages.value.push({title: 'New Note', content: 'Note Content of New Note'});
}

function saveNote(){
    console.log('saveNote');
}

function deleteNote(){
    console.log('deleteNote');
}


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
      <HelloWorld msg="Welcome to Your Vue.js App" />      
      <Notes  :pages="pages" @new-note="newNote"/>
  </v-app>
</template>