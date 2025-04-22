

Now, let’s talk about **PM2**—because right now, your server is just vibing in development mode. The moment you Ctrl+C or close the SSH session, it’s gonna *peace out* like your ex after one red flag.

---

### 🚀 What is PM2?

**PM2** = Process Manager for Node.js.  
Think of it as your Node app’s bodyguard.

It does things like:
- Keeps your server **running 24/7**
- **Restarts** the app if it crashes
- Starts it **automatically on reboot**
- Logs everything nicely
- Lets you monitor usage like CPU & RAM

Basically:  
> “You build it. PM2 keeps it alive. Like a necromancer for JavaScript.”

---

### 🛠️ How to Use PM2 (on your EC2)

#### 1. Install PM2 globally:
```bash
npm install -g pm2
```

#### 2. Start your app with PM2:
Let’s say your entry file is `index.js` or `server.js`, run:
```bash
pm2 start server.js
```
Or if you're using `npm start`:
```bash
pm2 start npm --name "my-app" -- start
```

#### 3. Save the process list:
```bash
pm2 save
```

#### 4. Set it to run on server boot:
```bash
pm2 startup
```
Then it’ll show you a command like `sudo env PATH=... pm2 startup ...`  
Copy-paste that back into the terminal.

---

### 🧠 Tips & Tricks

- **List running apps:**
```bash
pm2 list
```

- **Logs (see real-time requests or crashes):**
```bash
pm2 logs
```

- **Restart your app:**
```bash
pm2 restart my-app
```

- **Stop an app:**
```bash
pm2 stop my-app
```

- **Delete it from PM2:**
```bash
pm2 delete my-app
```

---

### TL;DR
> PM2 keeps your Node app alive, even if it crashes or your EC2 reboots.  
You need it for production like you need a checkpoint in Sekiro—**don’t skip**.

Wanna set it up now? Tell me your entry file (`server.js`, `index.js`, etc.) and I’ll give you copy-pasteable commands.