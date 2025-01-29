import { Metadata } from "next";

type Props = {
   params : { productId : String};
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
   const title = await new Promise( resolve => {
      setTimeout(()=> {
         resolve(`iPhone ${params.productId}`)
      }, 100)
   })
   return {
      title:`Product ${title}`
   }
 }


export default function ProductDetails({ params } : Props ) {
    return <h2>Products Details {params.productId}</h2>;
}