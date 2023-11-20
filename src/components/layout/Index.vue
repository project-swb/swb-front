<template>
    <section id = "wrap">
        <Header></Header>
        <section id = "container">
            <RouterView class="routerView"/>
        </section>
        <Footer></Footer>
    </section>
    
</template>
<script setup>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<style scoped>

</style>