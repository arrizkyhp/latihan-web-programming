## Standar API

{root-api}/{version}/{grouping}/{endpoint}

`http://mern-api.arrizkyhp.com/v1/auth/login`

## Standar Status Response

- 200 - OK => Call API Success
- 201 - CREATED => Post Success
- 400 - BAD REQUEST => Error on Client Side (Bisa input yang salah dll).
- 401 - UNAUTHORIZED => User not authorized to the request.
- 403 - FORBIDDEN => User not allowed to access.
- 404 - NOT FOUND => Request Endpoint Not Found.
- 500 - INTERNAL SERVER ERROR => Error on Server Side.
- 502 - BAD GATEWAY => Invalide Response From Another Request.

---

## 🕸️ Group **Authentication**

### [1] - Register

{root-api}/{version}/auth/register

`http://mern-api.arrizkyhp.com/v1/auth/register`

**Request:**

```json
{
  "name": "arrizkyhp",
  "email": "arrizkyhp@gmail.com",
  "password": "123qweasd"
}
```

**Succes-Response**

```json
{
  "message": "Register Success",
  "data": {
    "id": 1,
    "name": "arrizkyhp",
    "email": "arrizkyhp@gmail.com",
    "password": "123qweasd"
  }
}
```

**Error-Response**

- 201 => Register Berhasil
- 400 => Input yang anda masukan tidak valid

### [2] - Login

`{root-api}/{version}/auth/login`

---

## 🕸️ Group **Blog**

### [1] - Create Blog Post

[POST] : {root-api}/{version}/auth/register

**Request:**

```json
{
  "title": "title Blog",
  "image": "imageFile.png",
  "body ": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}
```

**Succes-Response**

```json
{
  "message": "Create Blog Post Success",
  "data": {
    "post_id": 1,
    "title": "title Blog",
    "image": "imageFile.png",
    "body ": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "created_at": "04/05/2022",
    "author": {
      "uid": 1,
      "name": "arrizky"
    }
  }
}
```

**Error-Response**

- 201 => Blog Post Berhasil Dibuat
- 400 => Input yang anda masukan tidak valid

### [2] - Get Blog Post

### [3] - Update Blog Post

### [4] - Delete Blog Post
