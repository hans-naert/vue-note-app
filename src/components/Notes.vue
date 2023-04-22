<script setup>
import { ref } from 'vue'

const props = defineProps({ 'pages': [], index: 0 });
const emit = defineEmits(['new-note', 'delete-note']);

</script>

<template>
    <v-card class="mt-4 px-4" v-for="(page, index) in pages">
        <v-card-title label="Note Title" outlined>{{ page.title }} </v-card-title>
        <v-card-text label="Note Content" outlined> {{ page.content }}</v-card-text>
        <v-card-actions>
            <v-btn icon color="secondary" size="x-large" @click="$emit('delete-note', index)">
                <v-icon icon="mdi-delete"></v-icon>
                Delete
            </v-btn>
        </v-card-actions>
    </v-card>
    <v-card-actions>
        <v-btn icon class="mt-4 px-4" color="secondary" size="x-large" @click="$emit('new-note')">
            <v-icon icon="mdi-plus-circle"></v-icon>
            Add
        </v-btn>
    </v-card-actions>
</template>