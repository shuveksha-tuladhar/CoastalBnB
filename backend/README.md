# express-sequelize-postgres-starter

## Setup

To start, you'll need to install our backend and frontend dependencies. If you're in the root
of this project, you'll need to first move (`cd`) into the backend directory and
run `npm install`. Next, you will need to move back into the root directory and then (`cd`) into the frontend directory and run `npm install`.

Then, you'll need to create a `.env` file in your backend directory based on the `.env.example` file
that's available in this directory.

Make sure PostgreSQL is installed and check if `psql` is working in the terminal of your choice. 

Using `psql` in the terminal, create a user with a password and `createdb` that
matches the one described in the `.env` file. We'll be using `dotenv` with
`sequelize` to pass our environment variables declared in the `.env` to our
`sequelize` commands.
* `psql`

After quitting out of the `psql` instance, you can run the following commands to
finish database setup.

* `npm run db:setup`

This command will run the following three in order:

```
npx dotenv sequelize db:create
```

```
npx dotenv sequelize db:migrate
```

```
npx dotenv sequelize db:seed:all
```

Once you have completed the backend application setup, you can run `npm start` for both the backend server and the frontend server and text  that everything is working but creating the test route below. 
