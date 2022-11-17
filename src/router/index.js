import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../stores/auth'
// Importējam vēlamos skatus kurus gribam izmantot
import Login from '@/views/Login.vue'
import Songs from '@/views/Songs.vue'
import Albums from '@/views/Albums.vue'
import About from '@/views/About.vue'

// Definējam routes datu masīvu
// Katrs objekts iekš šī datu masīva kalpo kā rūtera adrese
    // path -> adrese kuru gribam noķert/apstrādāt
    // component -> lapas komponente kuru vue attēlos, pie norādītās adreses
const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/',
        component: Songs,
    },
    {
        path:'/albums',
        component: Albums,
    },
    {
        path:'/about',
        component:About
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// Tiek izveidots middleware / starpprogrammatūra kura katru reizi veiks pārbaudi pirms tiks nomainīta rūtera adrese
// arguments to glabā adresi uz kurieni gribam iet
// arguments from glabā adresi no kurienes mēs nākam
router.beforeEach((to, from) => {
    if(auth.is_authenticated==false && to.path !="/login") {
        return "/login";
    } else if (auth.is_authenticated==true && to.path =="/login") {
        return from ? from.path:"/login";
    }
})

export default router