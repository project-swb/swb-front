<template>
    <div>
        <div class = "wrap">
            <div class = "review-header">
            제목 | {{ reviewStore.review.title }}<br>
            작성자 | {{ reviewStore.review.writer }}<br>
            작성일자 | {{ reviewStore.review.regDate }}<br>
            조회수 | {{ reviewStore.review.viewCnt }}<br>
            좋아요 | {{ reviewStore.review.likeCnt }}<br>
            영상 보러가기 | <RouterLink :to="`video/${reviewStore.review.videoId}`">링크</RouterLink>  
            </div>
            <br><br>
            <div class = "review-contents">
                {{ reviewStore.review.contents }}
            </div>
            <div class = "review-footer" style="float:right; padding-right:30px; margin-top:80px">
                <div v-if="loginStore.userInfo.id==reviewStore.review.userId" class="btn btn-success" @click="updateReview">수정</div>
                <div v-if="loginStore.userInfo.id==reviewStore.review.userId" class="btn btn-success" @click="deleteReview">삭제</div>
                <div class="btn btn-secondary" @click="updateLikeCnt">좋아요 {{ reviewStore.review.likeCnt }}</div>
                <div class="btn btn-secondary" @click="goToReviewList">&lt; 다른 리뷰 보러가기</div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { useLoginStore } from "@/stores/login";
import { useVideoStore } from "@/stores/video";
import { useReviewStore } from "@/stores/review";
import { onMounted } from "vue";
import axios from 'axios'

const videoStore = useVideoStore()
const reviewStore = useReviewStore()
const loginStore = useLoginStore()

const route = useRoute();
const router = useRouter();

onMounted(() => {
    reviewStore.getReview(route.params.reviewId)
})

const updateLikeCnt = function() {
    reviewStore.updateLikeCnt(route.params.reviewId)
}

const likeCnt = computed(() => reviewStore.video.likeCnt)


const deleteReview = function () {
    console.log(route.params.videoId)
    axios.delete(`http://localhost:8080/api/v1/reviews/${route.params.reviewId}`)
        .then(() => {
            router.push({ name: 'reviewList' })
        })
}

const updateReview = function () {
    router.push({ name: 'reviewUpdate' })
}


const goToReviewList = function() {
    router.push({name: 'reviewList'});
}


</script>

<style scoped>

.wrap {
    width : 100%;
    height: 650px;
    margin : 20px;
}
.btn {
    margin-left:10px;
}
.video-header {
    margin-left: 50px;
    font-size : 20px;
    line-height: 250%;
}
.video-contents {
    display:flex;
    justify-content:center;
}
</style>