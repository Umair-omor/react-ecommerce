import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    // carts:[],
    carts: JSON.parse(localStorage.getItem('cartItems')) || [],
    // cartNumber: 0,
    cartNumber: JSON.parse(localStorage.getItem('cartNumber')) || 0,
    cartTotalPrice: 0

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart: (state, action) => {
            // state.carts.push(action.payload);
            // state.cartNumber = state.carts.length;
            // -----------------------------------------------
            const existingCart = state.carts.find(item => item.id === action.payload.id);
            if(existingCart) {
                const updateCart = state.carts.map(item => {
                    if(item.id === action.payload.id) {
                        let newQuentity = Number(item.quantity) + Number(action.payload.quantity);
                        let newTotalPrice = newQuentity * item.discountPrice;
                        if(newQuentity >= item.stock) {
                            newQuentity = item.stock;
                            newTotalPrice = newQuentity * item.discountPrice;
                        };
                        // let newTotalPrice = newQuentity * item.discountPrice;
                        return{
                            ...item, quantity: newQuentity, totalPrice: newTotalPrice
                        }
                    } else {
                        return item;
                    }
                });
                state.carts = updateCart;
                localStorage.setItem('cartItems', JSON.stringify(state.carts));
            } else {
                state.carts.push(action.payload);
                localStorage.setItem('cartItems', JSON.stringify(state.carts));
            }
            // --------------------------------------end
            state.cartNumber = state.carts.length;
            localStorage.setItem('cartNumber', JSON.stringify(state.cartNumber));
            // --------------------------------------end
            // let sum = state.carts.reduce((previousValue, currentValue, preIndex, arr) => {
            //     return previousValue + currentValue.totalPrice
            // }, 0);
            // state.cartTotalPrice = sum

            localStorage.setItem('cartItems', JSON.stringify(state.carts));
        },
        updateCArtQuen: (state, action) => {
            const updateCart = state.carts.map(item => {
                if(item.id === action.payload.id) {
                    let newcartQuen = item.quantity;
                    let newcartPrice = newcartQuen * item.discountPrice;

                    if(action.payload.type === "INC") {
                        newcartQuen++;
                        newcartPrice = newcartQuen * item.discountPrice;
                        if(newcartQuen >= item.stock) {
                            newcartQuen = item.stock;
                            newcartPrice = newcartQuen * item.discountPrice;
                        } 
                    }

                    if(action.payload.type === "DEC") {
                        // newcartQuen--;
                        // let newcartPrice = newcartQuen * item.discountPrice;
                        if(newcartQuen <= 1) {
                            newcartQuen = 1;
                            newcartPrice = newcartQuen * item.discountPrice;
                        } else {
                            newcartQuen--;
                            newcartPrice = newcartQuen * item.discountPrice;
                        }
                    }

                    if(action.payload.type === 'INPU') {
                        if(newcartQuen !== action.payload.quen) {
                            // newcartQuen = action.payload.quen;
                            newcartQuen = action.payload.quen;
                            // newcartQuen = item.quantity + action.payload.quen;
                            newcartPrice = newcartQuen * item.discountPrice;

                            if(action.payload.quen < 1 ) {
                                newcartQuen = 1;
                                newcartPrice = newcartQuen * item.discountPrice;
                            } 
                            if(action.payload.quen >= item.stock) {
                                newcartQuen = item.stock;
                                newcartPrice = newcartQuen * item.discountPrice;
                            } 
                        } else {
                            newcartQuen = action.payload.quen;
                            newcartPrice = newcartQuen * item.discountPrice;
                        }
                    }


                    return {...item, quantity: newcartQuen, totalPrice:newcartPrice};
                } else {
                    return item;
                }
            });
            state.carts = updateCart;
            localStorage.setItem('cartItems', JSON.stringify(state.carts));
            // --------------------------------------end
            // let sum = state.carts.reduce((previousValue, currentValue, preIndex, arr) => {
            //     return previousValue + currentValue.totalPrice
            // }, 0);
            // state.cartTotalPrice = sum;
        },
        clearCart: (state, action) => {
            state.carts = [];
            localStorage.setItem('cartItems', JSON.stringify(state.carts));

            state.cartNumber = state.carts.length;
            localStorage.setItem('cartNumber', JSON.stringify(state.cartNumber));
            
        },
        removeFromCart: (state, action) => {
            state.carts = state.carts.filter(item => item.id !== action.payload);
            localStorage.setItem('cartItems', JSON.stringify(state.carts));
            
            state.cartNumber = state.carts.length;
            localStorage.setItem('cartNumber', JSON.stringify(state.cartNumber));
            // --------------------------------------end
            // let sum = state.carts.reduce((previousValue, currentValue, preIndex, arr) => {
            //     return previousValue + currentValue.totalPrice
            // }, 0);
            // state.cartTotalPrice = sum;
        },
        // cartTotal: (state, action) => {
        //     let sum = state.carts.reduce((previousValue, currentValue, preIndex, arr) => {
        //         return previousValue + currentValue.totalPrice
        //     }, 0);
        //     state.cartTotalPrice = state.cartTotalPrice.push(sum);
        // }
    }
});

export const { addtoCart, updateCArtQuen, clearCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;


