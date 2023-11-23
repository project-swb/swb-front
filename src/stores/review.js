import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import axios from 'axios'

const BASE_URL = `http://localhost:8080`
const API_URL = `${BASE_URL}/api/v1/reviews`

export const useReviewStore = defineStore('review', () => {
  
    const reviewList = ref([])
    const review = ref({})

    // 모든 게시글
    const getReviewList = function () {
    axios.get(API_URL)
        .then((response) => {
        console.log(response)
        reviewList.value = response.data
        })
    }

    //게시글 한개
    const getReview = function (id) {
    axios.get(`${API_URL}/${id}`)
        .then((response) => {
        review.value = response.data
    })
    }

    //게시글 등록
    const createReview = function (review) {
    axios({
        url: API_URL,
        method: 'POST',
        //아래꺼 없어도 알아서 보내더라 axios 쵝오~ 
        headers: {
        "Content-Type": "application/json"
        },
        data: review
    })
        .then(() => {
        //response 응답으로 들어온 게시글의 id를 이용해서
        //상세보기로 바로 점프도 가넝이야~~
        router.push({ name: 'reviewList'})
        })
        .catch((err) => {
        console.log(err)
    })
    }

    const updateReview = function () {
    axios.put(API_URL, review.value)
        .then(() => {
        router.push({name: 'reviewList'})
    })
    }

    const searchReviewList = function (searchCondition) {
    axios.get(API_URL, {
        params: searchCondition
    })
        .then((res) => {
        reviewList.value = res.data
    })
    }

    // 좋아요
    // 향후 REST API 응답 수정 필요
    const updateLikeCnt = function (id) {
        axios.put(`${API_URL}/${id}`)
        .then(() => {
            review.value.likeCnt++;
        })
    }

  return { reviewList, getReviewList, review, getReview, createReview, updateReview, searchReviewList, updateLikeCnt }
})
