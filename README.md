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

Now create an request in postman or insomnia like:

REQUEST: http://localhost:3000 <br />
PAYLOAD: 
```
{
    "status": 400,
    "message": "User already exists",
    "info": "BAD REQUEST"
}
```
