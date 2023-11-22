<template>
    <div class="search">
        <div>
            <label>검색 기준 :</label>
            <select v-model="searchInfo.key">
                <option value='none'>없음</option>
                <option value="writer">글쓰니</option>
                <option value="title">제목</option>
                <option value="content">내용</option>
            </select>
        </div>
        <div>
            <label>검색 내용 :</label>
            <input type="text" v-model="searchInfo.word" />
        </div>
        <div>
            <label>정렬 기준 :</label>
            <select v-model="searchInfo.orderBy">
                <option value='none'>없음</option>
                <option value="writer">글쓰니</option>
                <option value="title">제목</option>
                <option value="view_cnt">조회수</option>
            </select>
        </div>
        <div>
            <label>정렬 방향 :</label>
            <select v-model="searchInfo.orderByDir">
                <option value="asc">오름차순</option>
                <option value="desc">내림차순</option>
            </select>
        </div>
        <div>
            <div class="btn btn-success" style = "padding:3px; margin-left:2px" @click="searchList">검색</div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { useVideoStore } from '@/stores/video'
import { useReviewStore } from '@/stores/review'
import { useCategoryStore } from '@/stores/category'

const videoStore = useVideoStore()
const reviewStore = useReviewStore()
const categoryStore = useCategoryStore()

const currentUrl = window.location.href

const searchInfo = ref({
    key: 'none',
    word: '',
    orderBy: 'none',
    orderByDir: 'asc'
})

const searchList = function () {
    if(categoryStore.categoryId!=''){
    searchInfo.value.categoryId = categoryStore.categoryId;
    console.log(searchInfo.value)
    }
    if(currentUrl.includes("video")){
        videoStore.searchVideoList(searchInfo.value)
    }
    else{
        reviewStore.searchReviewList(searchInfo.value)
    }
}

</script>
  
<style scoped>
.search {
    display: flex;
    padding-left: 5px;
    margin-top: 10px;
}
</style>
  