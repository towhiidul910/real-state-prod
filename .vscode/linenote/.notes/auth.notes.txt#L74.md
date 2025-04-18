3. Calls different endpoints based on the role.
Code:

ts
Copy
Edit
const endpoint =
  userRole === "manager"
    ? `/managers/${user.userId}`
    : `/tenants/${user.userId}`;
Explanation:

Based on the userRole, this code determines the appropriate API endpoint to call.
If the user is a manager, it calls the /managers/{userId} endpoint.
If the user is a tenant, it calls the /tenants/{userId} endpoint.
This ensures that the correct data is fetched based on the user's role.