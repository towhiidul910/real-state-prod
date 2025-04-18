1️⃣ What is reducerPath?
reducerPath is a unique key in the Redux store where RTK Query will store the API slice's cache and state.
Think of it as a namespace for your API data.


2️⃣ Why "api"?
"api" is just a convention. You can name it anything, but "api" is commonly used because it's short and meaningful.
If you change it to "authApi", "userApi", or "mySuperCoolAPI", you will need to use the same key when adding the reducer to your store.
4️⃣ What If We Don’t Use reducerPath?
RTK Query uses "api" by default if you don’t provide it.
But if you have multiple APIs, it’s best to set unique names (e.g., "userApi", "productApi") to avoid conflicts.