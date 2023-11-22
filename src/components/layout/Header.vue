<template>
    <header class = "scrollTop">
        <!-- 기존의 row와 col 옵션 지웠음. 문제 발생 시 참고 -->
        <!-- topmenu : 시스템 메뉴 -->
        <div class="topmenu">
            <div class="contentbox">
                <div class="logo"><img src="@/assets/logo.png" style="width:80px; height:60px; margin:3px;"></div>
                <div class="system">
                    <div v-if="loginStore.isLoggedIn"> {{ loginStore.userInfo.name }}님 환영합니다.
                        <div @click="loginStore.logout" class="btn btn-info active" role="button">Logout</div>
                    </div>
                    <div v-else>
                        <a href="http://localhost:8080/oauth2/authorization/google?redirect_uri=http://localhost:5173/oauth2/redirect" class="btn btn-primary active" role="button">Google Login</a>
                        <a href="http://localhost:8080/oauth2/authorization/naver?redirect_uri=http://localhost:5173/oauth2/redirect" class="btn btn-success active" role="button">Naver Login</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- nav : 메인 메뉴 영역 -->
        <nav>
            <div class="contentbox">
                <ul>
                    <li><button @click="goToVideo()">운동 영상 확인하기</button></li>
                    <li><button @click="goToReview()">영상 리뷰 게시판</button></li>
                    <li><button @click="goToChat()">실시간 채팅</button></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { useLoginStore } from "@/stores/login";
import { useRouter } from "vue-router";

const loginStore = useLoginStore();
const router = useRouter();

// 여기서 값 여부 파악해서 있으면 로그인 된 화면, 없으면 로그아웃 된 화면 보여주기
console.log(loginStore.isLoggedIn)

const goToReview = function() {
    router.push({ name : 'reviewList'});
}
// 만약 비디오 리스트를 바로 보여주고 싶으면, 비디오 리스트로 가야 한다.
const goToVideo = function() {
    router.push({ name : 'videoList'});
}
const goToChat = function() {
    router.push({ name: 'chat'})
}


</script>

<style scoped>

</style>