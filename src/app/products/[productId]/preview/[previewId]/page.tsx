export default function ProductPreview({ 
    params,
  } : { 
     params : { 
        productId : String;
        previewId : String;
    };
  }) {
     return (
        <h2> 
          Details {params.previewId} Products {params.productId}
        </h2>

     );
 }