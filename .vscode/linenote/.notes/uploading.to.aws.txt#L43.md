go to ec2 instance we created

in **Security** tab
click **Security groups**
go to **Outbound rules**
click **Edit Outbound**

all security groups has a inbound and a outbound 
RDS need to able to receive inputs form the ec2 thats why we need to change inbound 
ec2 needs to send outbound calls to rds
so that where gonna change 



click **Add rule**
select **RDS-SG** (security group)
click **save rules**