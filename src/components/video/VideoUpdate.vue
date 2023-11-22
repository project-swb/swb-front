<template>
    <div>
        <div class = "wrap">
            <fieldset>
            <legend>등록</legend>
            <!-- videoStore의 video로 바로 바인딩 -->
            <div>
                <label for="title">제목 | </label>
                <input type="text" id="title" v-model="videoStore.video.title">
            </div>
            <div>
                <label>카테고리 | </label>
                <select v-model="videoStore.video.categoryId">
                    <option v-for="category in categoryStore.categoryList" :key="category.id" :value="category.id">{{ category.name }}</option>
                </select>
            </div>
            <div>
                <label for="url">Embed URL | </label>
                <input type="text" id="url" readonly>
            </div>
            <div>
                <button @click="updateVideo">수정</button>
            </div>
            </fieldset>
        </div>
    </div>
</template>

<script setup>
import { useVideoStore } from "@/stores/video";
import { useCategoryStore } from "@/stores/category";

const videoStore = useVideoStore();
const categoryStore = useCategoryStore();

const updateVideo = function () {
    videoStore.updateVideo()
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