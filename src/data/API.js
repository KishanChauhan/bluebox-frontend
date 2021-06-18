import { instance } from '../config/api' 


export async function getHomeData(){ 
    return await instance.get(`/page/home/`);    
}
export async function getTestimonials(){ 
    return await instance.get(`/page/testimonials/`);    

}export async function getContactInfo(){ 
    return await instance.get(`/page/contactus-info/`);    
}
export async function getWhyUs(){ 
    return await instance.get(`/page/why-us/`);    
}

// get delivery served areas
export async function getLocations(){ 
    return await instance.get(`/store/locations/`);    
}

export async function saveQuote(data){ 
    return await instance.post(`/store/quote/`, data);    
}

export async function saveNewsLetter(data){ 
    return await instance.post(`/store/news-letter/`, data);    
}
