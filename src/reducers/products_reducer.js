
import * as All from '../actions'

/*
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
*/

const products_reducer = (state, action) => {
    // return new state
    switch (action.type) {
        case All.SIDEBAR_OPEN:
            return { ...state, isSidebarOpen: true }

        case All.GET_PRODUCTS_BEGIN:
            return { ...state, products_loading: true }

        case All.GET_PRODUCTS_SUCCESS:
            const featured_products = action.payload.filter(
                (product) => product.featured === true
            )
            return {
                ...state,
                products_loading: false,
                products: action.payload,
                featured_products,
            }
        case All.GET_PRODUCTS_ERROR:
            return { ...state, products_loading: false, products_error: true }

        default:
            throw new Error(`No Matching "${action.type}" - action type`);
    }
}

export default products_reducer
