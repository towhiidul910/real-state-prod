
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