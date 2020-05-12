# 

[TOC]

# The Stocks API Node/Postgres Edition



### Project Layout

```

src
  │   app.js          # App entry point
  └───api             # Express route controllers
  └───config          # Environment variables and configuration related stuff
  └───jobs            # Jobs definitions for chron/agenda.js/etc
  └───loaders         # Split the startup process into modules
  └───models          # Database models
  └───services        # All business logic
  └───subscribers     # Event handlers for async task
  
```



### Start Up

1) Docker
   1) uses docker, docker-compose & AWS RDS Postgres remote DB
   2) run `docker-compose up` to start

2) (Deprecated) Local Only: Installed with homebrew and executed via `brew services`, `npm start` includes first running script `start-postgres.sh` to start the service.



### Database Migration

Using [`db-migrate`]([https://db-migrate.readthedocs.io/en/latest/Getting%20Started/installation/](https://db-migrate.readthedocs.io/en/latest/Getting Started/installation/)) package.



### Testing

// TODO: build load testing with `artillery`' && Unit testing with  `jest/supertest`



### API Documentation

// TODO: add `OpenAPI` config