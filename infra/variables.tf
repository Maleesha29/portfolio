variable "aws_region" {
  description = "The AWS region where S3 and supporting infrastructure will be deployed."
  type        = string
  default     = "us-east-1"
}

variable "domain_name" {
  description = "The custom apex domain name for the portfolio (e.g. maleesha.dev)."
  type        = string
  default     = "maleesha.dev" # TODO: Update with your real custom domain name if different
}

variable "bucket_name" {
  description = "The globally unique name for the S3 static hosting bucket."
  type        = string
  default     = "maleesha-dev-portfolio-static-bucket" # TODO: Set your globally unique bucket name
}

variable "acm_certificate_arn" {
  description = "ARN of an existing ACM SSL certificate in us-east-1 (leave empty to use default CloudFront *.cloudfront.net certificate)."
  type        = string
  default     = "" # TODO: Paste your ACM certificate ARN here once validated in AWS Certificate Manager
}
