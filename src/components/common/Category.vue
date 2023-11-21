<template>
    <div>
        <button v-for="category in categoryStore.categoryList" :key="category.id">{{ category.name }}</button>
    </div>
</template>

<script setup>

import { useCategoryStore } from '@/stores/category.js'
import { onMounted } from "vue";

const categoryStore = useCategoryStore();

onMounted(() => {
    categoryStore.getCategoryList()
})


</script>

<style scoped>


</style>