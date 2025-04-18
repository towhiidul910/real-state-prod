2. Retrieves the user role (manager or tenant).
Code:

ts
Copy
Edit
const { idToken } = session.tokens ?? {};
const userRole = idToken?.payload["custom:role"] as string;
Explanation:

The idToken is extracted from the session.tokens object, which contains authentication tokens like an idToken (JWT).
The userRole is extracted from the idToken. Specifically, it's looking for the custom field custom:role in the token's payload, which will have a value like "manager" or "tenant" depending on the role assigned to the user during authentication.


🔥🔥🔥🔥the "custom:role"
come form aws cognito that we dified in web
and it is stored in the jwt token with other user info 