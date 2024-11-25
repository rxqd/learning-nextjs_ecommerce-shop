import Image from 'next/image';
import { Product } from '@/app/product-data';


export default function ProductsList({ products }: {products: Product[]}) {
    return (
        <>
         {products.map(product => (
            <div key={product.id}>
               <Image src={'/' + product.imageUrl} width={150} height={150} alt="Product Image"/>
               <h2>{product.name}</h2>
               <p>{'$' + product.price}</p>
            </div>
         ))}
        </>
    )
}
