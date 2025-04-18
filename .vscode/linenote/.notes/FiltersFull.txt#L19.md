### **Why are we using `state.global.isFiltersFullOpen` instead of `state.global.toggleFiltersFullOpen`?**  

The key reason is that **`toggleFiltersFullOpen` is an action (a function), not a state property**.  

---

### **1. Understanding State vs. Actions**
#### **State (`isFiltersFullOpen`)**
- **This is a piece of data stored in Redux**.
- It represents whether the filters panel is fully open (`true`) or closed (`false`).
- You **access it** using `state.global.isFiltersFullOpen`.

#### **Action (`toggleFiltersFullOpen`)**
- This is a **function** (defined inside the `reducers`).
- It **modifies the state** by toggling the value of `isFiltersFullOpen`.
- You **dispatch** it when you want to change the state, like this:
  ```ts
  dispatch(toggleFiltersFullOpen());
  ```

---

### **2. Difference Between Accessing and Modifying State**
| Action or State? | Purpose | How to Use |
|-----------------|---------|------------|
| `isFiltersFullOpen` | Stores whether the filter panel is open or closed | `useAppSelector((state) => state.global.isFiltersFullOpen);` |
| `toggleFiltersFullOpen` | A function that changes `isFiltersFullOpen` from `true` to `false` (or vice versa) | `dispatch(toggleFiltersFullOpen());` |

If you tried to do this:
```ts
const isFiltersFullOpen = useAppSelector((state) => state.global.toggleFiltersFullOpen);
```
🚨 **It would break because `toggleFiltersFullOpen` is a function, not a state value**.

---

### **3. Example of Proper Usage**
#### ✅ **Correct way to read the state**
```tsx
const isFiltersFullOpen = useAppSelector((state) => state.global.isFiltersFullOpen);
```
This retrieves the current value of `isFiltersFullOpen` from Redux.

#### ✅ **Correct way to update the state**
```tsx
const dispatch = useDispatch();

<button onClick={() => dispatch(toggleFiltersFullOpen())}>
  Toggle Filters
</button>
```
This **calls the action** `toggleFiltersFullOpen`, which **modifies the state**.

---

### **4. TL;DR**
- `isFiltersFullOpen` is **Redux state** → We access it using `useAppSelector`.
- `toggleFiltersFullOpen` is an **action** (a function) → We use `dispatch(toggleFiltersFullOpen())` to modify the state.
- We can **read the value** using `state.global.isFiltersFullOpen`, but we **cannot read** `toggleFiltersFullOpen` because it is a function, not a variable. 🚀



🧐🧐🧐🧐🧐🧐🧐🧐🧐🧐🧐🧐 where did we dfined the state 🧐🧐🧐🧐🧐🧐🧐🧐🧐🧐🧐🧐

### **Where is the state defined?**  
The state is defined inside the `initialState` object in this part of the code:

#### **1️⃣ `initialState` - This is where we define the default values for the state.**
```ts
export const initialState: InitialStateTypes = {
  filters: {
    location: "Los Angeles",
    bads: "any",
    baths: "any",
    propertyTypes: "any",
    amenities: [],
    availableFrom: "any",
    priceRange: [null, null],
    squareFeet: [null, null],
    coordinates: [-118.25, 34.05],
  },
  isFiltersFullOpen: false,  // 👈 This is the state we are selecting
  viewMode: "grid",
};
```
👉 Here, `isFiltersFullOpen` is initialized as `false`.  

---

#### **2️⃣ `globalSlice` - This is where we create the Redux slice (state + actions).**
```ts
export const globalSlice = createSlice({
  name: "global",
  initialState,  // 👈 This is where we assign the state
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<FiltersState>>) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
    toggleFiltersFullOpen: (state) => {
      state.isFiltersFullOpen = !state.isFiltersFullOpen;  // 👈 This updates the state
    },
    setViewMode: (state, action: PayloadAction<"grid" | "list">) => {
      state.viewMode = action.payload;
    },
  },
});
```
👉 `globalSlice` **connects** the `initialState` with actions that can modify it.

---

#### **3️⃣ `useAppSelector` - This is where we read the state.**
```ts
const isFiltersFullOpen = useAppSelector((state) => state.global.isFiltersFullOpen);
```
👉 This line **retrieves** the value of `isFiltersFullOpen` from Redux.

---

#### **4️⃣ `dispatch(toggleFiltersFullOpen())` - This is how we modify the state.**
```tsx
const dispatch = useDispatch();

<button onClick={() => dispatch(toggleFiltersFullOpen())}>
  Toggle Filters
</button>
```
👉 When the button is clicked, `toggleFiltersFullOpen` is called, **flipping** the `isFiltersFullOpen` value.

---

### **Summary**
✔ **State is defined in** `initialState`.  
✔ **Redux slice (`createSlice`) manages the state.**  
✔ **`useAppSelector` reads the state.**  
✔ **`dispatch(toggleFiltersFullOpen())` updates the state.**  

🔥 **Final Flow:**  
1️⃣ `initialState.isFiltersFullOpen = false`  
2️⃣ `useAppSelector` reads it (`false`).  
3️⃣ When `dispatch(toggleFiltersFullOpen())` runs, it flips to `true`.  
4️⃣ `useAppSelector` now reads `true`.  
5️⃣ UI updates accordingly. 🚀