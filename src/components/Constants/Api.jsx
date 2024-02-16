export const GET_PRODUCTS_CATEGORYWISE = (category) => {
    return `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=50&filter={"subCategory": "${category}"}`;
}
export const  SEARCH_PRODUCT_LIST=(value)=>{
    return `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={"name": "${value}"}`;

}
export const GET_PRODUCT_DETAILS = (id) => `https://academics.newtonschool.co/api/v1/ecommerce/product/${id}`;  
export const PRODUCT_REVIEW = (productid)=> `https://academics.newtonschool.co/api/v1/ecommerce/review/${productid}`;
