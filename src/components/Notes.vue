<script setup>
import { ref } from 'vue'
let noteTitle = ref('');
let noteContent = ref('');

const props = defineProps({ 'pages': [], index: 0 });
const emit = defineEmits(['new-note']);


function newNote(event) {
    console.log(event.target.tagName,noteTitle.value,noteContent.value)
    emit('new-note',{title:noteTitle.value,content:noteContent.value})
}

</script>

<template>
    <v-card class="mt-6" v-for="page in pages">
        <v-card-title label="Note Title" outlined>{{ page.title }}  </v-card-title>
        <v-card-text label="Note Content" outlined> {{ page.content }}</v-card-text>
    </v-card>   

    <v-card class="mt-4">
        <v-card-title>
            <v-text-field v-model="noteTitle" label="Note Title" outlined></v-text-field>
        </v-card-title>
        <v-card-text>
            <v-textarea v-model="noteContent" label="Note Content" outlined></v-textarea>
        </v-card-text>
        <v-card-actions>
            <v-btn  icon color="primary" size="x-large" @click="$emit('new-note',{title:noteTitle,content:noteContent})">
                <v-icon icon="mdi-plus-circle"></v-icon>
                Add
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn  icon color="secondary" size="x-large" @click="newNote">
                <v-icon icon="mdi-plus-circle"></v-icon>
                Add
            </v-btn>
        </v-card-actions>
    </v-card>
</template>