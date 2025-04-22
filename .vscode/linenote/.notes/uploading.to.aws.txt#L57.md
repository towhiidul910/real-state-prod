from api gateway > api > the api we created
copy : Invoke URL
https://vqdn29vnc8.execute-api.us-east-2.amazonaws.com/prod

then go to **Amplify**
go to deployed app
go to 
Hosting > Environment Variables > 
click **Manage variables**
in
NEXT_PUBLIC_API_BASE_URL : 
replace it: http://18.217.166.242 to https://vqdn29vnc8.execute-api.us-east-2.amazonaws.com/prod

click : save