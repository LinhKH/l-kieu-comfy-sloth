import React, { useContext, useEffect, useReducer } from 'react'

import filter_reducer from '../reducers/filter_reducer'
import {
    LOAD_PRODUCTS,
    SET_GRIDVIEW,
    SET_LISTVIEW,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS,
} from '../actions'

import { useProductsContext } from './products_context'

const initialState = {
    filtered_products: [],
    all_products: [],
    grid_view: true,
    sort: 'price-lowest',
    filters: {
        text: '',
        company: 'all',
        category: 'all',
        color: 'all',
        min_price: 0,
        max_price: 0,
        price: 0,
        shipping: false,
    },
}

const FilterContext = React.createContext()

export const FilterProvider = ({children}) => {

    const { products } = useProductsContext()

    const [state, dispatch] = useReducer(filter_reducer, initialState)

    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload: products })
    }, [products])

    useEffect(() => {
        dispatch({ type: FILTER_PRODUCTS })
    }, [state.filters])


    const updateFilters = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        switch (name) {
            case 'price':
                value = Number(value)
                break;
        }
        dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
    }

    return (
        <FilterContext.Provider
            value={{
                ...state,
                updateFilters
            }}
        >
            {children}
        </FilterContext.Provider>
    )
}

// make sure use
export const useFilterContext = () => {
    return useContext(FilterContext)
}
