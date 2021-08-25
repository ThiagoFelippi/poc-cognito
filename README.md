# poc-cognito

Sign up poc using cognito

### How to start

First, you need create an user pool on your AWS account:

![first_step](https://github.com/ThiagoFelippi/poc-cognito/blob/main/read-me/1.png)
![second_step](https://github.com/ThiagoFelippi/poc-cognito/blob/main/read-me/2.png)
![third_step](https://github.com/ThiagoFelippi/poc-cognito/blob/main/read-me/3.png)
![four_step](https://github.com/ThiagoFelippi/poc-cognito/blob/main/read-me/4.png)
![five_step](https://github.com/ThiagoFelippi/poc-cognito/blob/main/read-me/5.png)
![six_step](https://github.com/ThiagoFelippi/poc-cognito/blob/main/read-me/6.png)
![seven_step](https://github.com/ThiagoFelippi/poc-cognito/blob/main/read-me/7.png)
![eight_step](https://github.com/ThiagoFelippi/poc-cognito/blob/main/read-me/8.png)

Now, you will click in show details, copy your client_id and paste on env. Copy App client secret and paste at SECRET_HASH
If you create in region different than us-east-1 you need create a new line in .env and put your region

Use postman collection fixed in card

### References

[nodemon+typescript](https://danieldcs.com/configurando-node-js-com-typescript-nodemon-e-jest/)
[learning cognito repo inspired](https://github.com/floydjones1/ExpressTSCognito/)

#### OBS

That is a poc, so I don't apply advanced topics or everthing that I know about the AWS Service. Is just a poc to consider use cognito in a personal project
