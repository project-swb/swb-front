<template>
    <div>
        <div class = "wrap">
            <fieldset>
            <legend>등록</legend>
            <div>
                <label for="title">제목 | </label>
                <input type="text" id="title" v-model="review.title">
            </div>
            <div>
                <label>카테고리 | </label>
                <select v-model="review.categoryId">
                    <option v-for="category in categoryStore.categoryList" :key="category.id" :value="category.id">{{ category.name }}</option>
                </select>
            </div>
            <div>
                <label for="url">내용 | </label>
                <input type="text" id="contents" v-model="review.contents">
            </div>
            <div>
                <button @click="createReview">등록</button>
            </div>
        </fieldset>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useReviewStore } from "@/stores/review";
import { useLoginStore } from "@/stores/login";
import { useCategoryStore } from "@/stores/category";
import { useRoute } from "vue-router";

const reviewStore = useReviewStore()
const loginStore = useLoginStore()
const categoryStore = useCategoryStore()
const route = useRoute();

const userInfo = loginStore.userInfo;

const review = ref({
    title: '',
    writer: '',
    categoryId: '',
    contents: ''
})

const createReview = function () {
    review.value.videoId = Number(route.query.videoId)
    if(userInfo!=null){
        review.value.userId = userInfo.id;
        review.value.writer = userInfo.name;
    }
    reviewStore.createReview(review.value)
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

</style>