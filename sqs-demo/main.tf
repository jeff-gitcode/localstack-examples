provider "aws" {
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true
  access_key                  = "test"
  secret_key                  = "test"
  region                      = "us-east-1"
  endpoints {
    sqs = "http://localhost:4566"
  }
}

resource "aws_sqs_queue" "queue" {
  name = "local-queue"
}
