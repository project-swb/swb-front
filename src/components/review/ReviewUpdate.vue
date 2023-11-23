<template>
    <div>
        <div class = "wrap">
            <fieldset>
            <legend>수정</legend>
            <div>
                <label for="title">제목 | </label>
                <input type="text" id="title" v-model="reviewStore.review.title">
            </div>
            <div>
                <label>카테고리 | </label>
                <select v-model="reviewStore.review.categoryId">
                    <option v-for="category in categoryStore.categoryList" :key="category.id" :value="category.id">{{ category.name }}</option>
                </select>
            </div>
            <div>
                <label for="url">내용 | </label>
                <input type="text" id="contents" v-model="reviewStore.review.contents">
            </div>
            <div>
                <button @click="updateReview">수정</button>
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

const updateReview = function () {
    reviewStore.updateReview()
}

</script>

<style scoped>

</style>