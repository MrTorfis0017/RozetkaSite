import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import StatusEnum from "@/types/status-enum";
import {findSliderImages, findSubcategoriesById, getNameById} from "@/app/_api/category-page/api";
import Category from "@/types/category";

type CategoryInitialState = {
    categoryList: Category[];
    header: string;
    slideBarImages: string[];
    loadStatus: StatusEnum[];
    allRequestsComplete: boolean;
}

const categorySlice = createSlice({
    name: 'categorySlice',
    initialState: {
        categoryList: [],
        header: '',
        slideBarImages: [],
        loadStatus: [StatusEnum.LOADING, StatusEnum.LOADING],
        allRequestsComplete: false
    } as CategoryInitialState,
    reducers: {
        resetState: (state) => {
            state.categoryList = [];
            state.header = '';
            state.slideBarImages = [];
            state.loadStatus = state.loadStatus.map(() => {
                return StatusEnum.LOADING;
            });
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(findSubcategoriesById.fulfilled, (state, action: PayloadAction<any>) => {
                state.categoryList = action.payload;
                updateLoadStatus(state, StatusEnum.DONE);
            })
            .addCase(findSubcategoriesById.pending, (state) => {
                updateLoadStatus(state, StatusEnum.LOADING);
            })
            .addCase(findSubcategoriesById.rejected, (state, action: PayloadAction<any>) => {
                updateLoadStatus(state, StatusEnum.REJECTED);
            })
            .addCase(getNameById.fulfilled, (state, action: PayloadAction<any>) => {
                state.header = action.payload;
                updateLoadStatus(state, StatusEnum.DONE);
            })
            .addCase(getNameById.pending, (state) => {
                updateLoadStatus(state, StatusEnum.LOADING);
            })
            .addCase(getNameById.rejected, (state, action: PayloadAction<any>) => {
                updateLoadStatus(state, StatusEnum.REJECTED);
            })
            .addCase(findSliderImages.fulfilled, (state, action: PayloadAction<any>) => {
                state.slideBarImages = action.payload;
                updateLoadStatus(state, StatusEnum.DONE);
            })
            .addCase(findSliderImages.pending, (state) => {
                updateLoadStatus(state, StatusEnum.LOADING);
            })
            .addCase(findSliderImages.rejected, (state, action: PayloadAction<any>) => {
                updateLoadStatus(state, StatusEnum.REJECTED);
            })
    },
});

const updateLoadStatus = (state: any, status: StatusEnum) => {
    for (let i = 0; i < state.loadStatus.length; ++i) {
        if (state.loadStatus[i] !== status) {
            state.loadStatus[i] = status;
            break;
        }
    }
    const allDone = state.loadStatus.every(
        (status: StatusEnum) => status === StatusEnum.DONE || status === StatusEnum.REJECTED
    );

    state.allRequestsComplete = allDone;
}

export const {
    resetState
} = categorySlice.actions

export default categorySlice.reducer;
