import Link from 'next/link';
import { Product } from '@/app/product-data';
import ProductsListItem from './ProductsListItem';

export default function ProductsList({ products }: {products: Product[]}) {
    return (
        <>
         {products.map(product => (
            <Link key={product.id} href={'/products/' + product.id}>
               <ProductsListItem product={product} />
            </Link>
         ))}
        </>
    )
}
