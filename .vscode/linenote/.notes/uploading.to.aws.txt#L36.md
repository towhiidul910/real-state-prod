## 4. Install pm2 (Production Process Manager for Node.js)
https://github.com/ed-roh/real-estate-prod/blob/master/server/aws-ec2-instructions.md#4-install-pm2-production-process-manager-for-nodejs

**Modify the ecosystem file if necessary:**

command: nano ecosystem.config.js


[root@ip-10-0-0-40 server]# nano ecosystem.config.js
[root@ip-10-0-0-40 server]# pm2 start ecosystem.config.js
[PM2][WARN] Applications real-estate not running, starting...
[PM2] App [real-estate] launched (1 instances)
┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ real-estate        │ fork     │ 0    │ online    │ 0%       │ 35.7mb   │
└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
[root@ip-10-0-0-40 server]# pm2 monit
[root@ip-10-0-0-40 server]# pm2 stop all
[PM2] Applying action stopProcessId on app [all](ids: [ 0 ])
[PM2] [real-estate](0) ✓
┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ real-estate        │ fork     │ 0    │ stopped   │ 0%       │ 0b       │
└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
[root@ip-10-0-0-40 server]# 