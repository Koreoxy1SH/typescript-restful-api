# Address API Spec

## Create Address

Endpoint : POST /api/contacts/:idContact/addresses

Request Heder :

- X-API-TOKEN : token("uuid")

Request Body :

```json
{
  "street": "jalan kenangan",
  "ciy": "Kota penuh keindahan",
  "province": "provinsi yang",
  "country": "negara kesukaan",
  "postal_code": "121212"
}
```

Response Body (Succes) :

```json
{
  "data": {
    "id": 1,
    "street": "jalan kenangan",
    "ciy": "Kota penuh keindahan",
    "province": "provinsi yang",
    "country": "negara kesukaan",
    "postal_code": "121212"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "postal_code is required"
}
```

## Get Address

Endpoint : GET /api/contacts/:idContact/addresses/:idAddress

Request Heder :

- X-API-TOKEN : token("uuid")

Response Body (Succes) :

```json
{
  "data": {
    "id": 1,
    "street": "jalan kenangan",
    "ciy": "Kota penuh keindahan",
    "province": "provinsi yang",
    "country": "negara kesukaan",
    "postal_code": "121212"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "address not found"
}
```

## Update Addreess

Endpoint : PUT /api/contacts/:idContact/addresses/:idAddress

Request Heder :

- X-API-TOKEN : token("uuid")

Request Body :

```json
{
  "street": "jalan kenangan",
  "ciy": "Kota penuh keindahan",
  "province": "provinsi yang",
  "country": "negara kesukaan",
  "postal_code": "121212"
}
```

Response Body (Succes) :

```json
{
  "data": {
    "id": 1,
    "street": "jalan kenangan",
    "ciy": "Kota penuh keindahan",
    "province": "provinsi yang",
    "country": "negara kesukaan",
    "postal_code": "121212"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "postal_code is required"
}
```

## Remove Address

Endpoint : DELETE /api/contacts/:idContact/addresses/:idAddress

Request Heder :

- X-API-TOKEN : token("uuid")

Response Body (Succes) :

```json
{
  "data": "OK"
}
```

Response Body (Failed) :

```json
{
  "errors": "Address is not found"
}
```

## List Address

Endpoint : GET /api/contacts/:idContact/addresses

Request Heder :

- X-API-TOKEN : token("uuid")

Response Body (Succes) :

```json
{
  "data": [
    {
      "id": 1,
      "street": "jalan kenangan",
      "ciy": "Kota penuh keindahan",
      "province": "provinsi yang",
      "country": "negara kesukaan",
      "postal_code": "121212"
    },
    {
      "id": 2,
      "street": "jalan kenangan",
      "ciy": "Kota penuh keindahan",
      "province": "provinsi yang",
      "country": "negara kesukaan",
      "postal_code": "121212"
    }
  ]
}
```

Response Body (Failed) :

```json
{
  "errors": "Contact is not found"
}
```
