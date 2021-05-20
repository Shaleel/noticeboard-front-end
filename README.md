
  

#  Dremzo Backend

##  Setup

1. Setup mysql environment on your local machine
2. Setup Redis environment on your local machine
3. clone the repository onto your local machine and run the following command in the terminal
```js
npm install
```
4. After the installation of all the dependencies is finished, open terminal and execute the following command
```js
npx sequelize db:create 
```
5. After the database is created successfully, run the migrations.
```js
npx sequelize db:migrate
```
6. Run the following command to run the server
```js
npm start
```
7. Setup all the routes in Postman
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/f7513204bd2b7a13464a)
##  Routes

[Auth](#Auth)

###  *Auth*

***1. Signup***

-  **url**
`http://localhost:3000/auth/signup`

-  **method**
`POST`

-  **headers**
`no header required`

-  **body**
```json 
{
    "name":"",
    "email":"",
    "password":"",
    "mobile":"",
    "gender":["male","female","others"]//any one
}
```
-  **response**
```json
{
    "accessToken":  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6MCwiaWF0IjoxNjE1ODE1NzgxLCJleHAiOjE2MTU4MTkzODEsImlzcyI6ImRyZW16byJ9.tY0-StA3VAT_FQhZp3t-P95wV3I6zeGf7XXG85jwQO4"
}
```

  

***2. Login***

-  **url**
`http://localhost:3000/auth/login`


-  **method**
`POST`

-  **headers**
`no header required`

-  **body**
```json
{
    "mobile":"",
    "password":""
}
```
-  **response**
```json
{
    "accessToken":  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6MCwiaWF0IjoxNjE1ODE1NzgxLCJleHAiOjE2MTU4MTkzODEsImlzcyI6ImRyZW16byJ9.tY0-StA3VAT_FQhZp3t-P95wV3I6zeGf7XXG85jwQO4"
} 
```

***3. Logout***

-  **url**
`http://localhost:3000/auth/generate-otp`

-  **method**
`DELETE`

-  **headers**
`Authorization: Bearer <refresh-token>`

-  **body**
`no body required`

-  **response**
`successfully logout`

  

***4. Generate OTP***

-  **url**
`http://localhost:3000/auth/generate-otp`

-  **method**
`POST`

-  **headers**
`no header required`

-  **body**
```json
{
    "mobile":""
}
```

-  **response**
```json 
{
    "token":  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6MCwiaWF0IjoxNjE1ODE1NzgxLCJleHAiOjE2MTU4MTkzODEsImlzcyI6ImRyZW16byJ9.tY0-StA3VAT_FQhZp3t-P95wV3I6zeGf7XXG85jwQO4",
    "secret":  "c53f09ed8d0efe44746af3e81415c400785fe0b5c4367bb7cb11eb5d3dc83284",
    "exist":0//show signup page
    ,
    "exist":1 //show verify otp page
}
```

***5. Verify OTP***

-  **url**
`http://localhost:3000/auth/verify-otp`

-  **method**
`POST`

-  **headers**
`no header required`

-  **body**
```json
{
    "token":"",
    "secret":"",
    "otp":"",
    //only if user does not exist
    "name":"",
    "email":"",
    "password":"",
    "mobile":"",
    "gender":["male","female","others"],//any one
    "referralCode:""
}
```
-  **response**
```json
{
    "accessToken":  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6MCwiaWF0IjoxNjE1ODE1NzgxLCJleHAiOjE2MTU4MTkzODEsImlzcyI6ImRyZW16byJ9.tY0-StA3VAT_FQhZp3t-P95wV3I6zeGf7XXG85jwQO4"
}
```

***6. Third Party Auth***

-  **url**
`http://localhost:3000/auth/third-party-auth`

-  **method** 
`POST`

-  **headers**
`no header required`

-  **body**
```json
//this route will either login or create a user if it already exist in the databsse
{
    "email":"email@gmail.com",
    "name":"Good name",
    "mobile":"9873699999",//if returned from login button
    "photo":"urlhjgsdk"
}
```

-  **response**
```json
{
    "accessToken":  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6MCwiaWF0IjoxNjE1ODE1NzgxLCJleHAiOjE2MTU4MTkzODEsImlzcyI6ImRyZW16byJ9.tY0-StA3VAT_FQhZp3t-P95wV3I6zeGf7XXG85jwQO4"
}
```

***6. Refresh Access Token***

-  **url**
`http://localhost:3000/auth/refresh-access-token`

-  **method** 
`POST`

-  **headers**
`Authorization : Bearer <access-token>`

-  **body**
```json
no body required
```

-  **response**
```json
{
    "newAccessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU0N2E4ZWFmLWMxNTctNGI4YS1hMTA3LTA0ZTg0MjJlMmM5MyIsInJvbGUiOjIsImlhdCI6MTYyMDY2NTQzNiwiZXhwIjoxNjIwNjY1NDY2LCJpc3MiOiJkcmVtem8ifQ.-mdT-8efPacD6G65dwndtxu5Na6DwRmSaANSoXu0WR8"
}
```
###  *User*

***1. Get User***

-  **url**
`http://localhost:3000/user/get-user/:id`

-  **method**
`GET`

-  **headers**
`no header required`

-  **body**
`no body required`

-  **response**
```json
{
    "user":  {
        "id":  1,
        "name":  "Shaleel Ahmed",
        "email":  "ashaleel@gmail.com",
        "password":  "$2b$10$tMk34Mhx.rxvkvxdrFNwXe6zZMd4ycVTYSa.WAtUMYrltTUTcXu3u",
        "role":  1,
        "mobile":  "8860962227",
        "address":  null,
        "photo":  null,
        "age":  null,
        "weight":  null,
        "height":  null,
        "bmi":  null,
        "createdAt":  "2021-03-11T17:06:19.000Z",
        "updatedAt":  "2021-03-11T17:06:19.000Z"
         }
}
```

  

***2. Update User***

-  **url**
`http://localhost:3000/user/update`

-  **method**
`PUT`

-  **headers**
`Authorization: Bearer <access-token>`

-  **body**
```json
//field that needs to be updated
//for example to update the address and age
{
    "address":"",
    "age":24
}
//only address and age will be updated
```
-  **response**
```json
success
```

###  *Gym*

***1. create***

-  **url**
`http://localhost:3000/admin/gym/create/:localityId`

-  **method**
`POST`

-  **headers**
`Authorization: Bearer <access-token>`

-  **body**
```json
{
    "name":"Name of Gym",
    "address":"Address",
    "contact":"7894561230",
    "photos":["url1","url2","url3"]
}
```
-  **response**
```json
{
    "id":  4,
    "name":  "Name of Gym",
    "address":  "Address",
    "contact":  "7894561230",
    "photos":  [
        "url1",
        "url2",
        "url3"
        ],
    "locality":  "1",
    "updatedAt":  "2021-03-20T16:22:02.455Z",
    "createdAt":  "2021-03-20T16:22:02.455Z"
}
```

***2. update***

-  **url** 
`http://localhost:3000/admin/gym/update/:id`

-  **method**
`PUT`

-  **headers**
`Authorization: Bearer <access-token>`

-  **body**
```json
//fields to be updated
{
    "name":"Updated Name of Gym"
}
//only name field will be updated
```

-  **response**
```json
{
    "id":  4,
    "name":  "Updated Name of Gym",
    "address":  "Address",
    "contact":  "7894561230",
    "photos":  [
        "url1",
        "url2",
        "url3"
        ],
    "locality":  "1",
    "updatedAt":  "2021-03-20T16:22:02.455Z",
    "createdAt":  "2021-03-20T16:22:02.455Z"
}
```

***3. find***

-  **url**
`http://localhost:3000/gym/get/:id`

-  **method**
`GET`

-  **headers**
`no headers required`

-  **body**
```json
no body
```

-  **response**
```json
{
    "id":  4,
    "name":  " Name of Gym",
    "address":  "Address",
    "contact":  "7894561230",
    "photos":  [
        "url1",
        "url2",
        "url3"
        ],
    "locality":  "1",
    "updatedAt":  "2021-03-20T16:22:02.455Z",
    "createdAt":  "2021-03-20T16:22:02.455Z"
}
```

***3. find by locality***

-  **url**
`http://localhost:3000/gym/find-by-locality/:localityId`

-  **method**
`GET`

-  **headers**
`no headers required`

-  **body**
```json
no body
```
-  **response**
```json
{
    "message":"Updated successfully"
}
```

  

***4. delete***

-  **url**
`http://localhost:3000/admin/gym/delete/:id`

-  **method**
`DELETE`

-  **headers**
`Authorization: Bearer <access-token>`

-  **body**
```json
no body
```

-  **response**
```json
{
    "message":"Deleted successfully"
}
```


###  *Locality*

***1. create***

-  **url**
`http://localhost:3000/locality/create/:cityId`

-  **method**
`POST`

-  **headers**
`Authorization: Bearer <access-token>`

-  **body**
```json
{
    "name":"Locality Name",
    "pincode":"110002"  
}
```

-  **response**
```json
{
    "id":  2,
    "name":  "Locality Name",
    "pincode":  "110002",
    "CityId":  1,
    "admin":  1,
    "updatedAt":  "2021-03-20T17:21:55.654Z",
    "createdAt":  "2021-03-20T17:21:55.654Z"
}
```

###  *City*

***1. create***

-  **url**
`http://localhost:3000/city/create`

-  **method**
`POST`

-  **headers**
`Authorization: Bearer <access-token>`

-  **body**
```json
{
    "name":"Delhi"
}
```

-  **response**
```json
{
    "id":  2,
    "name":  "Delhi",
    "admin":  1,
    "updatedAt":  "2021-03-20T17:24:07.675Z",
    "createdAt":  "2021-03-20T17:24:07.675Z"
}
```

###  *Package*

***1. create***

-  **url**
`http://localhost:3000/package/create/:gymId`

-  **method**
`POST`

-  **headers**
`Authorization: Bearer <access-token>`

-  **body**
```json
{
    "duration":1,
    "title":"First Package",
    "price":"1999",
    "description":"A good description"
}
```

-  **response**
```json
{
    "id":  5,
    "duration":  1,
    "title":  "First Package",
    "price":  "1999",
    "description":  "A good description",
    "gym":  2,
    "updatedAt":  "2021-03-24T12:00:41.501Z",
    "createdAt":  "2021-03-24T12:00:41.501Z"
}
```

***2. find by id***

-  **url**
`http://localhost:3000/package/find-by-id/:id`

-  **method**
`GET`

-  **headers**
`no headers required`

-  **body**
```json
no body required
```

-  **response**
```json
{
    "id":  5,
    "duration":  1,
    "title":  "First Package",
    "price":  "1999",
    "description":  "A good description",
    "gym":  2,
    "updatedAt":  "2021-03-24T12:00:41.501Z",
    "createdAt":  "2021-03-24T12:00:41.501Z"
}
```


***3. find by gym***

-  **url**
`http://localhost:3000/package/find-by-gym/:gymId`

-  **method** 
`GET`

-  **headers**
`no headers required`

-  **body**
```json
no body required
```

-  **response**
```json
[    
    {
        "id":  1,
        "duration":  1,
        "title":  "First Package",
        "price":  "1999",
        "description":  "A good description",
        "createdAt":  "2021-03-24T11:26:29.000Z",
        "updatedAt":  "2021-03-24T11:26:29.000Z",
        "gym":  1
    },

    {
        "id":  3,
        "duration":  1,
        "title":  "First Package",
        "price":  "1999",
        "description":  "A good description",
        "createdAt":  "2021-03-24T11:55:12.000Z",
        "updatedAt":  "2021-03-24T11:55:12.000Z",
        "gym":  1
    }
]
```


***4. update***

-  **url**
`http://localhost:3000/package/update/:id`

-  **method**
`PUT`

-  **headers**
`Authorization: Bearer <access-token>`

-  **body**
```json
//whatever fields need to be updated
{
    "title":"Updated Title",
    "price":"2000"
}
```

-  **response**
```json
{
    "message":  "Updated Successfully"
}
```

***5. update***

-  **url**
`http://localhost:3000/package/delete/:id`


-  **method**
`DELETE`

-  **headers**
`Authorization: Bearer <access-token>`

-  **body**
```json
no body required
```

-  **response**
```json
{
    "message":  "Deleted successfully"
}
```

###  *Review*

***1. create***

-  **url**
`http://localhost:3000/review/create/:gymId`

-  **method**
`POST`

-  **headers**
`Authorization: Bearer <access-token>`

-  **body**
```json
{
    "rating":5,
    "description":"A very good Gym"
}
```

-  **response**
```json
{
    "id":  7,
    "rating":  5,
    "description":  "A very good Gym",
    "gym":  1,
    "user":  1,
    "updatedAt":  "2021-03-25T15:18:14.436Z",
    "createdAt":  "2021-03-25T15:18:14.436Z"
}
```

***2. find by gym***

-  **url**
`http://localhost:3000/review/find-by-gym/:gymId`

-  **method**
`GET`

-  **headers**
`no headers required`

-  **body**
```json
no body required
```

-  **response**
```json
[
    {
        "id":  1,
        "rating":  5,
        "description":  "A very good Gym",
        "createdAt":  "2021-03-25T14:29:21.000Z",
        "updatedAt":  "2021-03-25T14:29:21.000Z",
        "gym":  1,
        "user":  1
    },

    {
        "id":  2,
        "rating":  5,
        "description":  "A very good Gym",
        "createdAt":  "2021-03-25T15:05:46.000Z",
        "updatedAt":  "2021-03-25T15:05:46.000Z",
        "gym":  1,
        "user":  1
    },

    {
        "id":  3,
        "rating":  5,
        "description":  "A very good Gym",
        "createdAt":  "2021-03-25T15:13:06.000Z",
        "updatedAt":  "2021-03-25T15:13:06.000Z",
        "gym":  1,
        "user":  1
    },

    {
        "id":  4,
        "rating":  5,
        "description":  "A very good Gym",
        "createdAt":  "2021-03-25T15:13:26.000Z",
        "updatedAt":  "2021-03-25T15:13:26.000Z",
        "gym":  1,
        "user":  1
    },

    {
        "id":  5,
        "rating":  5,
        "description":  "A very good Gym",
        "createdAt":  "2021-03-25T15:16:54.000Z",
        "updatedAt":  "2021-03-25T15:16:54.000Z",
        "gym":  1,
        "user":  1
    }
]
```

***3. update***

-  **url**
`http://localhost:3000/review/update/:id`

-  **method**
`PUT`

-  **headers**
`Authorization: Bearer <access-token>`

-  **body**
```json
{
//only necessary fields to be updated
    "description":"Updated Description"
}
```

-  **response**
```json
{
    "message":  "Updated Succesfully"
}
```


***4. delete***

-  **url**
`http://localhost:3000/review/delete/:id`

-  **method**
`DELETE`

-  **headers** 
`Authorization: Bearer <access-token>`

-  **body**
```json
no body required
```

-  **response**
```json
{
    "message":  "Deleted Succesfully"
}
```

###  *Order*

***1. process***

-  **url**
`http://localhost:3000/order/process`

-  **method**
`POST`

-  **headers**
`Authorization: Bearer <access-token>`

-  **body**
```json
{
    "orderId":"Order Id recieved in params of the front end url",
    "status": "success" //or "failure"
}
```

-  **response**
```json
{
    "id": "7b991b0f-6a75-45da-b9ce-454b3a9e3297",
    "amount": "1185",
    "GymId": "101755e5-0344-42e0-a605-db57a6a203ac",
    "PackageId": "47e3688f-8976-43ed-8fa5-4e632646567e",
    "status": "success",
    "UserId": "f5846e77-6549-4547-9848-04e50b6e3286",
    "updatedAt": "2021-05-09T14:59:29.450Z",
    "createdAt": "2021-05-09T14:59:29.450Z"
}
```

***2. find by user***

-  **url**
`http://localhost:3000/order/find-by-user`

-  **method**
`GET`

-  **headers**
`Authorization: Bearer <access-token>`

-  **body**
```json
no body required
```

-  **response**
```json
//an array of all the orders of the user
[
    {
        "id": "e42c3aa3-91db-4f7a-942e-8b31ba6b94f8",
        "amount": 1999,
        "createdAt": "2021-04-11T17:58:35.000Z",
        "updatedAt": "2021-04-11T17:58:35.000Z",
        "PackageId": "8e59c8c0-a25e-440f-9fee-17f47a7bbf70",
        "GymId": "a89c449b-683b-4293-8a83-4ea304cd1324",
        "UserId": "e4be5ae1-0e62-4d8b-acc4-0535b503b126"
    }
]
```

***3. find by gym***

-  **url**
`http://localhost:3000/admin/order/find-by-gym`

-  **method**
`GET`

-  **headers**
`Authorization: Bearer <access-token>`

-  **body**
```json
no body required
```

-  **response**
```json
//an array of all the orders placed on a gym
[
    {
        "id": "e42c3aa3-91db-4f7a-942e-8b31ba6b94f8",
        "amount": 1999,
        "createdAt": "2021-04-11T17:58:35.000Z",
        "updatedAt": "2021-04-11T17:58:35.000Z",
        "PackageId": "8e59c8c0-a25e-440f-9fee-17f47a7bbf70",
        "GymId": "a89c449b-683b-4293-8a83-4ea304cd1324",
        "UserId": "e4be5ae1-0e62-4d8b-acc4-0535b503b126"
    }
]
```

***4. find by package***

-  **url**
`http://localhost:3000/admin/order/find-by-package`

-  **method**
`GET`

-  **headers**
`Authorization: Bearer <access-token>`

-  **body**
```json
no body required
```

-  **response**
```json
//an array of all the orders placed on a package
[
    {
        "id": "e42c3aa3-91db-4f7a-942e-8b31ba6b94f8",
        "amount": 1999,
        "createdAt": "2021-04-11T17:58:35.000Z",
        "updatedAt": "2021-04-11T17:58:35.000Z",
        "PackageId": "8e59c8c0-a25e-440f-9fee-17f47a7bbf70",
        "GymId": "a89c449b-683b-4293-8a83-4ea304cd1324",
        "UserId": "e4be5ae1-0e62-4d8b-acc4-0535b503b126"
    }
]
```

###  *Invoice*

***1. get***

-  **url**
`http://localhost:3000/invoice/:orderId`

-  **method**
`GET`

-  **headers**
`no headers required`

-  **body**
```json
no body required
```

-  **response**
```json
html file will be returned which can be shown inside an iframe tag
```
```html
<iframe src="http://localhost:3000/invoice/:orderId"></iframe>
```

***2. getPdf***

-  **url**
`http://localhost:3000/invoice/download/:orderId`

-  **method**
`GET`

-  **headers**
`no headers required`

-  **body**
```json
no body required
```

-  **response**
```json
pdf file will be downloaded 
```
```html
<a href="http://localhost:3000/invoice/download/:orderId"></a>
//a pdf will be downloaded by clicking on this link
```
###  *Photo*
***1. upload***

-  **url**
`http://localhost:3000/photo/upload/:type`

-  **method**
`POST`

-  **path params**
```js

    type:["gym","profile"]

```

-  **headers**
`no headers required`

-  **body**
```json
form data
```

-  **response**
```json
{//array of image url will be returned
//a single element array will be returned if only one photo is in the body
    "photos": [
        "https://dremzobeta.herokuapp.com/profile-pics/f2ec920aa4f5e18ce839d450acf29412download.jpg"
    ]
}
```
***2. profile pic***

-  **url**
`http://localhost:3000/profile-pics/{filename}`

-  **method**
`GET`

-  **headers**
`no headers required`

-  **body**
```json
no body required
```

-  **response**
```json
image file will be returned which can be used as a src for any image
```
```html
<img src="{url}"></img>
```
***3. gym photos***

-  **url**
`http://localhost:3000/gym-photos/{filename}`

-  **method**
`GET`

-  **headers**
`no headers required`

-  **body**
```json
no body required
```

-  **response**
```json
image file will be returned which can be used as a src for any image
```
```html
<img src="{url}"></img>
```
###  *Assets*

***1. logo***

-  **url**
`http://localhost:3000/assets/logo.svg`

-  **method**
`GET`

-  **headers**
`no headers required`

-  **body**
```json
no body required
```

-  **response**
```json
image file will be returned which can be used as a src for any image
```
```html
<img src="http://localhost:3000/assets/logo.svg"></img>
```
