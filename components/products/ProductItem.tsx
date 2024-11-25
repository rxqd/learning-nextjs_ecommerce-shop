import Image from 'next/image';
import { Product } from '@/app/product-data';

export default function ProductItem({ product }: {product: Product}) {
    return (
        <>
            <Image src={'/' + product.imageUrl}
                   width={150}
                   height={150}
                   alt="Product Image"/>
            <h2 className='text-3xl text-amber-200'>{product.name}</h2>
            <p className='text-blue-500'>{'$' + product.price}</p>
            <p className='text-blue-400'>{product.description}</p>
        </>
    )
}
