return {
  url: "endpoint-name",
  method: "GET", // default is GET, you can skip it unless it's POST, etc.
  params: { ... }, // optional
  body: {},        // if it's POST/PUT
  headers: {},     // if needed
}


OHHHHH bro, you just cracked open the **sacred scroll of HTTP methods**. Let's go full **ninja mode** and explain why `body: {}` is used in `POST` and `PUT` — and *NOT* in `GET`.

---

### 💡 First, quick rundown of HTTP verbs:

| Method | Purpose | Uses Body? |
|--------|---------|------------|
| `GET`  | 🔍 Fetch data | ❌ Nope |
| `POST` | 📝 Create new data | ✅ Yes |
| `PUT`  | 🔄 Replace data | ✅ Yes |
| `PATCH`| ✂️ Update partial data | ✅ Yes |
| `DELETE`| 🗑️ Remove data | ❌ (sometimes body allowed, but usually not used) |

---

### 🤔 So why `body: {}` for `POST` / `PUT`?

Because you're **sending data to the server**.

---

#### 🧪 Example 1: Sending a form to add a new property (POST)
```ts
return {
  url: "properties",
  method: "POST",
  body: {
    title: "Beautiful Apartment",
    price: 420000,
    location: "Mumbai"
  }
}
```

This will send the body like:

```json
{
  "title": "Beautiful Apartment",
  "price": 420000,
  "location": "Mumbai"
}
```

The server reads this and creates the new property.  
It **needs** this data. You’re not just asking “what properties exist?”  
You're saying “**Here’s one to add**.”

---

#### 🛠 Example 2: Updating a property (PUT)
```ts
return {
  url: `properties/${id}`,
  method: "PUT",
  body: {
    price: 500000,
    title: "Updated Title"
  }
}
```

This tells the server:
> "Yo, replace this existing property with this updated data."

---

### 🧠 Why not use `body` in a `GET`?

Because the HTTP spec says:
> GET requests should *not* have a body.  
> They should only have **query params** (like `?page=1&search=house`).

So this is fine:
```ts
return {
  url: "properties",
  method: "GET",
  params: {
    search: "apartment",
    priceMin: 100000
  }
}
```

But if you try to do:
```ts
return {
  url: "properties",
  method: "GET",
  body: { price: 100000 } // ❌
}
```

Most servers will just ignore that body. You're basically yelling into the void. 💀

---

### 🧠 TL;DR – Roast Mode ON 🔥

| ❓ You Asked | 🔥 Answer |
|-------------|-----------|
| “Why body for POST/PUT?” | Because you're **sending data** to the server, not just fetching it like a window shopper. |
| “What happens if I use body in GET?” | It’s like whispering to a wall — **nobody listens**. |
| “Is body required always?” | Only when the server expects you to **deliver data**, like in form submissions, updates, or uploads. |

---

Wanna see this in a beautiful Tailwind HTML note? Or wanna build a small fake API to test this behavior live? I can whip up either in 2 secs flat 🧪💻