import NotFoundPage from '@/app/not-found';
import { products } from '@/app/product-data';
import ProductItem from '@/components/products/ProductItem';
import Link from 'next/link';

export default async function ProductDetailPage({ params }:
    {params: Promise<{id: string}>}) {
    const id = (await params).id
    const product = products.find(product => product.id === id);

    if(!product) {
      return <NotFoundPage />
    }

    return (
        <>
          <h1 className='mb-4 text-4xl font-bold'>Product Detail</h1>
          <ProductItem product={product}/>

          <div className='mt-10 text-yellow-500' >
            <Link href='/products'>
              Back to Products
            </Link>
          </div>

        </>


    )
}
