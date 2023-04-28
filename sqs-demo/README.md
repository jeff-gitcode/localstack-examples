# 🧰 Simple TypeScript Starter | 2022

# Tech Stack

- [x] AWS
- [x] AWS Cli
- [x] LocalStack
- [x] AWS SDK
- [x] terraform


```javascript

# install sqs demo
$ git clone https://github.com/stemmlerjs/simple-typescript-starter sqs-demo

# cd sqs-demo

# sqs-consumer
$ yarn add sqs-consumer

# aws sdk
$ yarn add aws-sdk

# dotenv
$ yarn add dotenv

# create docker compose for localstack, then
$ docker-compose up -d

# create main.tf for terraform, credential config should be same as localstack

# install terraform, follow instruction
https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli

# provisioning
$ terraform init

$ terraform validate

$ terraform plan

$ terraform apply

# when finish test , then destory terraform
$ terraform destroy

# sqs test
$ awslocal sqs send-message --region ap-southeast-1 --queue-url http://localhost:4566/000000000000/local-queue --message-body '{"command":["jeff test"]}'

# create queue
$ awslocal --endpoint-url=http://localhost:4566 sqs send-message --queue-url http://localhost:4566/000000000000/local-queue --message-body 'jeff tests'

# receive queue
$ awslocal --endpoint-url=http://localhost:4566 sqs receive-message --queue-url http://localhost:4566/000000000000/local-queue

# list queue
$ awslocal --endpoint-url=http://localhost:4566 sqs list-queues

# start app
$ yarn start:dev

# enqueue message
$ awslocal sqs send-message --region ap-southeast-1 --queue-url http://localhost:4566/000000000000/local-queue --message-body '{"command":["jeff test1"]}'
```

> We talk about a lot of **advanced Node.js and TypeScript** concepts on [the blog](https://khalilstemmler.com), particularly focused around Domain-Driven Design and large-scale enterprise application patterns. However, I received a few emails from readers that were interested in seeing what a basic TypeScript starter project looks like. So I've put together just that.

### Features

- Minimal
- TypeScript v4
- Testing with Jest
- Linting with Eslint and Prettier
- Pre-commit hooks with Husky
- VS Code debugger scripts
- Local development with Nodemon

### Scripts

#### `npm run start:dev`

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

#### `npm run start`

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/index.js`.

#### `npm run build`

Builds the app at `build`, cleaning the folder first.

#### `npm run test`

Runs the `jest` tests once.

#### `npm run test:dev`

Run the `jest` tests in watch mode, waiting for file changes.

#### `npm run prettier-format`

Format your code.

#### `npm run prettier-watch`

Format your code in watch mode, waiting for file changes.
