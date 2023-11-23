<template>
    <table class="table table-horizontal table-bordered">
            <thead class="thead-strong">
            <tr>
                <th>제목</th>
                <th>작성자</th>
                <th>조회수</th>
                <th>좋아요</th>
            </tr>
            </thead>
            <tbody id="tbody">
                <!-- 인라인에서는 변경된 값을 감지해서 자동으로 바꿔줌(computed처럼 동작) -->
            <tr v-for="review in store.reviewList" :key="review.reviewId">
                <td>
                    <RouterLink :to="`/${review.reviewId}`">{{ review.title }}</RouterLink>
                </td>
                <td>{{ review.writer }}</td>
                <td>{{ review.viewCnt }}</td>
                <td>{{ review.likeCnt }}</td>
            </tr>
            </tbody>
    </table>
</template>

<script setup>

import { useRoute, useRouter } from 'vue-router'
import { useReviewStore } from "@/stores/review";
import { onMounted } from "vue";
import SearchInput from "@/components/common/SearchInput.vue"

const store = useReviewStore()
const route = useRoute()

// 만약 인라인에서처럼 쓰고 싶으면, computed로 따로 만들어줘야 한다.
// const reviewList = computed(()=>store.reviewList)


onMounted(() => {
    store.getReviewList()
    console.log(store.reviewList)
    // query, param
    const searchInfo = {
    "videoId" : Number(route.query.videoId)
    }
    if(route.query.videoId){
        store.searchReviewList(searchInfo)
    }
})



</script>

<style scoped>

</style>