useAppSelector() is a custom hook, most likely a wrapper around useSelector from Redux Toolkit (RTK).
which is in client\src\state\redux.tsx


1. Understanding useAppSelector
useAppSelector is a custom hook, most likely a wrapper around useSelector from Redux Toolkit (RTK).
It is used to access a specific piece of state from the Redux store.
Instead of useSelector, you often create useAppSelector to enforce stronger TypeScript support.

2. What is (state) => state.global.isFiltersFullOpen doing?

// state → This represents the entire Redux store state.

// state.darkMode → This accesses the darkMode slice in the store.

// state.darkMode.isDarkMode → This retrieves the boolean value (true or false) stored inside the darkMode slice.

// isFiltersFullOpen = useAppSelector((the entire redux store state) => the entire redux store state.This accesses the darkMode slice in the store.retrieves the boolean value stored inside the darkMode slice);
