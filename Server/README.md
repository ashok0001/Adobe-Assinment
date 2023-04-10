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
### user analytics
``` javascript
method: GET
(http://localhost:5454/analytics/users/top-active)

no body

```
### Create Post
``` javascript
method: POST
https://adobe-assinment-production.up.railway.app/posts

{
    "content":"Believe you can and you're halfway there -Theodore Roosevelt"
}

```


### post analytics
``` javascript
method: GET
(http://localhost:5454/analytics/post/top-liked)

no body

```

### like post 
``` javascript
method: PUT
(http://localhost:5454/posts/{postId}/like)

no body

```

### unlike post 
``` javascript
method: PUT
(http://localhost:5454/posts/{postId}/unlike)

no body

```

### find Post By Id
``` javascript
method: GET
http://localhost:5454/posts/{postId}

no body

```
