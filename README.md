# API-ORAMA
Building out REST API in Node starting with raw denormalized stock data. Then doing it again in some combo if Django/Rails/Go - at least the basic setup - to broaden experience and get a feel for different stacks.

## Setup
1. Start local `postgres` <br>
   a. uses fair amount of data & don't want to run remote $$<br>
   b. DB will be name `stocks_api`
2. At top level run `npm start`<br>
   a. uses `concurrently` package to start server then client
   

## Project Goals
### Initial 
1) aggregate `rawData` files into one denormalized dataset with python & pandas for analysis then split data into separate files for import
2) build the data model (use Postgres) by denormalizing data
3) build basic read routes
4) build C, U, D routes (auth'd)
5) dockerize/deploy
6) create basic front end (update docker setup to include both with one command)

### Next Steps
1) Implement in Django? [Tutorial](https://blog.logrocket.com/creating-an-app-with-react-and-django/)
2) Implement in Rails? [Tutorial](https://blog.heroku.com/a-rock-solid-modern-web-stack)
3) Implement in Go? [Tutorial](https://medium.com/@adigunhammedolalekan/build-and-deploy-a-secure-rest-api-with-go-postgresql-jwt-and-gorm-6fadf3da505b) [Info](https://www.reddit.com/r/golang/comments/a4kzqk/has_anyone_deployed_a_createreactapp_with_go/)
4) Any or all of these to broaden skill set? Only do 1 and get on to serverless?

### Next Next Steps
2) monolith needs split into microservices. This could get really in-depth and include logging, communications, proxies, partitioning data, performance, data aggregations, etc.
3) Serverless - some of the routes could be great targets to go serverless. What is the performance trade-off? Since C,U,D routes are used less often are they better candidates vs read routes? Or are read routes the best case to go serverless since they fire once as needed and could offer best cost savings? Or is there a performance hit for the read latency? The analysis is important here. [Tutorial](https://serverless-stack.com/#table-of-contents)
