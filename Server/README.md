# Spring Boot

## Live Api https://adobe-assinment-production.up.railway.app


### create user


``` javascript

http://localhost:5454/api/users

{
    "email":"sidhu@gmail.com",
    "password":"12345678",
    "name":"sidhu"
}

```
### update user
``` javascript

http://localhost:5454/users/{userId}
method: PUT
{
    "name":"ashok ashok",
    "bio":"hello im ashok"
}

```

### delete user
``` javascript
method: DELETE
http://localhost:5454/users/{userId}

{
    "name":"ashok ashok",
    "bio":"hello im ashok"
}

```

### find user By Id
``` javascript
method: GET
http://localhost:5454/users/{userId}

no body

```

