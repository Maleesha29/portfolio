terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.50"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# ==============================================================================
# 1. S3 STATIC HOSTING BUCKET WITH SECURE ORIGIN RESTRICTIONS
# ==============================================================================

resource "aws_s3_bucket" "portfolio" {
  bucket        = var.bucket_name
  force_destroy = true

  tags = {
    Project     = "DevOps-Portfolio"
    Environment = "Production"
    Owner       = "Maleesha Karunarathna"
  }
}

# Block all direct public access (traffic MUST pass exclusively through CloudFront CDN)
resource "aws_s3_bucket_public_access_block" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Enable AES-256 default encryption at rest
resource "aws_s3_bucket_server_side_encryption_configuration" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

# ==============================================================================
# 2. CLOUDFRONT ORIGIN ACCESS CONTROL (OAC)
# ==============================================================================

resource "aws_cloudfront_origin_access_control" "portfolio" {
  name                              = "${var.bucket_name}-oac"
  description                       = "Origin Access Control granting CloudFront access to S3 portfolio bucket"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# Bucket policy allowing CloudFront distribution to read S3 objects
resource "aws_s3_bucket_policy" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "AllowCloudFrontServicePrincipalReadOnly"
        Effect    = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.portfolio.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.portfolio.arn
          }
        }
      }
    ]
  })
}

# ==============================================================================
# 3. CLOUDFRONT CDN DISTRIBUTION WITH SPA ROUTING & HTTPS REDIRECT
# ==============================================================================

resource "aws_cloudfront_distribution" "portfolio" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  comment             = "CloudFront distribution for Maleesha portfolio"

  # Use custom domain alias if ACM certificate is provided
  aliases = var.acm_certificate_arn != "" ? [var.domain_name] : []

  origin {
    domain_name              = aws_s3_bucket.portfolio.bucket_regional_domain_name
    origin_id                = "S3-${aws_s3_bucket.portfolio.id}"
    origin_access_control_id = aws_cloudfront_origin_access_control.portfolio.id
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${aws_s3_bucket.portfolio.id}"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 86400    # 1 day default caching
    max_ttl                = 31536000 # 1 year max caching
    compress               = true
  }

  # SPA Custom Error Response: rewrite 404 / 403 to /index.html with HTTP 200
  custom_error_response {
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 10
  }

  custom_error_response {
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 10
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    # If an ACM certificate is provided, use it; otherwise use the default CloudFront cert
    acm_certificate_arn            = var.acm_certificate_arn != "" ? var.acm_certificate_arn : null
    ssl_support_method             = var.acm_certificate_arn != "" ? "sni-only" : null
    minimum_protocol_version       = var.acm_certificate_arn != "" ? "TLSv1.2_2021" : null
    cloudfront_default_certificate = var.acm_certificate_arn == "" ? true : false
  }

  tags = {
    Project     = "DevOps-Portfolio"
    Environment = "Production"
  }
}
