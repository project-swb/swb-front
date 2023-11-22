<template>
    <div>
        <div class = "wrap">
            <fieldset>
            <legend>등록</legend>
            <div>
                <label for="title">제목 | </label>
                <input type="text" id="title" v-model="video.title">
            </div>
            <div>
                <label>카테고리 | </label>
                <select v-model="video.categoryId">
                    <option v-for="category in categoryStore.categoryList" :key="category.id" :value="category.id">{{ category.name }}</option>
                </select>
            </div>
            <div>
                <label for="url">Embed URL | </label>
                <input type="text" id="url" v-model="video.url">
            </div>
            <div>
                <button @click="createBoard">등록</button>
            </div>
        </fieldset>
        </div>
    </div>
</template>

<script setup>

import { ref } from "vue";
import { useVideoStore } from "@/stores/video";
import { useCategoryStore } from "@/stores/category";
import { useLoginStore } from "@/stores/login"

const videoStore = useVideoStore()
const categoryStore = useCategoryStore()
const loginStore = useLoginStore()
const userInfo = loginStore.userInfo;
const video = ref({
    title: '',
    categoryId: '',
    url: '',
})

const makeThumbUrl = function (url) {
    return `https://img.youtube.com/vi/${url.split("/")[4]}/mqdefault.jpg`
}

const createBoard = function () {
    video.value.thumbnail = makeThumbUrl(video.value.url)
    if(userInfo!=null){
        video.value.userId = userInfo.id;
        video.value.writer = userInfo.name;
    }
    console.log(video.value)
    videoStore.createVideo(video.value)
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