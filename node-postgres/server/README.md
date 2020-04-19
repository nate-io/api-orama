# The Stocks API Node/Postgres Edition

## Database
Using PostgreSQL for this iteration. Installed with homebrew and executed via `brew services`, `npm start` includes first running a shell script to start the service.

```
  src
  │   app.js          # App entry point
  └───api             # Express route controllers for all the endpoints of the app
  └───config          # Environment variables and configuration related stuff
  └───jobs            # Jobs definitions for agenda.js
  └───loaders         # Split the startup process into modules
  └───models          # Database models
  └───services        # All the business logic is here
  └───subscribers     # Event handlers for async task
```