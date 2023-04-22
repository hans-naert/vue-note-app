<script setup>
import Notes from './components/Notes.vue';
import { ref } from 'vue'

let pages = ref([{ title: 'First Note', content: 'Note Content of First Note' }, { title: 'Second Note', content: 'Note Content of Second Note' }])

let noteTitle = ref('');
let noteContent = ref('');


let dialog=ref(false);

function newNote(note) {
  console.log(`newNote`);
  dialog.value=true;  
}

function saveNote(note) {
  console.log('saveNote');
  pages.value.push(note);
  dialog.value=false;
}

function deleteNote(index) {
  console.log('deleteNote');
  pages.value.splice(index, 1)
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
    <Notes :pages="pages" @new-note="newNote" @delete-note="deleteNote" />
    <v-dialog v-model="dialog">
      <v-card class="mt-4 px-4">
        <v-card-title>
            <v-text-field v-model="noteTitle" label="Note Title" outlined></v-text-field>
        </v-card-title>
        <v-card-text>
            <v-textarea v-model="noteContent" label="Note Content" outlined></v-textarea>
        </v-card-text>
        <v-card-actions>
            <v-btn icon color="primary" size="x-large" @click="saveNote({title:noteTitle,content:noteContent})">
                <v-icon icon="mdi-content-save"></v-icon>
                Add
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn  icon color="secondary" size="x-large" @click="dialog=false">
                <v-icon icon="mdi-delete"></v-icon>
                Cancel
            </v-btn>
        </v-card-actions>
    </v-card>

    </v-dialog>
  </v-app>
</template>