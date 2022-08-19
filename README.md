# API for frontend server
This is the repository for frontend app..

## APIs
All the api ends points wil follow the following patterns `{rootUrl}/api/v1`

### Admin user api
This api is used to handle all the admin user related request.

All the Admin api endpoints will follow the following patterns. `{rootUrl}/api/v1/admin-user`

|# |PATH|METHOD|PRIVATE|DESCRIPTION|
|--|--- |------|-------|-----------|
|1.|`/`|POST|NO|-Receives new admin data and create user in admin section, unless the email is already registered. In that case, the error wil be shown. The success result will occur with the user information ind database.|
|2.|`/verify-email`|PATCH|NO|-Receives `email, verificationCode` to verify the user and provide error or success accordingly.|
|3.|`/login`|POST|NO|-Receive `{email, password}` and checks if the user exist or not in the database. After that it will handle all the user process.
|





