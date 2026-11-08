output "s3_bucket_name" {
  description = "The name of the provisioned S3 static hosting bucket."
  value       = aws_s3_bucket.portfolio.id
}

output "s3_bucket_arn" {
  description = "The ARN of the provisioned S3 static hosting bucket."
  value       = aws_s3_bucket.portfolio.arn
}

output "cloudfront_distribution_id" {
  description = "The ID of the CloudFront distribution (required for GitHub Actions cache invalidation secret)."
  value       = aws_cloudfront_distribution.portfolio.id
}

output "cloudfront_domain_name" {
  description = "The default CloudFront domain name (e.g., d1234abcd.cloudfront.net)."
  value       = aws_cloudfront_distribution.portfolio.domain_name
}

output "website_endpoint" {
  description = "The primary HTTPS endpoint where the portfolio is reachable."
  value       = var.acm_certificate_arn != "" ? "https://${var.domain_name}" : "https://${aws_cloudfront_distribution.portfolio.domain_name}"
}
