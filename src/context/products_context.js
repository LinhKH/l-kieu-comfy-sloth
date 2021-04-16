import React, { useContext, useEffect, useReducer } from 'react'

import axios from 'axios'
import products_reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import * as All from '../actions'

const initialState = {
    isSidebarOpen: false,
    products_loading: false,
    products_error: false,
    products: [],
    featured_products: [],
    single_product_loading: false,
    single_product_error: false,
    single_product: {},
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(products_reducer, initialState)

    const fetchProducts = async (url) => {
        dispatch({ type: All.GET_PRODUCTS_BEGIN})
        try {
            const response = await axios.get(url)
            const products = response.data
            dispatch({ type: All.GET_PRODUCTS_SUCCESS, payload: products})
        } catch (error) {
            dispatch({ type: All.GET_SINGLE_PRODUCT_ERROR})
        }
    }
    useEffect(() => {
        fetchProducts(url)
    }, [])
    return (
        <ProductsContext.Provider
            value={{
                ...state,
            }}>
            {children}
        </ProductsContext.Provider>
    )
}

// make sure use
export const useProductsProductsProvider = () => {
    return useContext(ProductsContext)
}
