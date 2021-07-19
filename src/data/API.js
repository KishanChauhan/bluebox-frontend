import { instance } from "../config/api";

export async function getHomeData() {
  return await instance.get(`/page/home/`);
}
export async function getTestimonials() {
  return await instance.get(`/page/testimonials/`);
}
export async function getContactInfo() {
  return await instance.get(`/page/contactus-info/`);
}
export async function getWhyUs() {
  return await instance.get(`/page/why-us/`);
}

// get delivery served areas
export async function getLocations() {
  return await instance.get(`/store/locations/`);
}

export async function saveQuote(data) {
  return await instance.post(`/store/quote/`, data);
}

export async function saveNewsLetter(data) {
  return await instance.post(`/store/news-letter/`, data);
}

export async function rentalsPeriods() {
  return await instance.get(`/store/rentals/`);
}

// get box packages product
export async function getBoxPackages(category, sub_cate, rental) {
  return await instance.get(
    `/store/products/${category}/${sub_cate}/${rental}/`
  );
}

export async function checkZipCode(data) {
  return await instance.post(`/store/check-zipcode/`, data);
}

// Select Moving And Packing Supplies

export async function getSelectMovings(category, sub_cate) {
  return await instance.get(`/store/products/${category}/${sub_cate}/`);
}

export async function getDeliverWindows() {
  return await instance.get(`/store/delivery-windows/`);
}

export async function getExtraWork() {
  return await instance.get(`/store/extra-work/`);
}
