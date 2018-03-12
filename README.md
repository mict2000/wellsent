Project Two Group Three [GitHub](http://github.com/nwactor/wellsent)

# **Wellsent** Secure Encrypted Anonymous Messaging Application

https://wellsent.herokuapp.com/main

Created by Nick Wactor, Yusuf Mekias, Hillari Malle, Denis Wu, Mike Thompson

## Info:

This chat application was designed with a secure, encrypted, and anonymous login and logout and using message pools and junction tables, and our **own** simple encryption algorithm. 

We have created an **xOR** messaging hasher which hashes the message against the key, called Locksmith, which we hope to be an NPM pckage one day.

## Technologies used:
[MySQL](https://www.mysql.com/),
[Passport](http://www.passportjs.org/),
[Blaze](https://www.blazeui.com/),
[Sequelize](http://docs.sequelizejs.com/),
[Express](https://expressjs.com/),


## NPM Packages used:
[Base Conversion](https://www.npmjs.com/package/base-conversion),
[Binary To String](https://www.npmjs.com/package/binary-to-string),
[Bcrypt Node.js](https://www.npmjs.com/package/bcrypt-nodejs),
[Body-Parser](https://www.npmjs.com/package/body-parser),
[Express-Session](https://www.npmjs.com/package/express-session),
[MySQL](https://www.npmjs.com/package/mysql),
[MySQL2](https://www.npmjs.com/package/mysql2),
[Passport](https://www.npmjs.com/package/passport),
[Passport Local](https://www.npmjs.com/package/passport-local),
[Sequelize](https://www.npmjs.com/package/sequelize),
[Sha.js](https://www.npmjs.com/package/sha.js),
[String To Binary](https://www.npmjs.com/package/string-to-binary),
[Validate.io Binary String](https://www.npmjs.com/package/validate.io-binary-string)

## Build:

Building this app requires node.js and mysql.

1. Open terminal with git installed

2. Navigate to folder you wish to use as the parent directory for the project

3. `git clone https://github.com/nwactor/wellsent.git`

4. `npm install` 

5. Create a mysql database to store the app's data

6. From your wellsent folder, open /config/config.json

7. Add your mysql username and password to config, as well as the name of your local database.

## Run:

In your terminal run:

`node server.js`

and open browser to:

`localhost:8080`


![Screen shot1](https://github.com/nwactor/wellsent/blob/master/public/assets/images/login.png?raw=true)

![Screen shot1](https://github.com/nwactor/wellsent/blob/master/public/assets/images/login.png?raw=true)

![Screen shot1](https://github.com/nwactor/wellsent/blob/master/public/assets/images/enteruserpassword.png?raw=true)

On the login page, create a username and password or login with your existing username and password.

On the signup page, you will prompted to enter a valid username and password if you enter an invalid one. Once you are signed in, click:
`Search for User`

![Screen shot1](https://github.com/nwactor/wellsent/blob/master/public/assets/images/main.png?raw=true)

to search for a user to message. Click user's name to initiate conversation. When finished, simply log out and you will be brought back to the login page.

![Screen shot1](https://github.com/nwactor/wellsent/blob/master/public/assets/images/login.png?raw=true)
