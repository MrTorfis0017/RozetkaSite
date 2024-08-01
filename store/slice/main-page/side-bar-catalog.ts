import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {findSideBarCategories} from "@/app/api/main-page/api";
import StatusEnum from "@/types/status-enum";

const sideBarSlice = createSlice({
    name: 'sideBarSlice',
    initialState: {
        catalogList: [],
        status:StatusEnum.LOADING
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(findSideBarCategories.fulfilled, (state, action: PayloadAction<any>) => {
                state.catalogList = action.payload;
                state.status=StatusEnum.DONE;
            })
            .addCase(findSideBarCategories.pending, (state) => {
                state.status=StatusEnum.LOADING;
            })
            .addCase(findSideBarCategories.rejected, (state, action: PayloadAction<any>) => {
                state.status=StatusEnum.REJECTED;
            })
    },
});

export default sideBarSlice.reducer;
