4. If the user doesn't exist (404), it creates a new user in the database.
Code:

ts
Copy
Edit
let userDetailsResponse = await fetchWithBQ(endpoint);

if (
  userDetailsResponse.error &&
  userDetailsResponse.error.status === 404
) {
  userDetailsResponse = await createNewUserInDatabase(
    user,
    idToken,
    userRole,
    fetchWithBQ
  );
}
Explanation:

Step 1: The API request is made to the appropriate endpoint (/managers/{userId} or /tenants/{userId}) to fetch the user's details.
Step 2: If the response has an error (and the error is a 404), it means the user wasn't found in the database.
Step 3: The code then calls createNewUserInDatabase to create a new user in the database if they don't exist. This function would take the current user (user), the idToken, and userRole, and make an API request to create the new user in the system.
