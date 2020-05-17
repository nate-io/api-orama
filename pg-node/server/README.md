# 

[TOC]

# The Stocks API Node/Postgres Edition

### TODO
* add a worker/job
* streaming data from stock price tables

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



### Database

Using `sequelize` as ORM and `sequelize-cli` for migrations & seeds. Migrations/models/seeders found at `./db` and vongif found in common config directory `./config/migrationsConfig.js`.

* Migration Commands
  * `npx sequelize-cli db:migrate`
    * run all migrations not in db (based on `SequelizeMeta` database table)
  * `npm sequelize-cli db:migrate:undo`
    *  undo last migration
  * `npm sequelize-cli db:migrate:undo:all`
    * undo all migrations



### Testing

// TODO: build load testing with `artillery`' && Unit testing with  `jest/supertest`



### API Documentation

// TODO: add `OpenAPI` config