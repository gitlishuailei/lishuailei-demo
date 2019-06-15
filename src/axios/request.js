import axios from "axios";
import qs from "qs";


const server = axios.create({
    timeout:10000,
})

server.interceptors.request.use((config)=>{

    if(config.method == "post"){
        config.data = qs.stringify(config.data);
       
    }else if(config.method == "get"){
        config.params = {...config.params}
    }
    return config;
},(err)=>{
    return Promise.reject(err)
})
server.interceptors.response.use((res)=>{
    if(res.status == 200){
        return res.data;
    }
},(err)=>{
    return Promise.reject(err);
})


export default server;
