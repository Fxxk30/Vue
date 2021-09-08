import Vue from 'vue'
import VueRouter from 'vue-router'
import AllUser from "../pages/AllUser";
import AddUser from "../pages/AddUser";
import UpdateUser from "../pages/UpdateUser";
import Joke from "../pages/Joke";
import Music from "../pages/Music";
import Hero from "../pages/Hero";
import TeacherLogin from "../pages/TeacherLogin";
import UserLogin from "../pages/UserLogin";
import AboutMySelf from "../pages/AboutMySelf";
import UserSignUp from "../pages/UserSignUp";
import SendMessage from "../pages/SendMessage";

Vue.use(VueRouter)
const router= new VueRouter({
    routes: [
        {
            path: '/allUser',
            component:AllUser,
            meta:{need:true}
        },
        {
            path: '/addUser',
            component:AddUser,
            meta:{need:true}
        },
        {
            path: '/updateUser',
            component:UpdateUser,
            meta:{need:true}
        },
        {
            path: '/joke',
            component:Joke
        },
        {
            path: '/music',
            component:Music
        },
        {
            path: '/hero',
            component:Hero
        },
        {
            path: '/teacherLogin',
            component:TeacherLogin
        },
        {
            path: '/userLogin',
            component:UserLogin
        },
        {
            path: '/aboutMe',
            component:AboutMySelf,
            meta:{userneed:true}
        },
        {
            path: '/userSignUp',
            component:UserSignUp
        },
        {
            path: '/sendMessage',
            component:SendMessage,
            meta:{need:true}
        }


    ]
})
router.beforeEach((to,from,next)=>{
    let teacherlogin=localStorage.getItem("teacherLogin")
    let userLogin=localStorage.getItem("userLogin")
    if(to.meta.need===true){
        if (teacherlogin){
            next()
        }else{
            alert("no login yet")
        }
    }else if (to.meta.userneed===true){
        if (userLogin){
            next()
        }else{
            alert("no login yet")
        }
    }
    else{
        next()
    }
})

export default router