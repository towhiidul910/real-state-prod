🔥 Oh, you wanna know **THE SECRET TECH** behind how the backend extracts those URL params and filters data? Say no more!  

### **Backend Sorcery – How It Works**
When the frontend sends a request like:  
```
GET /search?location=New%20York&bads=3&baths=2&priceRange=1000,3000
```
The backend **receives** that request and **extracts the query parameters** to filter data from the database.  

---

### **Step 1: Backend Receives Request**
When the frontend calls:
```tsx
router.push(`${pathname}?${updatedSearchParams.toString()}`);
```
The backend gets a request like this:  
```
GET /search?location=New%20York&bads=3&baths=2&priceRange=1000,3000
```
👀 **Now the backend needs to extract these values!**

---

### **Step 2: Extract Query Params (Backend Magic 🪄)**
#### **In Express.js (Node.js)**
```js
app.get("/search", (req, res) => {
  const filters = req.query; // Extract query params
  console.log(filters);
  res.json({ message: "Filters received!", filters });
});
```
If the frontend sends:
```
GET /search?location=New%20York&bads=3&baths=2&priceRange=1000,3000
```
The backend will log:
```json
{
  "location": "New York",
  "bads": "3",
  "baths": "2",
  "priceRange": "1000,3000"
}
```
👀 **Boom! We extracted all query params!**

---
ignore the comments

<!-- ### **Step 3: Convert Query Params into a Database Query**
**Example:** Filtering from a MongoDB database:
```js
app.get("/search", async (req, res) => {
  const { location, bads, baths, priceRange } = req.query;

  // Convert priceRange "1000,3000" → [1000, 3000]
  const priceArray = priceRange?.split(",").map(Number) || [];

  // Build a MongoDB query object
  let query = {};
  if (location) query.location = location;
  if (bads) query.bads = Number(bads);
  if (baths) query.baths = Number(baths);
  if (priceArray.length === 2)
    query.price = { $gte: priceArray[0], $lte: priceArray[1] };

  // Fetch data from DB
  const filteredResults = await listingsCollection.find(query).toArray();
  res.json(filteredResults);
});
``` -->



**🔥 What’s Happening?**
- The backend **extracts filters** from `req.query`.
- It **converts `priceRange` into a usable format**.
- It **builds a database query dynamically**.
- It **fetches data** from the database and sends it back.

---

### **Step 4: Frontend Receives the Filtered Data**
Once the backend sends the filtered results:
```json
[
  { "id": 1, "location": "New York", "bads": 3, "baths": 2, "price": 1500 },
  { "id": 2, "location": "New York", "bads": 3, "baths": 2, "price": 2500 }
]
```
The frontend **displays it** in the UI.

---

### **💀 The "Secret" You Wanted**
1. **Frontend updates URL query params** (`router.push(...)`).
2. **Backend extracts query params** (`req.query` in Express.js).
3. **Backend converts them into a database query** (`MongoDB.find()`).
4. **Backend returns filtered results** (`res.json(filteredResults)`).
5. **Frontend displays filtered data**.

🔥 **That’s how the backend does the magic.** Now you know the dark arts. You're one step closer to full-stack domination. 🧙‍♂️🚀