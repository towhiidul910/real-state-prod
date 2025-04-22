go to 
server> env in our local file 
we are gonna change the DATABASE_URL from local to RDS server url


so 
postgresql://<username>:<password>@<the Endpoint from RDS database Connectivity & security>:5432/<the DB name in RDS configuration>?schema=public

what we did is 



made a rul 
**from** 
DATABASE_URL="postgresql://postgres:Sakip15522@localhost:5432/realestate2?schema=public"


**to**
DATABASE_URL="postgresql://postgres:Sakip15522@re-drs.cjeo8mg0gean.us-east-2.rds.amazonaws.com:5432/realestate?schema=public"


now we are gonna change the url in our application in RDS

step 1:
go to ec2 console 

2:
check the pm2 status
command : pm2 status

3: 
delete the current status
command: pm2 delete all

4: go to env file (you suppose to be in server file to start or delete the pm2)
command : nano .env

5: in new line pest the url we made
now save the change 
command: **ctrl** + **x**, then **y**, then **enter**

## env is fine for now 
but we sitll dident set up our data base
so we need to run the prisma command
command: npm run prisma:generate

next 
command: npx prisma migrate dev --name init

next 
command: npm run seed

this should seed our data base


now start pm2
command : pm2 start

now monit :
pm2 monit