
export const findPrograms = createAsyncThunk<DealerProgram, void, { rejectValue: ApiError }>(
    'sale/findPrograms',
    async (_, { rejectWithValue }) => {
        try {
            const url = '/api/dealer-programs';
            const response = await fetch(url, { method: 'GET' });
            if (!response.ok) {
                return rejectWithValue({
                    message: `Response is ${response.status}`,
                });
            }
            return await response.json() as DealerProgram;
        } catch (error) {
            return rejectWithValue({
                message: `Failed to get data from server. ${(error as Error).message}`,
            });
        }
    },
);