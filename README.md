# Journal

> Public and Private Journals 
- Add user Specific Journals
- Add Public journals
- view them in according to the user
- edit the journal

### Tools used

-  We used `Handlebars` as a template engine. 
- `Express` for the server 
- `Passport Google Auth 20` for Google Authentication
- `Mongo Atlas` for the online database.
- `Express-sessions` for storing the session data

### Usage

Add your mongoDB URI and Google OAuth credentials to the config.env file

```
# Install dependencies
npm install

# Run in development
npm run dev

# Run in production
npm start
```

> <dbname\> = journal
> database user = shank123