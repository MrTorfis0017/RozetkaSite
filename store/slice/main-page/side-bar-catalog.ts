import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import StatusEnum from "@/types/status-enum";
import Category from "@/types/category";
import {findSideBarCategories} from "@/app/_api/main-page/api";

type SideBarInitialState = {
    catalogList: Category[],
    status: StatusEnum
}

const sideBarSlice = createSlice({
    name: 'sideBarSlice',
    initialState: {
        catalogList: [],
        status: StatusEnum.LOADING
    } as SideBarInitialState,
    reducers: {
        resetState: (state) => {
            state.catalogList = [];
            state.catalogList = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(findSideBarCategories.fulfilled, (state, action: PayloadAction<any>) => {
                state.catalogList = action.payload;
                state.status = StatusEnum.DONE;
            })
            .addCase(findSideBarCategories.pending, (state) => {
                state.status = StatusEnum.LOADING;
            })
            .addCase(findSideBarCategories.rejected, (state, action: PayloadAction<any>) => {
                state.status = StatusEnum.REJECTED;
            })
    },
});

export const {
    resetState
} = sideBarSlice.actions

export default sideBarSlice.reducer;
