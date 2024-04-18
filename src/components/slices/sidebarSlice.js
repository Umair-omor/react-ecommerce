import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLeftSideBarOn: false,
    isRightSideBarOn: false
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setLeftSideBarOn: (state) => {
            state.isLeftSideBarOn = true;
        },
        setLeftSideBarOff: (state) => {
            state.isLeftSideBarOn = false;
        },
        setRightSideBarOn: (state) => {
            state.isRightSideBarOn = true;
        },
        setRightSideBarOff: (state) => {
            state.isRightSideBarOn = false;
        },
        setBrand: (state, actions) => {
            // const brands = state.cart
        }
    },
});

export const {setLeftSideBarOn, setLeftSideBarOff, setRightSideBarOn, setRightSideBarOff } = sidebarSlice.actions;
export const getLeftSidebar = (state) => state.sidebar.isLeftSideBarOn;
export default sidebarSlice.reducer;
