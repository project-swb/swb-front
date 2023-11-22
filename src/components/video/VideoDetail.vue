<template>
    <div>
        <div class = "wrap">
            <div class = "video-header">
            제목 | {{ videoStore.video.title }}<br>
            작성자 | {{ videoStore.video.writer }}<br>
            조회수 | {{ videoStore.video.viewCnt }}<br>
            좋아요 | {{ videoStore.video.likeCnt }}<br>
            </div>
            <br><br>
            <div class = "video-contents">
                <iframe width="560" height="315" :src="videoStore.video.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div class = "video-footer" style="float:right; padding-right:30px; margin-top:80px">
                <div v-if="loginStore.userInfo.id==videoStore.video.userId" class="btn btn-success" @click="updateVideo">수정</div>
                <div v-if="loginStore.userInfo.id==videoStore.video.userId" class="btn btn-success" @click="deleteVideo">삭제</div>
                <div class="btn btn-secondary" @click="goToVideoList">&lt; 다른 영상 보러가기</div>
                <div class="btn btn-secondary" @click="goToReviewList">리뷰 보러가기</div>
                <div class="btn btn-secondary" @click="goToReviewWrite">리뷰 작성하기</div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';
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
    videoStore.getVideo(route.params.videoId)
    console.log(videoStore.video.videoId)
})

const deleteVideo = function () {
    console.log(route.params.videoId)
    axios.delete(`http://localhost:8080/api/v1/videos/${route.params.videoId}`)
        .then(() => {
            router.push({ name: 'videoList' })
        })
}

const updateVideo = function () {
    router.push({ name: 'videoUpdate' })
}

const goToVideoList = function() {
    router.push('/video');
}

const searchInfo = {
    "videoId" : Number(route.params.videoId)
}

const goToReviewList = function() {
    router.push({name: 'reviewList'});
    console.log('after routing')
    console.log(searchInfo)
    reviewStore.searchReviewList(searchInfo)
    console.log(reviewStore.reviewList)
}

// const goToVideoList = function() {
//     router.push('/video');
// }

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