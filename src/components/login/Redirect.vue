<template>
    <div>
        
    </div>
</template>

<script setup>

import { useRoute, useRouter } from "vue-router";
import { useLoginStore } from "@/stores/login";

const route = useRoute();
const router = useRouter();
const loginStore = useLoginStore();

const token = route.query.token
console.log('token',token)

if(token){
    loginStore.login(token)
    window.alert('로그인 하였습니다.')
    router.push('/')
} else {
    window.alert('로그인에 실패하였습니다.')
    router.push('/')
}

</script>

<style scoped>

</style>