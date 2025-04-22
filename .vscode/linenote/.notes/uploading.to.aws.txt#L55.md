go to console > api gateway > 


in api types :

REST APIs
click **create REST APIs**

API name: re_api-gateway

click : create api


click **Create resource**
click : Proxy resource
Resource name : {proxy+}
allow CORS

..
click any > edit

Method details: HTTP
allow HTTP proxy integration
HTTP method: ANY
Endpoint URL: http//<Public IPv4 address from ec2 instance>/{proxy}
click : save



got to authorizer:

click : create an authorizer

in Authorizer details
Authorizer name: re_api-gateway-cognito-authorizer
Authorizer type : Cognito

Cognito user pool: <select the cognito user pool we used for Auth management in cognito>

click: create

go back to Resources
Mathode request setting : click Edit

Method request settings
Authorization: re_api-gateway-cognito-authorizer
click: save

`now we still have one problem , we use cognito authrizer for all the resorses, this authrizetion is applyed for every singal rout  `, but we dont want authrization fir property route 
## property is a public routes

`router.get("/", getProperties); router.get("/:id", getProperty);`
this two routes property routes is public routes 

so we are just gonna create another resorese


click **create resource**

cont allow **Proxy resource**
Resource path: /
Resource name: properties
allow: CORS
click : create resource

click : create Method
Method type: GET
select: HTTP
allow HTTP proxy integration
HTTP method: GET 
Endpoint URL: http//<Public IPv4 address from ec2 instance>/properties


click save
click deploy Api

stage : new stage
stage name: prod


now you can copy the Invoke URL
and test it , 
if you use if like  
https://vqdn29vnc8.execute-api.us-east-2.amazonaws.com/prod/properties 
youll be able to reseve data
but 
if you try to resive data from
fro example leases or other endpoint 
https://vqdn29vnc8.execute-api.us-east-2.amazonaws.com/prod/leases
you will see 
message	"Unauthorized" , because not authorized, not sign in
















when we try to make a api request to our backend there is gonna be a problem this page is being hosted on https while our ec2 instance is hosted on http so the problem is when you try to make a request to http backend its going to run into a problem called blocked mixed content for bowers they blocked this 

so the way to get around is the complicated https certificates and you can manage it yourself but that's very complicated so good way to wark around this is api getaway its a service that allows you to automatically set the https and you can set up your backend routes via an api gateway 
























gpt explains


You're **spot-on**, and this is actually one of those classic *"oh no… the browser is yelling at me again"* moments. Let’s unpack what’s happening and how **API Gateway** saves the day.

---

## 🧠 What’s the Problem?

You’ve got this situation:

- 🌐 Your **frontend (Next.js)** is deployed on **HTTPS** (like with AWS Amplify, Vercel, Netlify, etc.)
- 🖥️ Your **backend (EC2/Express/Nest/etc.)** is on **HTTP**, usually something like `http://your-ec2-ip:80`

### ❌ Mixed Content Block
Browsers like Chrome/Firefox say:
> “**Hold up, you’re trying to call an insecure HTTP endpoint from a secure HTTPS page?** I don’t like that. BLOCKED.”

This is called **mixed content**. HTTPS pages are **not allowed** to make requests to HTTP resources. It’s like wearing a hazmat suit and then licking a dirty spoon. Doesn't matter if *you* trust the spoon.

---

## 💥 Solution Options

### Option 1: **Install HTTPS manually on EC2**
- You set up **SSL certificates** using something like **Let's Encrypt + Nginx + Certbot**
- You run your Express/Nest backend on HTTPS (port 443)
- Pain in the butt to maintain
- You need to renew certs, set up Nginx, etc.

### Option 2 (🔥 Better): **Use AWS API Gateway**

### ✅ What API Gateway Does:
- Sits **in front of your backend**
- You give it **your HTTP backend URL** (like `http://ec2-ip:80/api/something`)
- It gives you back a **secure HTTPS URL** (like `https://xyz123.execute-api.us-east-2.amazonaws.com/prod`)
- It acts as a **proxy** that:
  - Terminates the HTTPS connection
  - Forwards requests to your backend
  - Returns the response securely to the frontend

This way:
- Frontend stays happy (`https -> https`)
- You **don’t need to mess with SSL manually**
- You get **rate limiting, logging, auth**, and more features for free

---

## 🔗 How the Flow Looks (Using API Gateway)

```plaintext
Frontend (Next.js, HTTPS)
     ↓ HTTPS request
API Gateway (HTTPS endpoint)
     ↓ HTTP request (proxy)
Backend (on EC2, plain HTTP)
     ↑ response
API Gateway (wraps it in HTTPS again)
     ↑
Frontend receives response ✅
```

---

## 💡 TL;DR

- Frontend is HTTPS → backend is HTTP → ❌ = Mixed content blocked
- API Gateway fixes that by being a **middleman with HTTPS**
- You don’t need to configure SSL on your EC2
- Your frontend talks to a **secure API**, but the backend stays **low-effort HTTP**
- It's **scalable**, **secure**, and **browser-friendly**

---

## 🛠️ Tips & Tricks

- When creating the API Gateway:
  - Use **REST API** (not HTTP API) if you want more control
  - Use **ANY method** to pass all request types (GET, POST, etc.)
  - Enable **CORS** if you’re calling it from a different domain
- After creating the gateway, **deploy it** to a stage (like `prod`)
- Update your frontend API URLs to use the `https://<your-gateway-id>.execute-api...` endpoint

---

Wanna walk through setting up a real one with your EC2 backend? Or want a template with Amplify + API Gateway + EC2 all connected up like Voltron?