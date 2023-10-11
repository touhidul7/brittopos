import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"


const initialState = {
    addProduct:[],
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
        }
    },
})

export const { addToCart} = productSlice.actions

export default productSlice.reducer