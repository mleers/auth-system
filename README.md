# User-Auth
This user-authentication example dmonstrates functionality of session-based authentication in a web browser.  It uses cookies stored in a web browser to verify identity as opposed to web tokens.  Logins are stored in an SQL db (Postgres) and hashed to protect credentials.

## Technologies used:
* Node/Express
* Sequelize
* Postgres/psql
* Bcrypt

## Middleware
* Body Parser
* Cookie Parser
* Express Session
* Morgan

## Running 
* create database using psql
* npm install
* node server.js


## Visuals

### Landing page
<details><summary>View image</summary>

![Landing Page](https://user-images.githubusercontent.com/29722295/72854183-7e36b000-3c68-11ea-80b2-22766acd41e1.png)
</details>

### Postgres entry confirmation
<details><summary>View image</summary>
  
![DB entry](https://user-images.githubusercontent.com/29722295/72925503-aa553e00-3d07-11ea-8f10-f182698a6415.png)
</details>
