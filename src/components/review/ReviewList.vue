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
            <tr v-for="review in store.reviewList" :key="review.id">
                <td>{{ review.title }}</td>
                <!-- <td>
                    <RouterLink :to="`/board/${board.id}`">{{ board.title }}</RouterLink>
                </td> -->
                <td>{{ review.writer }}</td>
                <td>{{ review.viewCnt }}</td>
                <td>{{ review.likeCnt }}</td>
            </tr>
            </tbody>
    </table>
</template>

<script setup>

import { useReviewStore } from "@/stores/review";
import { onMounted } from "vue";
import SearchInput from "@/components/common/SearchInput.vue"

const store = useReviewStore()

// 만약 인라인에서처럼 쓰고 싶으면, computed로 따로 만들어줘야 한다.
// const reviewList = computed(()=>store.reviewList)

onMounted(() => {
    store.getReviewList()
})



</script>

<style scoped>

</style>