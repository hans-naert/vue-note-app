<script setup>

const props = defineProps( { 'pages': []})
const emit = defineEmits(['delete-note'])

</script>

<template>
    <v-card class="my-4" v-for="(page, index) in pages">
        <v-card-title>
          {{ page.title }}
        </v-card-title>
        <v-card-text>
            {{page.content}}
        </v-card-text>
        <v-card-actions>
            <v-btn
                color="primary"
                @click="$emit('delete-note',index)"
            >
            <v-icon icon="mdi-delete"></v-icon>
            Delete</v-btn>
        </v-card-actions>
    </v-card>

</template>