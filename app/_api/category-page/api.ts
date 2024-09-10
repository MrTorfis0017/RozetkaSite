import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const findSliderImages = createAsyncThunk<string[], number>(
    'slider/findImages',
    async (id, {rejectWithValue}) => {
        try {
            const response = await axios({
                method: 'get',
                url: `/api/images/${id}/find-slider-images`
            });
            return response.data as string[];
        } catch (error) {
            return rejectWithValue({
                message: `Failed to get data from server. ${(error as Error).message}`,
            });
        }
    },
);

export const getNameById = createAsyncThunk<string, number>(
    'slider/getNameById',
    async (id, {rejectWithValue}) => {
        try {
            const response = await axios({
                method: 'get',
                url: `/api/category/getNameById/${id}`
            });
            return response.data as string;
        } catch (error) {
            return rejectWithValue({
                message: `Failed to get data from server. ${(error as Error).message}`,
            });
        }
    },
);

export const findSubcategoriesById = createAsyncThunk<string[], number>(
    'subcategory/findSubcategoriesById',
    async (id, {rejectWithValue}) => {
        try {
            const response = await axios({
                method: 'get',
                url: `/api/category/find-subcategories/${id}`
            });
            return response.data as string[];
        } catch (error) {
            return rejectWithValue({
                message: `Failed to get data from server. ${(error as Error).message}`,
            });
        }
    },
);