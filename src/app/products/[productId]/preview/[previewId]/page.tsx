import { notFound } from "next/navigation";

export default function ProductPreview({ 
    params,
  } : { 
     params : { 
        productId : string;
        previewId : string;
    };
  }) {
      if (parseInt(params.previewId) > 1000) {
         notFound();
      }
     return (
        <h2> 
          Details {params.previewId} Products {params.productId}
        </h2>

     );
 }