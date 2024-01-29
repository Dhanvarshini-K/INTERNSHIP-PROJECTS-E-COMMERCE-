import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
interface FormDataState {
  name: string;
  phoneNumber: string;
  address: string;
}
const initialFormData: FormDataState = {
  name: 'Sofia Harvertz',
  phoneNumber: '(+1) 234 567 890',
  address: ' 345 Long Island, NewYork, United states',
};
// Create a slice with a reducer for the form data
const formDataSlice = createSlice({
  name: "formData",
  initialState: initialFormData,
  reducers: {
    updateFormData: (state, action: PayloadAction<Partial<FormDataState>>) => {
      return { ...state, ...action.payload };
    },
  },
});
// Extract the action creator from the slice
export const { updateFormData } = formDataSlice.actions;
// Create the Redux store using configureStore
const store = configureStore({
  reducer: {
    formData: formDataSlice.reducer,
  },
});
export default store;






