<script setup>
import Notes from './components/Notes.vue';
import { ref } from 'vue'

let pages=ref([{title: 'First Note', content: 'Note Content of First Note'},{title: 'Second Note', content: 'Note Content of Second Note'}])


function newNote(note){
    console.log(`newNote ${JSON.stringify(note)}`);
    pages.value.push(note);
}

function saveNote(){
    console.log('saveNote');
}

function deleteNote(index){
    console.log('deleteNote');
    pages.value.splice(index,1)
}


</script>

<template>
  <v-app class="d-block">
    <v-toolbar app>
      <v-icon icon="mdi-arrow-left"></v-icon>
      <v-toolbar-title>
        <span>VueNoteApp</span>        
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>        
      <Notes  :pages="pages" @new-note="newNote" @delete-note="deleteNote"/>
  </v-app>
</template>