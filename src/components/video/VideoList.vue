<template>
    <div class="vidlist">
        <div class = "wrap">
            <div class = "box" v-for="video in videoStore.videoList" :key="video.videoId">
                <RouterLink :to="'/video/' + video.videoId">
                <div class = "box-wrap">
                    <img :src="video.thumbnail" alt="Video Thumbnail" style = "width:80%; height:80%; margin: 0 auto;">
                    <div class = "info" style = "font-size:11px">
                        제목 | {{ video.title }}<br>
                        작성자 | {{ video.writer }} <br>
                        조회수 | {{ video.viewCnt }} <br>
                        좋아요 | {{ video.likeCnt }}<br>
                    </div>
                </div>
                </RouterLink>
            </div>
        </div>
    </div>
    <div class="btn btn-success btnRegist" @click="goToVideoCreate()">영상 등록하기</div>
</template>

<script setup>

import { useVideoStore } from "@/stores/video";

import { onMounted } from "vue";
import router from "../../router";

const videoStore = useVideoStore();

// 만약 인라인에서처럼 쓰고 싶으면, computed로 따로 만들어줘야 한다.
// const reviewList = computed(()=>store.reviewList)

onMounted(() => {
    console.log(2)
    videoStore.getVideoList()
})

const goToVideoCreate = function() {
    router.push({name : "videoCreate"})
}

</script>

<style scoped>

.box {
    width: calc(100% / 3);
    height: 300px;
    padding: 10px;
    /* border : 1px solid black; */
    display : flex;
}

.box-wrap {
    margin : 0 auto;
    text-align: center;
    border : 1.5px dashed gray;
    padding : 20px;
}

.btnRegist {
    float: right;
    margin-right: 50px;
}

.wrap {
    width : 80%;
    display: flex;
    flex-wrap: wrap;
    /* border : 1px solid red; */
    justify-content : center;
}
.vidlist {
    display : flex;
    justify-content : center;
    margin-top: 20px;
}

</style>