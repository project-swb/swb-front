<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <!-- 링크와 문법 개선해야 함 -->
                <!-- 소셜 로그인으로 구현, jwt 토큰 배운 이후에 반응형 화면 구현 예정 -->
                <!-- <div th:if="${userName}">
                    Logged in as: <span id="user" th:text="${userName}"></span>
                    <a th:href="@{/logout}" class="btn btn-info active" role="button">Logout</a>
                </div> -->
                <div v-if="loginStore.isLoggedIn">
                    {{ loginStore.userInfo.name }}님 환영합니다.
                    <div @click="loginStore.logout" class="btn btn-info active" role="button">Logout</div>
                </div>
                <div v-else>
                    <a href="http://localhost:8080/oauth2/authorization/google?redirect_uri=http://localhost:5173/oauth2/redirect" class="btn btn-success active" role="button">Google Login</a>
                    <a href="http://localhost:8080/oauth2/authorization/naver?redirect_uri=http://localhost:5173/oauth2/redirect" class="btn btn-secondary active" role="button">Naver Login</a>
                </div>
                <!-- 여기서 RouterLink로 보내주기 -->
                <RouterLink :to="{ name: 'boardList' }" class="btn btn-primary">게시판</RouterLink>
                <RouterLink :to="{ name: 'boardCreate' }" class="btn btn-primary">글작성</RouterLink>
            </div>
            
        </div>
    </div>
</template>

<script setup>
import { useBoardStore } from "@/stores/board";
import { ref, computed } from 'vue';
import { useLoginStore } from "@/stores/login";

const loginStore = useLoginStore();

// 여기서 값 여부 파악해서 있으면 로그인 된 화면, 없으면 로그아웃 된 화면 보여주기
console.log(loginStore.isLoggedIn)
loginStore.getId

</script>

<style scoped>

</style>