import { createRouter, createWebHistory } from 'vue-router'
import BoardList from '@/components/board/BoardList.vue'
import BoardCreate from '@/components/board/BoardCreate.vue'
import BoardUpdate from '@/components/board/BoardUpdate.vue'
import BoardView from '@/views/BoardView.vue'
import Redirect from '@/components/login/Redirect.vue'
import chatView from '@/views/chatView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'board',
      component: BoardView,
      children: [
        {
          path: '',
          name: 'boardList',
          component: BoardList
        },
        {
          path: 'create',
          name: 'boardCreate',
          component: BoardCreate
        },
        {
          path: 'update/:id',
          name: 'boardUpdate',
          component: BoardUpdate
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
    }
  ]
})

export default router
