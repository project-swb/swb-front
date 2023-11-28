<template>
    <div>
        <Category/>
        <SearchInput />
        <RouterView/>
    </div>
</template>

<script setup>
import Category from '@/components/common/Category.vue';
import SearchInput from '@/components/common/SearchInput.vue';

</script>


<style scoped>

</style>