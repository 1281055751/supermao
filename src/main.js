import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import { request } from './network/request'

createApp(App,axios).mount('#app')

request({
  url:'home/multidata'
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})