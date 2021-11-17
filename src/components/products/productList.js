import React, { useEffect, useState } from "react"

export const ProductList = () => {
    //declaring state variables, sets up a place to store state 
    //LocationList would  be called a component because its end results is html
    const [products, assignProducts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId&_order=asc")
                .then(products => products.json())
                .then((data) => {
                    assignProducts(data)
                })
        },
        []
    )
    return (
 
        <>
           
            {
                products.map(
                    (productObj) => {
                        return <p key={`product--${productObj.id}`}>{productObj.name} {productObj.productType.category}</p>
                    }
                )
            }
        </>
    )
}