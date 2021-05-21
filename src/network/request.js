import axios from "axios";

export function request (config){
  const instance =axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  //2.axios的拦截器
  instance.interceptors.request.use(config=>{
    // console.log(config);
    //1.比如说config中的一些信息不符合服务器的要求
    //2.比如每次发送网络请求时，都希望界面中显示一个请求图标
    // headers 
    return config
  },err=>{
    console.log(err);
  })


  instance.interceptors.response.use(res=>{ 
    return res.data
    return config
  },err=>{
    console.log(err);
  })
  return instance(config)
}
