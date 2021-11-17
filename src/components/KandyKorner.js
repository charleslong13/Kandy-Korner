import React from "react"
import { LocationList } from "./locations/locationList"
import {ProductList} from "./products/productList"

export const KandyKorner = () => {
    return (
        <>
        <h1>Kandy Korner</h1>
        <h2>Customer List</h2>
        
        <h2>Employee List</h2>
       
        <h2>Location List</h2>
        <LocationList />
        <h2>Product List</h2>
        <ProductList />
        </>
    )}