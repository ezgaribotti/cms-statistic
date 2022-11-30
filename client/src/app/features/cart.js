import { createSlice } from "@reduxjs/toolkit";
import { addItem, cleanCart, removeItem, setPayer, setShowCartBar } from "../actions";

const initialState = {
    show: false,
    items: [],
    payer: {
        id: null,
        first_name: null,
        last_name: null,
    },
    total_amount: 0,
    total_items: 0,
};

const __init__ = createSlice({
    name: "cart",
    initialState: {
        payload: initialState
    },
    extraReducers: (builder) => {
        builder.addCase(setPayer, (state, action) => {
            state.payload.payer = action.payload;
        });
        builder.addCase(cleanCart, (state, action) => {
            state.payload = initialState;
        });
        builder.addCase(addItem, (state, action) => {
            let index = state.payload.items.findIndex(x => x.id === action.payload.id);
            if (index < 0) {
                state.payload.items.push({ ...action.payload, quantity: 1, product_id: action.payload.id });

            } else {
                state.payload.items[index].quantity += 1;
            }
            state.payload.total_amount += action.payload.unit_price;
            state.payload.total_items += 1;
        });
        builder.addCase(removeItem, (state, action) => {
            let index = state.payload.items.findIndex(x => x.id === action.payload.id);
            if (state.payload.items[index].quantity > 1) {
                state.payload.items[index].quantity -= 1;
            
            } else {
                state.payload.items.splice(index, 1);
            }
            state.payload.total_amount -= action.payload.unit_price;
            state.payload.total_items -= 1;
        });
        builder.addCase(setShowCartBar, (state, action) => {
            state.payload.show = action.payload;
        });
    }
});

export default __init__.reducer;
