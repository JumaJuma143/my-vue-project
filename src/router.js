import { createRouter, createWebHistory } from 'vue-router';
import mainPro from './components/mainPro.vue'; 
import formPro from './components/formPro.vue'; 
import contactsPro from './components/contactsPro.vue'; 
import Courses from './components/Courses.vue';
import teachers from './components/teachersPro.vue'; 

const routes = [
  { path: '/', component: mainPro, },
  { path: '/form', component: formPro, },
  { path: '/contacts', component: contactsPro, },
  { path: '/courses', component: Courses },
  { path: '/teachers', component: teachers },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
