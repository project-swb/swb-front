import { createRouter, createWebHistory } from 'vue-router'
import ReviewList from '@/components/review/ReviewList.vue'
import ReviewCreate from '@/components/review/ReviewCreate.vue'
import ReviewUpdate from '@/components/review/ReviewUpdate.vue'
import ReviewView from '@/views/ReviewView.vue'
import VideoList from '@/components/video/VideoList.vue'
import VideoDetail from '@/components/video/VideoDetail.vue'
import VideoCreate from '@/components/video/VideoCreate.vue'
import VideoUpdate from '@/components/video/VideoUpdate.vue'
import VideoView from '@/views/VideoView.vue'
import Redirect from '@/components/login/Redirect.vue'
import chatView from '@/views/chatView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'review',
      component: ReviewView,
      // 상세보기도 만들어야 함
      children: [
        {
          path: '',
          name: 'reviewList',
          component: ReviewList
        },
        {
          path: 'create',
          name: 'reviewCreate',
          component: ReviewCreate
        },
        
        {
          path: 'update',
          name: 'reviewUpdate',
          component: ReviewUpdate
        },
      ]
    },
    {
      path: '/video',
      name: 'video',
      component: VideoView,
      // 여기부터 안 만들어져 있음
      // 상세보기도 만들어야 함
      children: [
        {
          path: '',
          name: 'videoList',
          component: VideoList
        },
        {
          path: 'create',
          name: 'videoCreate',
          component: VideoCreate
        },
        {
          path: ':videoId',
          name: 'videoDetail',
          component: VideoDetail
        },
        {
          path: 'update',
          name: 'videoUpdate',
          component: VideoUpdate
        },
      ]
    },
    {
      path: '/oauth2/redirect',
      name: 'redirect',
      component: Redirect
    },
    {
      path: '/chat',
      name: 'chat',
      component: chatView
    },
  ]
})

export default router
