<script setup>
import { ref } from 'vue'
let name = ref('Notes');

const props = defineProps({ 'pages': [], index: 0 });
const emit = defineEmits(['new-note']);


function newNote(event) {
    console.log(event.target.tagName)
    emit('new-note')
}

</script>

<template>
    <v-card v-for="page in pages">
        <v-card-title>
            <v-text-field v-model="page.title" label="Note Title" outlined></v-text-field>
        </v-card-title>
        <v-card-text>
            <v-textarea v-model="page.content" label="Note Content" outlined></v-textarea>
        </v-card-text>
    </v-card>

    <v-card>
        <v-card-title>
            <v-text-field v-model="name" label="Note Title" outlined></v-text-field>
        </v-card-title>
        <v-card-text>
            <v-textarea v-model="name" label="Note Content" outlined></v-textarea>
        </v-card-text>
        <v-card-actions>
            <v-btn  icon color="primary" size="x-large" @click="$emit('new-note')">
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