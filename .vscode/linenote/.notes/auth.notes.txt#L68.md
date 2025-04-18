The `fetchAuthSession` function returns an **`AuthSession`** object, which contains more than just the `idToken`. The `AuthSession` typically includes various pieces of information about the user's authentication state, credentials, and tokens. Here's what the `AuthSession` object generally contains:

### Typical contents of the `AuthSession` object:

1. **`idToken`** (String):
   - The **ID Token** represents the identity of the user and is usually JWT (JSON Web Token) format. It contains claims such as the user’s identity, roles, permissions, and any custom attributes you may have added.
   - It is used to authenticate the user when making requests to APIs.

2. **`accessToken`** (String):
   - The **Access Token** is used to authenticate requests to AWS services and APIs.
   - It typically has a shorter expiration time than the ID Token and is used to access specific protected resources on behalf of the authenticated user.

3. **`refreshToken`** (String):
   - The **Refresh Token** is used to obtain new **Access Tokens** and **ID Tokens** when they expire. It can be used to get new tokens without needing to re-authenticate the user.

4. **`credentials`** (Object):
   - This contains AWS credentials (if you're using AWS Cognito or other AWS services), such as **`accessKeyId`**, **`secretAccessKey`**, and **`sessionToken`**.
   - These credentials are used for authenticating and authorizing API calls to AWS services.

5. **`user`** (Object):
   - This contains user information (like the user ID, email, and custom attributes) that you might need in your app. The `user` object is typically populated with details such as the user's name, email, and custom attributes (e.g., role, group).
   - Example: The user object could contain:
     - `username`
     - `email`
     - `sub` (user's unique identifier)
     - `cognito:roles` (roles assigned to the user)

6. **`expiresAt`** (Timestamp):
   - This is the timestamp for when the session (specifically the tokens) will expire. It's important for handling token refresh logic in your app.
   - You can use this to check if the token is still valid or if it needs to be refreshed.

### How do you access them?
Here is an example of how you might use the returned session object:

```typescript
import { Auth } from 'aws-amplify';

async function getAuthSession() {
  try {
    const session = await Auth.currentSession();
    const idToken = session.getIdToken().getJwtToken(); // idToken
    const accessToken = session.getAccessToken().getJwtToken(); // accessToken
    const refreshToken = session.getRefreshToken().getToken(); // refreshToken

    const user = session.getUser(); // Get the user info (like username, email)
    const credentials = await Auth.currentCredentials(); // AWS credentials (if needed)

    console.log("ID Token:", idToken);
    console.log("Access Token:", accessToken);
    console.log("Refresh Token:", refreshToken);
    console.log("User Info:", user);
    console.log("AWS Credentials:", credentials);
    
  } catch (error) {
    console.error("Error fetching auth session:", error);
  }
}
```

### Summary of the contents:
- **ID Token**: Information about the user (e.g., their identity, claims).
- **Access Token**: Token used for API access (typically short-lived).
- **Refresh Token**: Token used to refresh expired access tokens.
- **Credentials**: AWS access key and secret key for interacting with AWS services.
- **User Info**: User-specific data (like username, email, etc.).
- **Expiration Info**: When the session will expire.

So, **`fetchAuthSession`** provides you with everything you need to authenticate the user, manage their session, and interact with AWS resources (if you're using AWS services).

Let me know if you need more details on any of these parts!