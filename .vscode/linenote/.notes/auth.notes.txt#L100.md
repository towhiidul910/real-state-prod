Operation:
Uses a custom queryFn for more complex, multi-step logic.
Steps include:
Fetching the Auth Session:
Calls fetchAuthSession() to obtain the session and extract the idToken.
Determining User Role:
Reads the custom field ("custom:role") from the token payload to figure out if the user is a manager or a tenant.
Choosing the Right Endpoint:
Selects the endpoint based on the role (e.g., /managers/{userId} for managers, /tenants/{userId} for tenants).
Handling a Missing User:
Uses fetchWithBQ(endpoint) to fetch the user details.
If a 404 error is returned (indicating the user does not exist), it calls createNewUserInDatabase (which itself uses fetchWithBQ) to create the user record.
Returning Data:
Finally, it returns an object containing the Cognito info, the user details (after fetching or creation), and the user role.
Error Handling:
Wraps the whole process in a try-catch block to catch and return any errors.
