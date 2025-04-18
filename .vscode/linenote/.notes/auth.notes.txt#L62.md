### **How Multiple APIs Work in RTK Query**  

When you have multiple APIs in an RTK Query setup, you need to:  
1. **Create separate API slices** (e.g., `authApi`, `userApi`, `productApi`).  
2. **Register each API reducer with a unique `reducerPath`** in the Redux store.  
3. **Add middleware for each API** to enable caching and background fetching.

---

### **1️⃣ Creating Multiple API Slices**  
You would define separate API slices like this:  

#### **🔹 `authApi.ts` - Handles Authentication API Calls**
```ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi", // Unique reducerPath
  baseQuery: fetchBaseQuery({ baseUrl: "/auth" }),
  endpoints: (build) => ({
    login: build.mutation<{ token: string }, { email: string; password: string }>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getAuthUser: build.query<{ user: any }, void>({
      query: () => "/me",
    }),
  }),
});

export const { useLoginMutation, useGetAuthUserQuery } = authApi;
```

---

#### **🔹 `userApi.ts` - Handles User Data API Calls**
```ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi", // Different from authApi
  baseQuery: fetchBaseQuery({ baseUrl: "/users" }),
  endpoints: (build) => ({
    getUserDetails: build.query<{ name: string; role: string }, { userId: string }>({
      query: ({ userId }) => `/details/${userId}`,
    }),
  }),
});

export const { useGetUserDetailsQuery } = userApi;
```

---

#### **🔹 `productApi.ts` - Handles Product-Related API Calls**
```ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi", // Unique path
  baseQuery: fetchBaseQuery({ baseUrl: "/products" }),
  endpoints: (build) => ({
    getAllProducts: build.query<{ id: number; name: string }[], void>({
      query: () => "/",
    }),
  }),
});

export const { useGetAllProductsQuery } = productApi;
```

---

### **2️⃣ Registering APIs in the Redux Store**  
Once you have multiple API slices, you must **add them to your store** under their respective `reducerPath` values:

```ts
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import { userApi } from "./services/userApi";
import { productApi } from "./services/productApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(userApi.middleware)
      .concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

---

### **3️⃣ Using APIs in Components**  
Now that multiple APIs are registered, you can **use them in different components**:  

#### **🔹 Example: Login Component (Uses `authApi`)**
```tsx
import { useLoginMutation } from "@/services/authApi";

export default function Login() {
  const [login, { data, error, isLoading }] = useLoginMutation();

  const handleLogin = async () => {
    await login({ email: "test@email.com", password: "password123" });
  };

  return (
    <div>
      <button onClick={handleLogin} disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </button>
      {error && <p>Error: {error.message}</p>}
      {data && <p>Token: {data.token}</p>}
    </div>
  );
}
```

#### **🔹 Example: User Profile (Uses `userApi`)**
```tsx
import { useGetUserDetailsQuery } from "@/services/userApi";

export default function Profile({ userId }: { userId: string }) {
  const { data, error, isLoading } = useGetUserDetailsQuery({ userId });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading user data</p>;

  return <h2>Welcome, {data?.name} - Role: {data?.role}</h2>;
}
```

#### **🔹 Example: Product List (Uses `productApi`)**
```tsx
import { useGetAllProductsQuery } from "@/services/productApi";

export default function ProductList() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products</p>;

  return (
    <ul>
      {data?.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
```

---

### **📌 Key Takeaways**
✅ **Separate API slices** (`authApi`, `userApi`, `productApi`) for **better modularity**.  
✅ Each API slice has its own `reducerPath` (e.g., `"authApi"`, `"userApi"`, `"productApi"`).  
✅ The store registers **each API separately** and adds its middleware.  
✅ Components **only import what they need**, keeping concerns separate.  

---

### **🔥 TL;DR**
- **Why multiple APIs?** For **better separation of concerns** (Auth, Users, Products).  
- **Why different `reducerPath` values?** To **avoid conflicts** in Redux state.  
- **How does it work?** Each API slice stores its **own cache & endpoints** under a unique name in Redux.  

Would you like me to optimize something further? 🚀