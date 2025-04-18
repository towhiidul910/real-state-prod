### **What is JWT (JSON Web Token)?**

**JSON Web Token (JWT)** is a compact and self-contained way to represent information between two parties. It's widely used for authentication and information exchange. The token is typically used to authenticate a user and exchange claims (data) between a client and a server in web applications, often in REST APIs or OAuth2 workflows.

### **JWT Structure**

A JWT is made up of three parts, separated by dots (`.`):

1. **Header**
2. **Payload**
3. **Signature**

These three parts are encoded in **Base64Url** format and concatenated to form the JWT.

```
<Header>.<Payload>.<Signature>
```

---

### 1. **Header**

The **header** typically contains two parts:

- **Type**: The type of the token, which is typically "JWT".
- **Algorithm**: The signing algorithm used, such as `HS256`, `RS256`, etc.

**Example:**

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

This information is used to validate the token on the receiving side.

---

### 2. **Payload**

The **payload** contains the **claims**. Claims are statements about an entity (usually the user) and additional data. There are three types of claims:

- **Registered Claims**: Predefined claims that are not mandatory but recommended. These include:
  - `iss` (Issuer): The entity that issued the token.
  - `sub` (Subject): The subject of the token (usually the user or client).
  - `aud` (Audience): The intended recipient of the token.
  - `exp` (Expiration Time): The expiration time of the token (as a timestamp).
  - `nbf` (Not Before): The time before which the token is not valid.
  - `iat` (Issued At): The time when the token was issued.
  - `jti` (JWT ID): A unique identifier for the token.

- **Public Claims**: These can be custom claims created for your application (like user roles, permissions, etc.).
- **Private Claims**: These are claims agreed upon by both parties (client and server) and can contain any necessary data, such as:
  - `userRole`: The role of the user (e.g., "admin", "manager", "tenant").
  - `userId`: A unique identifier for the user.
  - `email`: The user's email address.

**Example:**

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "role": "manager",
  "iat": 1516239022
}
```

- In this case, `sub` refers to the user ID, `name` to the user's name, `role` to the user's role, and `iat` to the issued time of the token.
- The **role** claim, for instance, could be used to differentiate between different types of users (such as "admin", "manager", "tenant").

---

### 3. **Signature**

The **signature** is used to verify that the token has not been tampered with. It’s created by taking the encoded header, encoded payload, and a secret key (or a private key in asymmetric algorithms) and applying the specified algorithm.

**For example:**
```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

- This signature ensures the integrity of the token and verifies that the sender is who it claims to be.
- If any part of the token (header or payload) is altered, the signature will not match when the server tries to validate it.

---

### **What Does the `idToken` Contain?**

An `idToken` is a specific type of JWT used in **authentication flows**, particularly in **OAuth2** and **OpenID Connect**. Its primary purpose is to represent the identity of a user.

- **Payload Data**: The `idToken` will typically include user-related information in the payload. This can include both standard claims and custom claims.
  
#### **Standard Claims**:
1. `iss`: Issuer (the authentication provider, e.g., Google, AWS Cognito).
2. `sub`: Subject (the unique identifier for the user in the system).
3. `aud`: Audience (the intended recipient of the token, typically your API or application).
4. `exp`: Expiration time (time after which the token is no longer valid).
5. `iat`: Issued at (time when the token was created).
6. `jti`: JWT ID (unique ID for the token).
7. `auth_time`: The time the user was authenticated.

#### **Custom Claims** (these depend on the authentication service and the user's roles/permissions):
1. `userRole`: The role of the user (e.g., `admin`, `manager`, `tenant`).
2. `custom:role`: Custom claims can be added for specific roles, like distinguishing between a manager and a tenant.
3. `email`: The user's email address.
4. `name`: The user's full name.
5. `userId`: The unique identifier of the user in your database or system.
6. `groups`: An array of groups or permissions that the user belongs to.

**Example `idToken` Payload:**
```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "custom:role": "manager",
  "iat": 1617231234,
  "exp": 1617234834,
  "iss": "https://example.com",
  "aud": "myapi"
}
```

- **`sub`**: The user's unique identifier.
- **`custom:role`**: A custom claim indicating the user’s role (in this case, a manager).
- **`exp`**: Token expiration time (typically in Unix timestamp format).
- **`iat`**: The time the token was issued.

---

### **Why Do We Need the `idToken`?**

The `idToken` serves multiple important purposes:

1. **Authentication**: It verifies that the user has successfully authenticated. The token proves the identity of the user.
2. **Authorization**: Based on the user's role and claims within the token (e.g., `custom:role`), you can authorize the user to access specific resources or routes.
3. **Session Management**: The token can be stored (in a cookie or local storage) and used to persist the user's session without the need to re-authenticate on every request.

---

### **What Happens If the Token is Tampered With?**
   
If the `idToken` is modified in any way, the **signature** will no longer match, and the token will be considered invalid. This is why it's crucial to verify the signature on the server side before using any information contained in the token.

### **What Happens When the Token Expires?**

The `exp` (expiration) claim in the `idToken` defines the expiration time of the token. Once the token expires, it will no longer be valid. In most authentication systems, you'll need to refresh the token by either using a refresh token or re-authenticating the user.

---

### **Conclusion**

In summary, the `idToken` is a JWT that contains essential information about the user, including their **identity**, **roles**, and other **claims**. It's a vital piece of authentication infrastructure for securing APIs and handling user sessions in modern web applications.