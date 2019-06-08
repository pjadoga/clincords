import Vue from 'vue'
import Router from 'vue-router'
//import all components here
import Home from '@/components/Home'
import About from '@/components/MainMenu/About.vue'
import Contact from '@/components/MainMenu/Contact.vue'
import Affiliates from '@/components/MainMenu/Affiliates'
import SignUp from '@/components/MainMenu/SignUp'
import SignIn from '@/components/MainMenu/SignIn'
import Profile from '@/components/MainMenu/Profile'
import Ref from '@/components/MainMenu/Reference.vue'
import Notifications from '@/components/LeftMenu/Notifications.vue'
import Users from '@/components/LeftMenu/Users.vue'
import Facebook from '@/components/footMenu/Facebook.vue'
import FAQ from '@/components/footMenu/FAQ.vue'
import Location from '@/components/footMenu/Location.vue'
import Privacy from '@/components/footMenu/Privacy.vue'
import Terms from '@/components/footMenu/Terms.vue'
import Twitter from '@/components/footMenu/Twitter.vue'
import Posts from '@/components/userPost.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/',             name: 'home',           component: Home },
        {path: '/posts',        redirect: '/signin'},
        {path: '/contact',      name: 'contact',        component: Contact },
        {path: '/ref',          name: 'ref',            component: Ref },
        {path: '/about',        name: 'about',          component: About},
       {path: '/affiliates',    name: 'affiliates',     component: Affiliates },
       {path: '/signup',        name: 'signup',         component: SignUp },
       {path: '/signin',        name: 'signin',         component: SignIn },
       {path: '/notifications', name: 'notifications',  component: Notifications },
       {path: '/users',         name: 'users',          component: Users },
       {path: '/facebook',      name: 'facebook',       component: Facebook},
       {path: '/faq',           name: 'faq',            component: FAQ },
       {path: '/location',      name: 'location',       component: Location },
       {path: '/privacy',       name: 'privacy',        component: Privacy },
       {path: '/terms',         name: 'terms',          component: Terms },
       {path: '/twitter',       name: 'twitter',        component: Twitter },
       {path: '/posts',         name: 'Posts',          component: Posts, meta: { requiresAuth: true} },
       {path: '/profile',       name: 'profile',        component: Profile },
    ],
    mode: 'history'
})
export const router = new Router

router.beforeEach((to, from, next) => {
	const currentUser = firebase.auth().currentUser
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
	if (requiresAuth && !currentUser){
			next('signin')
	} else if (requiresAuth && currentUser) {
			next('posts')
	} else {
			next()
	}
})
