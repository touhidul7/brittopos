import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"


const initialState = {
    addProduct: [],
    productData: [],
    userInfo: null,
    payment: [],
}

export const productSlice = createSlice({
    name: 'posCart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const check = state.productData.find(item => item.id === action.payload.id)
            if (check) {
                toast.error('Already this product in cart')
            } else {
                state.productData.push(action.payload)
                toast.success('Add to cart successfully!')
            }
        },
        increment: (state, action) => {
            const check = state.productData.find(item => item.id === action.payload.id)
            if (check) {
                check.quantity = check.quantity + 1
            }
        },
        decrement: (state, action) => {
            const check = state.productData.find(item => item.id === action.payload.id)
            if (check.quantity === 1) {
                check.quantity = 1
            } else {
                check.quantity = check.quantity - 1
            }
        },
        removeCart: (state, action) => {
            state.productData = state.productData.filter(item => item.id !== action.payload.id)
        },
        resetData: (state) => {
            state.productData = [];
        },
        addProduct: (state, action) => {
            const checkProduct = state.addProduct.find(item => item.title === action.payload.title)
            if (checkProduct) {
                toast.error('Product name already avaiable')
            } else {
                state.addProduct.push(action.payload)
                toast.success('Product added successfully!')
            }
        },
        removeProduct: (state, action) => {
            state.addProduct = state.addProduct.filter(item => item.id !== action.payload.id)
        },
    },
})

export const { addToCart, increment, decrement, removeCart, resetData, addProduct, removeProduct } = productSlice.actions

export default productSlice.reducer