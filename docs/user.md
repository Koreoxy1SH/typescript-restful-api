# User Api Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "brian",
  "password": "12345",
  "name": "brian dudi"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "brian",
    "name": "brian dudi"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Username not blank"
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "brian",
  "password": "12345"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "brian",
    "name": "brian dudi",
    "token": "uuid"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Username or password wrong"
}
```

## Get User

Endpoint : GET /api/users/current

Request Header :

- X-API-TOKEN : token("uuid")

Response Body (Success) :

```json
{
  "data": {
    "username": "brian",
    "name": "brian dudi"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized"
}
```

## Update User

Endpoint : PATCH /api/users/current

Request Header :

- X-API-TOKEN : token("uuid")

Request Body :

```json
{
  "password": "12345", //Optional, tidak wajib
  "name": "brian dudi" // optional, ti dak wajib
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "brian",
    "name": "brian dudi"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized"
}
```

## Logout User

Endpoint : DELETE /api/users/current

Request Header :

- X-API-TOKEN : token("uuid")

Response Body (Success) :

```json
{
  "data": "OK"
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized"
}
```
