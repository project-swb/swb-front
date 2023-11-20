<template>
    <table class="table table-horizontal table-bordered">
            <thead class="thead-strong">
            <tr>
                <th>게시글번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>최종수정일</th>
            </tr>
            </thead>
            <tbody id="tbody">
            <tr v-for="board in store.boardList" :key="board.id">
                <td>{{ board.id }}</td>
                <td>{{ board.title }}</td>
                <!-- <td>
                    <RouterLink :to="`/board/${board.id}`">{{ board.title }}</RouterLink>
                </td> -->
                <td>{{ board.author }}</td>
                <td>{{ board.modifiedTime }}</td>
                <td>{{ board.regDate }}</td>
            </tr>
            </tbody>
    </table>
</template>

<script setup>
import { useBoardStore } from "@/stores/board";
import { onMounted } from "vue";

const store = useBoardStore()

onMounted(() => {
    store.getBoardList()
})

</script>

<style scoped>

</style>