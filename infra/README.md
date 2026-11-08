# Portfolio Cloud Infrastructure (Terraform)

This directory contains minimal, production-grade Terraform configurations to provision an **Amazon S3 static hosting bucket** and an **Amazon CloudFront CDN distribution** using AWS **Origin Access Control (OAC)** for private bucket security and zero-downtime SPA routing.

---

## Architecture Components

- **Amazon S3 Bucket**: Stores the compiled `dist/` production assets with SSE-AES256 encryption at rest and full public access blocking.
- **Origin Access Control (OAC)**: Enforces that S3 objects can only be read via the CloudFront distribution, preventing direct unauthenticated S3 access.
- **Amazon CloudFront Distribution**: Global CDN delivering sub-second edge latency, automatic HTTP-to-HTTPS redirect, and custom 404/403 error page handling for SPA routing.
- **ACM SSL Certificate**: Optional custom domain SSL/TLS certificate configured in `us-east-1`.

---

## Prerequisites

1. [AWS CLI](https://aws.amazon.com/cli/) installed and authenticated (`aws configure`).
2. [Terraform CLI](https://developer.hashicorp.com/terraform/downloads) (>= 1.5.0).
3. If using a custom apex domain (e.g. `maleesha.dev`), request a public certificate in AWS Certificate Manager in region `us-east-1`.

---

## Deployment Steps

### 1. Configure Variables
Copy or adjust variable defaults in `variables.tf` or create a `terraform.tfvars` file:

```hcl
aws_region          = "us-east-1"
bucket_name         = "maleesha-dev-portfolio-static-bucket" # Must be globally unique
domain_name         = "maleesha.dev"
acm_certificate_arn = "" # Paste your ACM ARN if you have a custom domain
```

### 2. Initialize Terraform
```bash
cd infra
terraform init
```

### 3. Review Plan
```bash
terraform plan
```

### 4. Apply Infrastructure
```bash
terraform apply -auto-approve
```

### 5. Note the Outputs
Upon successful provisioning, Terraform will display:
- `s3_bucket_name`
- `cloudfront_distribution_id`
- `cloudfront_domain_name`

---

## Connecting with GitHub Actions CI/CD

Add the following repository secrets in your GitHub repository (**Settings → Secrets and variables → Actions → Repository secrets**):

| Secret Name | Value |
|---|---|
| `AWS_ROLE_ARN` | IAM OIDC Role ARN (e.g., `arn:aws:iam::<ACCOUNT_ID>:role/GitHubActionsDeployRole`) |
| `AWS_S3_BUCKET_NAME` | The value of `s3_bucket_name` from Terraform |
| `CLOUDFRONT_DISTRIBUTION_ID` | The value of `cloudfront_distribution_id` from Terraform |
| `AWS_REGION` | `us-east-1` |

Every git push to `main` will automatically build your React application, sync the assets to S3, and invalidate the CloudFront edge cache.
