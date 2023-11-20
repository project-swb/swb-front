import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import axios from 'axios'


export const useLoginStore = defineStore('login', () => {

    const isLoggedIn = ref(false)
    const userInfo = ref(null)

    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    }

    const login = (token)=>{
        sessionStorage.setItem('accessToken', token)
        isLoggedIn.value = true;
        console.log(parseJwt(token).email)
        userInfo.value = parseJwt(token)
        
    }

    const logout = ()=>{
        // storage에서 제거
        isLoggedIn.value = false;
        sessionStorage.removeItem('accessToken')
    }


  return { isLoggedIn, login, logout, userInfo}
})