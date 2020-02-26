# api-orama
Building out REST API in Node starting with raw denormalized stock data. Potentially then doing it again in both Django &amp; Rails, at least the basic setup.

## Method

### Initial
1) aggregate `rawData` files into one denormalized dataset with python & pandas
2) introduce scenario where we are starting up a company to render this data to the public
3) build the data model (use Postgres) by denormalizing data
4) dockerize & deployment (project setup)
5) build basic read routes
6) build C, U, D routes (auth'd)
7) create basic front end (update docker setup to include both with one command)

### Next Steps
1) Implement in Django
2) Implement in Rails
3) Implement in Go
4) Any or all of these to broaden skill set

### Next Next Steps
2) monolith needs split into microservices. This could get really in-depth and include logging, communications, proxies, partitioning data, performance, data aggregations, etc.
3) Serverless - some of the routes could be great targets to go serverless. What is the performance trade-off? Since C,U,D routes are used less often are they better candidates vs read routes? Or are read routes the best case to go serverless since they fire once as needed and could offer best cost savings? Or is there a performance hit for the read latency? The analysis is important here.


