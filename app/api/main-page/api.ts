import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const findSideBarCategories = createAsyncThunk<string[], void>(
    'sale/findPrograms',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios({
                method: 'get',
                url: '/api/catalog/find-categories-sidebar'
            });
            return response.data
        } catch (error) {
            return rejectWithValue({
                message: `Failed to get data from server. ${(error as Error).message}`,
            });
        }
    },
);