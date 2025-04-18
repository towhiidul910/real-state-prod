in client\src\state\index.ts 
in global slice
we initial the initialState 
2. then create reducers for filters 
3. filters and setFilters diffrence 
3. filters has the current object or current things (i dont know wht to call it , but it is initilaState or the last updated "thing or object?" ) 
4. so we create the reducers (what is reducres : this is wehere we give the state a actions , update or do something else , gpt can you say what is reducrs accally what diffrent thing we can do with it?)
5. so in reducres we need to update the last value with the updated value from the value ui will give thrugh handleFilterChange from client\src\app\(nondashboard)\search\FiltersFull.tsx 
6. so finally we create that setFilters , we gonna take two thing (dont know what to call them ) and why this  action: PayloadAction<Partial<FiltersState>> here i mean (PayloadAction<Partial<FiltersState>>), 
7. state → The current Redux state (before the update).
8. state.filters → The filters object inside state.: mening fulters current redux state before update
9. action → The action dispatched to update the Redux state.
10. action.payload → The data sent with the action (which we want to merge into filters). this is the data well be our new data?

       
11. but why we did   ...state.filters, and ...action.payload, if ...action.payload, is the one will take change the data and store it in filters 