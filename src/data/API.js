import { instance } from '../config/api' 


export async function getHomeData(){ 
    return await instance.get(`/page/home/`);    
}
