# SuperAPI

> This is SuperAPI, where you can make and store your own superbeings! The easiest ways to make requests are through Postman or Insomnia

# Getting Started
First, Install the necessary modules:
```
npm install
```
Then start the server
```
npm start
```

# Sign up and log in
Go to the /auth/sign-up with the paramters
```
[
    {
        username: your-username
        password: your-password
    }
]
```
Then log in at /auth/login

# Making Requests
See all supers:
/

To create:
/add/superperson

To read:
/(name)

To update:
/update/(name)

To delete:
/delete/(name)

The information for the hero should be formatted like this:
```
[
    "name": "Batman",
    "image": "https://i.imgur.com/LDok9do.jpeg",
    "origin": "Gotham City"
]

