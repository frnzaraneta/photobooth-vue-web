import {createRouter, createWebHistory} from "vue-router";
import HomeHeader from '../views/HomeHeader.vue';
import Project from '../views/Project.vue';
import About from '../views/About.vue';
import Navbar from '../components/Navbar.vue';
import AppLayout from "../components/AppLayout.vue";


const routes =[
    {
        path: '/',
        redirect:'/home',
        component: AppLayout,
        children:[
            {
                path: '/home', name: 'HomeHeader', components:{
                    default: Navbar,
                    homeRouter: HomeHeader,
                    projectRouter: Project,
                    aboutRouter: About
             
                }
            },
            {
                path: '/project', name: 'Project', components:{
                    default: Navbar,
                    homeRouter: HomeHeader,
                    projectRouter: Project,
                    aboutRouter: About
             
                }
            },
            {
                path: '/about',
                name: 'About',
                component: About
            },
        ]
    },
   
];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router