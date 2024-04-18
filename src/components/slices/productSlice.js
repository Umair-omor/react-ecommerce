import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../others/apiUrl/ApiUrl";

const initialState = {
    products: [],
    productsLoading: false,
    productsError: null,
    singleProduct: [],
    si_pro_Loading: false,
    si_pro_error: null,

    category_paylod: 'all',
    brands_paylod: 'all',
    sorting_Value: 'default',
    search_value: '',
}

export const fetchProducts = createAsyncThunk('products/fetch', async (limit) => {
    try {
        const response = await fetch(`${API}products?limit=${limit}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
});


const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setcategory: (state, action) => {
            state.category_paylod = action.payload;
          
        },
        setBrand: (state, action) => {
            state.brands_paylod = action.payload;
          
        },
        setSelectValue: (state, action) => {
            state.sorting_Value = action.payload;
          
        },
        setSearchValue: (state, action) => {
            state.search_value = action.payload;
        },
        setReset_All: (state, action) => {
            state.category_paylod = 'all';
            state.brands_paylod = 'all';
            state.sorting_Value = 'default';
            state.search_value = '';
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.productsLoading = true;
            state.error = null;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.productsLoading = false;
            state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.productsLoading = false;
            state.productsError = action.error.message;
        })
    },
    
});

export const { sortByBrand, setcategory, setBrand, setSelectValue, setSearchValue, setReset_All} = productSlice.actions;
export default productSlice.reducer;




export const selectSortedProducts = (state) => {
    const { products, sorting_Value } = state.products;
    const pro = products.products;
    // console.log(pro, sorting_Value);
    
    if (sorting_Value === 'lowtohigh') {
      return pro?.slice().sort((a, b) => a.price - b.price);
    } else if (sorting_Value === 'hightolow') {
      return pro?.slice().sort((a, b) => b.price - a.price);
    } else if (sorting_Value === 'atoz') {
      return pro?.slice().sort((a, b) => a.title.localeCompare(b.title));
    } else if (sorting_Value === 'ztoa') {
      return pro?.slice().sort((a, b) => b.title.localeCompare(a.title));
    } else if (sorting_Value === 'default') {
        return pro;
    } else {
      return pro;
    }
};

//     if (sorting_Value === 'lowtohigh') {
//         return pro.slice().sort((a, b) => a.price - b.price);
//     } 
//     else if (sorting_Value === 'hightolow') {
//         return pro.slice().sort((a, b) => b.price - a.price);
//     } 
//     else if (sorting_Value === 'atoz') {
//         return pro.slice().sort((a, b) => a.name.localeCompare(b.name));
//     } 
//     else if (sorting_Value === 'ztoa') {
//         return pro.slice().sort((a, b) => b.name.localeCompare(a.name));
//     }
//     else if (sorting_Value === 'default') {
//         return pro;
//     } else {
//         return pro;
//     }
//   };


//   "default">Default</option>
//   <option value="atoz">a-z</option>
//   <option value="ztoa">z-a</option>
//   <option value="lowtohigh">price low To High</option>
//   <option value="hightolow"

//   export const selectSortedProducts = (state) => {
//     const { products, sorting_value } = state.posts;
//     console.log(products)
//     console.log(products)
  
//     if (sorting_value === 'lowToHigh') {
//       return products.slice().sort((a, b) => a.price - b.price);
//     } else if (sorting_value === 'highToLow') {
//       return products.slice().sort((a, b) => b.price - a.price);
//     } else if (sorting_value === 'aToZ') {
//       return products.slice().sort((a, b) => a.name.localeCompare(b.name));
//     } else if (sorting_value === 'zToA') {
//       return products.slice().sort((a, b) => b.name.localeCompare(a.name));
//     } else {
//       return products;
//     }
// };







