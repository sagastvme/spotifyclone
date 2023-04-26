import { createRouter, createWebHistory } from "vue-router";
import TheBody from '../src/components/TheBody.vue';
import TheSearch from '../src/components/TheSearch.vue';
import TheLibrary from '../src/components/TheLibrary.vue';

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    
    { path: '/', component: TheBody, name: 'home' },
     { path: '/search', component: TheSearch, name: 'search' },
    { path: '/library', component: TheLibrary, name: 'library' },
    
    ],
  scrollBehavior(_1, _2, savedPosition) {

 if(savedPosition){
            return savedPosition;
        }
        return {left:0, top:0}
    }
});
export default router;