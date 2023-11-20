<template>
    <div>
        <h1>게시글 등록</h1>
        <div class="col-md-12">
            <div class="col-md-4">
                <form>
                <div class="form-group">
                    <label for="title">제목</label>
                    <input type="text" class="form-control" id="title" placeholder="제목을 입력하세요">
                </div>
                <div class="form-group">
                    <label for="author">작성자</label>
                    <input type="text" class="form-control" id="author" placeholder="작성자를 입력하세요">
                </div>
                <div class="form-group">
                    <label for="content">내용</label>
                    <input type="text" class="form-control" id="content" placeholder="내용을 입력하세요">
                </div>
                </form>
                <a href="/" role="button" class="btn btn-secondary">취소</a>
                <button type="button" class="btn btn-primary" @click="createBoard">등록</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useBoardStore } from "@/stores/board";

const store = useBoardStore()
const board = ref({
    title: '',
    writer: '',
    content: ''
})

const createBoard = function () {
    store.createBoard(board.value)
}
</script>

<style scoped>

</style>