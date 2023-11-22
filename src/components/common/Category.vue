<template>
    <div class="categories">
        <div class="btn btn-secondary" v-for="category in categoryStore.categoryList" :key="category.id" @click="Clicked(category.id)"># {{ category.name }}</div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useReviewStore } from '@/stores/review.js'
import { useVideoStore } from '@/stores/video.js'
import { useCategoryStore } from '@/stores/category.js'
import { onMounted } from "vue";

const categoryStore = useCategoryStore();
const reviewStore = useReviewStore()
const videoStore = useVideoStore()
const currentUrl = window.location.href
const searchInfo = ref({
    categoryId : null
})

// computed 사용하는 예시
// const computedCategoryId = computed(()=>{
//     return categoryStore.categoryId;
// })

onMounted(() => {
    categoryStore.getCategoryList()
    // searchInfo.value.categoryId = computedCategoryId;
})

const Clicked = function(id) {
    categoryStore.getCategoryId(id);
    // 스토어 내부에서 변수의 값을 확인하고 싶을 때는 .value를 붙여줘야 하고, 밖에서 스토어를 불러서 쓸때는 .value를 붙이지 않고 그냥 사용한다.
    console.log(categoryStore.categoryId);
    searchInfo.value.categoryId = categoryStore.categoryId;
    if(currentUrl.includes("video")){
        videoStore.searchVideoList(searchInfo.value)
    }
    else{
        reviewStore.searchReviewList(searchInfo.value)
    }
    
}


</script>

<style scoped>

.categories {
    padding-left : 5px;
    margin-top : 10px;
}
.btn-secondary{
    margin:1px;
}

</style>