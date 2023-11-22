<template>
    <div class="categories">
        <div class="btn btn-secondary" v-for="category in categoryStore.categoryList" :key="category.id"># {{ category.name }}</div>
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

.categories {
    padding-left:5px;
}
.btn-secondary{
    margin:1px;
}

</style>