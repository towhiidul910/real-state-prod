in Advanced settings

we are gonna add some environment variable (.env for client)

1 is for the public base url

in our local application
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
so 
instate fo it 


in **Environment variables**

key:  NEXT_PUBLIC_API_BASE_URL
value: 18.217.166.242 (from ) , `in EC2 Instance summary for re_ec2 , the Public IPv4 address`


and also we are gonna add other public env's 
like for mapbox , cognito user pool, cognito user pool client

key: NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
value: pk.eyJ1IjoidGFuamltMTIiLCJhIjoiY205Nnlmb2s0MDIybDJqczcwcnpkamRzNCJ9.Kc1qX5D0SDcBrrbetK2MWQ



key: NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID
value: us-east-2_w2O8WHscE


key: NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID
value: 7v3448k3ptnhurs99m4r1h0kvb


then click **Next**

then check every thing if needed 
then 
click **save and deploy**

after deploying fenished click
**visit deployed url**

you should be able to see the fontend

we still not finished yet

## explain 

NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID: ID of your user pool (where users live)

NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID: ID of your app client (used to interact with Cognito from frontend)

The NEXT_PUBLIC_ prefix makes them available to client-side JS (browser)

You use them in frontend auth flows (signup/login/etc.)

