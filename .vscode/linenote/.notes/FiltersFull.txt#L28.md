So when you do:  
```tsx
const updatedSearchParams = new URLSearchParams();
```
You’re **creating an instance** (a real object) based on the `URLSearchParams` class.  

---

### **WTF is `URLSearchParams()`?**  
It's a built-in JavaScript class that helps you **handle query parameters** in a URL.  

For example, if you have this URL:  
```
https://example.com/search?category=shoes&price=100
```
Using `URLSearchParams()`, you can easily **get, set, or delete** query parameters.

#### **Example Usage:**
```tsx
const params = new URLSearchParams("?category=shoes&price=100");

console.log(params.get("category")); // "shoes"
console.log(params.get("price"));    // "100"

params.set("price", "200");
console.log(params.toString()); // "category=shoes&price=200"

params.delete("category");
console.log(params.toString()); // "price=200"
```
🔥 **So basically, it makes working with URL parameters easy as hell.**  

---


🫱🫱🫱🫱🫱🫱
### **What Does `updatedSearchParams` Do?**
```tsx
const updatedSearchParams = new URLSearchParams();
```
This creates an **empty** query string manager.

Then, later in your loop:
```tsx
Object.entries(cleanFilters).forEach(([key, value]) => {
  updatedSearchParams.set(
    key,
    Array.isArray(value) ? value.join(",") : value.toString()
  );
});
```
- It **adds filters** as query params.  
- If a filter is an **array**, it joins it into a comma-separated string.  

### **Example of How This Works:**
#### **Before the loop:**
```tsx
const updatedSearchParams = new URLSearchParams();
```
Query string is empty.

#### **After setting filters dynamically:**
```tsx
updatedSearchParams.set("location", "NewYork");
updatedSearchParams.set("priceRange", "100,500");
```
Now `updatedSearchParams.toString()` will return:  
```
location=NewYork&priceRange=100,500
```
🔥 **This gets appended to your URL dynamically using `router.push()`!**  

---

### **Final Thought:**
- `URLSearchParams` is just a tool for **managing URL parameters** without manually messing with strings.  
- `updatedSearchParams` is an **instance** of it that holds your filters.  
- `set()` adds or updates parameters, and `toString()` turns them into a valid query string.  

Does this finally make sense, or do I need to summon more brain cells for a simpler explanation? 😂