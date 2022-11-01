NodeMailer Backend

For Register

Request
"method": "POST"
"url":http://localhost:5000/signup
"body":{
     "username":"surendran",
     "email":"surendran5@gmail.com",
     "password":"nowsusren96"
}
"response":{
    "message": "Registered Successfully"
}

-------------------------------------------------------------------------------------------
For Login

Request
"method": "POST"
"url":http://localhost:5000/login"
"body":{ 
     "email":"surendran5@gmail.com",
     "password":"nowsusren96"
}

response:{
    "message": "Successful login",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjEzZTJhYjZjODJjMmViY2ViNTRlYyIsImlhdCI6MTY2NzMyMTAzNCwiZXhwIjoxNjY3NDA3NDM0fQ.UgB1QmIc-tBw8-mLwtfs18hdtk4VPxx-dYBHrAcd9C8"
}
-----------------------------------------------------------------------------------------------
For Forgotpassword

Request
"method": "POST"
"url":http://localhost:5000/forgotpassword
"body":{     
     "email":"surendran5@gmail.com" 
}
"response":{
     "message": "Email Sent! Make sure to check your spam mail and mark not as spam."
}

For Forgotpassword

Request
"method": "POST"
"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjEzZTJhYjZjODJjMmViY2ViNTRlYyIsImlhdCI6MTY2NzMyMTAzNCwiZXhwIjoxNjY3NDA3NDM0fQ.UgB1QmIc-tBw8-mLwtfs18hdtk4VPxx-dYBHrAcd9C8",
							"type": "string"
						}
					]
				},
"url":http://localhost:5000/mailsend
"body":{     
    
     "MailContent":"The season of joy, festivities, bright lights, sparkles, snacks and sweets is here! While we live in a country which sees festivals and celebrations all year round, Diwali is one of the most awaited festivals for the entire country.",
     "ReceiverMailId":"raj@gmail.com",
     "subjLine":"welcome to diwali celebration"
}
"response":{
     "message": "Email Sent! Make sure to check your spam mail and mark not as spam."
}

