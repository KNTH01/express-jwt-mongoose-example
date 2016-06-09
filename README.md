# express-jwt-mongoose-example

**A basic example of express server with JWT authentication (passport.js) and user entity handled by Mongoose**

## Authentication

The authentication is jwt based. I use `passport` with `passport-local` and `passport-jwt` strategies in order to handle the authentication with the basic email / password fields.
When a user is authenticated, the `jwt token` is sent to the client which has to store it. When the client wants to access to a restricted route, the client must provide the `jwt token` in the header request.

## API endpoints

### Get users : `/users`

```
GET /users HTTP/1.1
Host: localhost:3000
Cache-Control: no-cache
Postman-Token: 10373735-7890-7766-d8d8-032e5b0ea0f7
```

### Register a user: `/users/register`

```
POST /users/register HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: dabfc67d-def0-a944-3556-223f525fd4f6

{
    "email": "admin@example.com",
    "password": "password123"
}
```

### Authenticate user: `/users/auth`

```
POST /users/auth HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 0308173f-4e71-8c4c-fd54-13e73194b785

{
    "email": "nemx@admin.com",
    "password": "password123"
}
```

### Access restricted route: `/users/dashboard`

You need put the `jwt token` in the request header, using `Authorization` key field and concat `"JWT " + jwtToken` in the value field.
```
GET /users/dashboard HTTP/1.1
Host: localhost:3000
Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6e30sIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7InBhc3N3b3JkIjoiaW5pdCIsImVtYWlsIjoiaW5pdCIsIl9fdiI6ImluaXQiLCJfaWQiOiJpbml0In0sInN0YXRlcyI6eyJpZ25vcmUiOnt9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6eyJfX3YiOnRydWUsInBhc3N3b3JkIjp0cnVlLCJlbWFpbCI6dHJ1ZSwiX2lkIjp0cnVlfSwibW9kaWZ5Ijp7fSwicmVxdWlyZSI6e319LCJzdGF0ZU5hbWVzIjpbInJlcXVpcmUiLCJtb2RpZnkiLCJpbml0IiwiZGVmYXVsdCIsImlnbm9yZSJdfSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9fdiI6MCwicGFzc3dvcmQiOiIkMmEkMTAkNnlTekJNWWkubkFGcmcxMlVjRk16dWNsdXJwVDEwcVpMdkswWFBTQWpDNTF4NVRaVy5kQmEiLCJlbWFpbCI6Im5lbXhAYWRtaW4uY29tIiwiX2lkIjoiNTc0OTkwMTE4MDhjNDhjNTMwYmIwMjRiIn0sIl9wcmVzIjp7IiRfX29yaWdpbmFsX3NhdmUiOltudWxsLG51bGwsbnVsbF19LCJfcG9zdHMiOnsiJF9fb3JpZ2luYWxfc2F2ZSI6W119LCJpYXQiOjE0NjU0NzM2NzQsImV4cCI6MTQ2NTY0NjQ3NH0.nm-vWLhx9mZAHfPQl8CUXgbq6Cpts7qOV2izBvHpOTc
Cache-Control: no-cache
Postman-Token: 4c39ba30-491d-37aa-c4d6-1d770c15e75f
```

## Notes

This example required `bcrypt` npm module. On **Windows OS**, `bcrypt` is really painful to install. So feel free to replace this module with [this one](https://www.npmjs.com/package/bcryptjs) !
