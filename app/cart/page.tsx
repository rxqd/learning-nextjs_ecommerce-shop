'use client'

import { useState } from "react";
import { products } from "../product-data";
import ProductsList from "@/components/products/ProductsList";

export default function CartPage() {
    const [productIds] = useState(['123', '345']);
    const cartProducts = products.filter(product => productIds.includes(product.id));

    return (
        <>
            <h1>Shopping Cart</h1>
            <ProductsList products={cartProducts} />
        </>
    )
}
