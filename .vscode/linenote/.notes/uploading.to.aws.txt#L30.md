go to **EC2**

click **Instances** 
click **Launch Instances**
        `**side notes**` : instances in free tear can access 750 hours per month , 1 instances in 1 hour will count one hour, 2 instances in 1 hour will count 2 hours
        `===========++-++==========`
Name: re_ec2
OS: amazon Linux (default)

Amazon Machine Image (AMI): Amazon Linux 2023 AMI free tier eligible

Instance type: t2.micro (default) , `how power full the computer should be `

Key pair (login) : standard-key (we already have it so don't need to create another)

**Network Setting**

click **Allow HTTPS traffic from the internet**
click **Allow HTTP traffic from the interne**
`before` 
click **Edit**

in edit 

vpc-required : should be our vpc

subnet : re-public-subnet-1

Auto-assign public IP: Enable

Security group name - required: re_ec2-sg

Description - required: replace: launch-wizard-1 to re_ec2-sg (Security group name)



everything else default

click **Launch Instance**


click **instances**
click **connect**
keep everything default 
click **connect** `to run terminal on the instance computer `