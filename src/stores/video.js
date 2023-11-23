import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import axios from 'axios'

const BASE_URL = `http://localhost:8080`
const API_URL = `${BASE_URL}/api/v1/videos`

export const useVideoStore = defineStore('video', () => {
  
    const videoList = ref([])
    const video = ref({})

    // 모든 게시글
    const getVideoList = function () {
    axios.get(API_URL)
        .then((response) => {
        console.log(response)
        videoList.value = response.data
        })
    }

    //게시글 한개
    const getVideo = function (id) {
    axios.get(`${API_URL}/${id}`)
        .then((response) => {
        video.value = response.data
    })
    }

    //게시글 등록
    const createVideo = function (video) {
    axios({
        url: API_URL,
        method: 'POST',
        //아래꺼 없어도 알아서 보내더라 axios 쵝오~ 
        headers: {
        "Content-Type": "application/json"
        },
        data: video
    })
        .then(() => {
        //response 응답으로 들어온 게시글의 id를 이용해서
        //상세보기로 바로 점프도 가넝이야~~
        router.push({ name: 'videoList'})
        })
        .catch((err) => {
        console.log(err)
    })
    }

    const updateVideo = function () {
    axios.put(API_URL, video.value)
        .then(() => {
        router.push({name: 'videoList'})
    })
    }

    const searchVideoList = function (searchCondition) {
    axios.get(API_URL, {
        params: searchCondition
    })
        .then((res) => {
        videoList.value = res.data
    })
    }

    // 좋아요
    // 향후 REST API 응답 수정 필요
    const updateLikeCnt = function (id) {
        axios.put(`${API_URL}/${id}`)
        .then(() => {
            video.value.likeCnt++;
        })
    }

  return { videoList, getVideoList, video, getVideo, createVideo, updateVideo, searchVideoList, updateLikeCnt }
})
