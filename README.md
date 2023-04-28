AWS LocalStack Demo

# Tech Stack

- [x] AWS
- [x] AWS Cli
- [x] LocalStack
- [x] Serverless
- [x] Sesrverless-LocalStack


```javascript

# install localstack
$ python3 -m pip install localstack

# start localstack
$ localstack start

# check service list/health check
$ localstack status services

# logs
$ localstack logs

# stop localstack
$ localstack stop

# install serverless
$ npm install -g serverless

# install serverless-localstack
$ npm install --save-dev serverless-localstack

# install aws cli
$ pip install awscli

# setup aws local credentials
$ export AWS_ACCESS_KEY_ID="test"
$ export AWS_SECRET_ACCESS_KEY="test"
$ export AWS_DEFAULT_REGION="us-east-1"

$ aws --endpoint-url=http://localhost:4566 kinesis list-streams

# aws profile configure
$ aws configure --profile default

# install aws local
$ pip install awscli-local

# aws configure list
$ awslocal configure list

# create lambda
$ serverless create — template aws-nodejs — path lambda-demo

# update handler/serverless file

# deploy to local
$ serverless deploy --stage local

# check deployment
$ serverless info --stage local

# invoke service
$ serverless invoke local -f hello

# github cli
$ gh auth login
```