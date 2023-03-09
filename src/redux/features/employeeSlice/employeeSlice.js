import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteEmployeeById, fetchAllDataEmployee, fetchCreateEmployee, fetchDataEmployeeById, fetchUpdateEmployeeById } from "../../../apis/employeeApi";




const initialState = {
    allEmployee: [],
    employee: {},
    isLoading: false,
    isLoadingCreate: false,
    errors: {},
}
    

export const actFetchAllEmployee = createAsyncThunk('employee/actFetchAllEmployee', async () => {
    const data = await fetchAllDataEmployee();
    return data || []
})

export const actFetchEmployeeById = createAsyncThunk(`employee/actFetchEmployeeById`, async (id) => {
    const employee = await fetchDataEmployeeById(id)
    return employee
})
export const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        actUpdateLoadingCreate: (state, action) => {
            state.isLoadingCreate = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actFetchAllEmployee.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(actFetchAllEmployee.rejected, (state) => {
            state.errors = {
                errors: "ERROR 404!"
            };
            state.isLoading = false;
        });
        builder.addCase(actFetchAllEmployee.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allEmployee = action.payload || [];
     
        });

        builder.addCase(actFetchEmployeeById.fulfilled,  (state, action) => {
            state.isLoading = false;
            state.employee = action.payload || {};
        })
    },
});

export const actCreateEmployee = (employee) => async (dispatch) => {
    try {
        dispatch(actUpdateLoadingCreate(true));
        await fetchCreateEmployee(employee);
        dispatch(actFetchAllEmployee());
    } catch (error) {
        console.log(error);
    } finally {
        dispatch(actUpdateLoadingCreate(false));
    }
}

export const actDeleteEmployee = (id) => async (dispatch) => {
    try {
        await deleteEmployeeById(id)
        dispatch(actFetchAllEmployee())
    } catch (error) {
        console.log(error);
    } finally {
        dispatch(actUpdateLoadingCreate(false))
    }
}

export const actUpdateEmployee = (id, employee) => async (dispatch) => {
    try {
        dispatch(actUpdateLoadingCreate(true));
        await fetchUpdateEmployeeById(id, employee);
        await dispatch(actFetchAllEmployee());
    } catch (error) {
        console.log(error);
    } finally {
        dispatch(actUpdateLoadingCreate(false))
    }
}
export const {actUpdateLoadingCreate} = employeeSlice.actions
export default employeeSlice.reducer