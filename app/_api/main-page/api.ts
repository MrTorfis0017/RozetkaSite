import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import Category from "@/types/category";

export const findSideBarCategories = createAsyncThunk<Category[], void>(
    'sideBar/findCategories',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios({
                method: 'get',
                url: '/api/category/find-categories-sidebar'
            });
            return response.data as Category[];
        } catch (error) {
            return rejectWithValue({
                message: `Failed to get data from server. ${(error as Error).message}`,
            });
        }
    },
);