the guid 
https://github.com/ed-roh/real-estate-prod/blob/master/server/aws-ec2-instructions.md

command : sudo su -
command : curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash









next thing `we are gonna clone the git and we are gonna clone the reparatory from our git hub that we pushed up while back, so we cna install the actual application on this server`

**3. Install Git**
`make sure that repo is public or make a token and make a url like this : ` 
**git clone https://<YOUR_GITHUB_USERNAME>:<YOUR_TOKEN>@github.com/towhiidul910/real-state-prod.git**


check by command : ls , see if it exist in our cloud pc

## Navigate to the directory and install packages:

go to server:
run , npm i
then run, npm run dev

we need to change the port form 3002 to 80 so ower aws can access sent or resive through server


``
in our instances we have Public IPv4 address with a **ip address**
we are gonna open it and now we are gonna open it , 
and from https: we gonna remove the s only http
and see what it showing if it showing the `massage` we created in 
server > index.ts : first get home rout 
then our backend fully working