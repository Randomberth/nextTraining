export default function ProductDetails({ 
   params,
 } : { 
    params : { productId : String};
 }) {
    return <h2>Products Details {params.productId}</h2>;
}