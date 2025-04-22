https://www.youtube.com/watch?v=X1zCAPLvMtw&t=42031s 11:41:00

Console > RDS > Database > Create Database 

Standard create 
PostgreSQL
free tear
DB instance identifier: re-drs
Master username: what ever you are: my ne is For SQL : postgres
pass: my pass

Storage
disable : Storage autoscaling in Additional Storage configuration

VPC security group (firewall):
create new


New VPC security group name
re_rds-sg

Availability Zone:
us-east-2a

## Monitoring
disable: Performance Insights

## Additional configuration

Database options
Initial database name: realestate
Backup
disable:  Enable automated backups
Encryption
disable: Enable encryption