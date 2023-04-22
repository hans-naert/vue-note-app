<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Notes from './components/Notes.vue'
import { ref } from 'vue'

let pages= ref([{title:"Note Title", content:"Note Content"},{title:"Note Title2", content:"Note Content2"}])

let title = ref("")
let content = ref("")

let dialog = ref(false)

function addNote() {
    console.log("addNote")
    pages.value.push({title: title.value, content: content.value})
    dialog.value = false
}

function deleteNote (index) {
    console.log("deleteNote",index)
    pages.value.splice(index,1)
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
      <Notes :pages="pages" @delete-note="deleteNote"></Notes>      
  <v-card-actions >
    <v-btn size="x-large"
      color="secondary"
      @click="dialog=true"
    >
    <v-icon icon="mdi-plus-circle"></v-icon>
    Add</v-btn>
  </v-card-actions></v-app>
  <v-dialog v-model="dialog" max-width="500px">
    <v-card>
      <v-card-title class="headline">Add Note</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="title"
                label="Title"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="content"
                label="Content"
                required
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click="addNote">Add</v-btn>
      </v-card-actions>
    </v-card>
    </v-dialog>
</template>