export const portfolioData = {
  personal: {
    name: "Maleesha",
    surname: "Karunarathna",
    role: "Intern DevOps Engineer",
    title: "DevOps & Cloud Infrastructure Engineer",
    location: "Colombo, Sri Lanka",
    phone: "+94 767067288",
    email: "lishan.m29@gmail.com",
    github: "https://github.com/Maleesha29",
    linkedin: "https://linkedin.com/in/lishanmaleesha",
    resumeUrl: "/Maleesha_Karunarathna_DevOps_Resume.pdf",
    avatar: "/profile.jpg",
    workAuthorization: "SLIIT IT Graduate '26",
    status: {
      text: "Open for DevOps, Cloud & SRE Opportunities",
      available: true,
    },
    bio: "BSc (Hons) in Information Technology graduate from SLIIT with practical expertise in AWS, Infrastructure as Code (Terraform), containerization (Docker, Kubernetes), and CI/CD pipelines (Jenkins).",
    education: [
      {
        institution: "Sri Lanka Institute of Information Technology (SLIIT)",
        location: "Malabe, Sri Lanka",
        degree: "BSc (Hons) in Information Technology",
        status: "Degree Requirements Completed",
        graduation: "Graduation Ceremony: September 2026",
      },
      {
        institution: "Mahinda Rajapaksha College",
        location: "Homagama, Sri Lanka",
        degree: "G.C.E. O/L & A/L",
        period: "2012 – 2020",
      },
    ],
    aboutMe: {
      title: "DevOps & Cloud Systems Engineer",
      summary: "BSc (Hons) in Information Technology graduate from SLIIT with practical expertise in AWS, Infrastructure as Code (IaC), containerization, and CI/CD pipelines. Hands-on experience designing and provisioning cloud environments using Terraform, Docker, Kubernetes, Jenkins, and core AWS services. Eager to leverage strong technical foundations and modern DevOps practices to build scalable, secure, and automated cloud-native systems.",
      highlights: [
        "AWS Cloud Infrastructure & Terraform (IaC)",
        "Automated CI/CD Pipelines (Jenkins, Maven, SonarQube)",
        "Container Orchestration (Docker, Kubernetes, Helm, EKS)",
        "Fullstack Web & Linux Automation (MERN Stack, Bash)"
      ]
    },
  },

  bentoItems: {
    currentBuilding: {
      title: "Automated Multi-Tier AWS Web Stack with Terraform",
      description: "Provisioning resilient VPC networking, Application Load Balancers, automated EC2 bootstrapping, and Jenkins CI/CD pipelines.",
      tag: "Terraform / AWS / Jenkins",
      status: "Actively Developing",
    },
    metrics: [
      { label: "CI/CD Pipeline Automation", value: "100%", detail: "Automated build, test, scan, containerize & deploy via Jenkins" },
      { label: "Infrastructure as Code", value: "Terraform", detail: "Repeatable VPC, ALB, EC2, and Security Group provisioning" },
      { label: "Container Orchestration", value: "EKS Fargate", detail: "Serverless Kubernetes deployment with AWS Load Balancer Controller" },
      { label: "Core Cloud Stack", value: "AWS Ecosystem", detail: "VPC, EC2, ALB, S3, IAM, EKS, and Route Tables" },
    ],
    techCategories: [
      {
        category: "DevOps & CI/CD",
        skills: ["Jenkins", "CI/CD Pipelines", "GitHub Actions", "Build Automation", "Maven", "SonarQube", "OWASP Dependency-Check"],
      },
      {
        category: "Cloud & Infrastructure",
        skills: ["AWS (EC2, VPC, ALB, S3, IAM)", "Terraform (IaC)", "AWS EKS", "AWS Fargate", "Security Groups", "Route Tables"],
      },
      {
        category: "Containerization & Orchestration",
        skills: ["Docker", "Kubernetes", "Helm", "kubectl", "eksctl", "AWS LB Controller", "Ingress Controller"],
      },
      {
        category: "Fullstack & API Engineering",
        skills: ["React.js", "Node.js", "Express.js", "MongoDB (MERN)", "RESTful APIs", "JWT Auth", "Postman"],
      },
      {
        category: "Operating Systems & Scripting",
        skills: ["Linux (Ubuntu CLI)", "Bash Scripting", "YAML", "Git & GitHub", "Process & Network Mgmt"],
      },
      {
        category: "Data & Risk Analytics",
        skills: ["Transaction Analysis", "Risk Profiling", "Anomaly Detection", "Automated Workflows", "Reporting"],
      },
    ],
  },

  certificates: [
    {
      id: "aws-simulearn",
      title: "AWS SimuLearn: Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      issuedDate: "2024",
      credentialId: "AWS-SIMU-CP-01",
      verifyUrl: "https://aws.amazon.com/training/digital/",
      badgeColor: "from-amber-400/20 to-orange-600/20",
      iconType: "aws",
      skillsLearned: ["Cloud Concepts", "AWS Core Services (EC2, S3, VPC)", "Security & Compliance", "Cloud Economics", "Billing & Shared Responsibility"],
    },
    {
      id: "aws-academy-builder",
      title: "AWS Academy Graduate: Cloud Web Application Builder",
      issuer: "AWS Academy",
      issuedDate: "2024",
      credentialId: "AWS-ACAD-WAB-02",
      verifyUrl: "https://www.credly.com/",
      badgeColor: "from-yellow-400/20 to-amber-600/20",
      iconType: "aws",
      skillsLearned: ["Web App Architecture", "Elastic Compute (EC2/ALB)", "Cloud Storage (S3)", "VPC Networking", "IAM Least Privilege"],
    },
    {
      id: "k8s-beginners",
      title: "Kubernetes for the Absolute Beginners - Hands-on Labs",
      issuer: "KodeKloud",
      issuedDate: "2024",
      credentialId: "KK-K8S-LABS-03",
      verifyUrl: "https://kodekloud.com/courses/kubernetes-for-the-absolute-beginners-hands-on/",
      badgeColor: "from-blue-400/20 to-cyan-600/20",
      iconType: "kubernetes",
      skillsLearned: ["Pods & Deployments", "Services & Ingress", "ReplicaSets", "YAML Manifests", "Cluster Networking & kubectl"],
    },
    {
      id: "jenkins-beginners",
      title: "Jenkins for Beginners",
      issuer: "KodeKloud",
      issuedDate: "2024",
      credentialId: "KK-JENKINS-04",
      verifyUrl: "https://kodekloud.com/courses/jenkins/",
      badgeColor: "from-orange-400/20 to-red-600/20",
      iconType: "jenkins",
      skillsLearned: ["Automated CI/CD Pipelines", "Jenkinsfile Scripting", "GitHub Webhook Integration", "Docker Container Builds", "Maven & Test Automation"],
    },
  ],

  projects: [
    {
      id: "jenkins-java-cicd",
      title: "CI/CD Pipeline for Java Application Deployment",
      tagline: "Automated build, security scan, containerization & deployment pipeline",
      category: "DevOps & CI/CD",
      tags: ["Jenkins", "Maven", "SonarQube", "OWASP", "Docker", "GitHub"],
      metrics: "100% Automated Build, Scan & Containerized Delivery",
      description: "Designed and implemented an automated CI/CD pipeline using Jenkins to build, test, scan, containerize, and deploy Java applications seamlessly triggered by GitHub push events.",
      architecture: [
        "Automated Maven build lifecycle and dependency management ensuring consistent, reproducible application artifacts",
        "Integrated SonarQube for static code analysis, enforcing quality gates and identifying code smells and technical debt",
        "Configured OWASP Dependency-Check for in-line vulnerability scanning to enhance application security posture",
        "Automated Docker container image builds and tagging as part of the pipeline for consistent multi-environment deployments",
      ],
      tradeoffs: [
        {
          decision: "In-line OWASP Dependency-Check & SonarQube Quality Gates",
          rationale: "Automated vulnerability scanning at the CI build phase catches dependency CVEs and security flaws prior to containerization and deployment.",
        },
        {
          decision: "Declarative Jenkinsfile Pipeline over UI Freestyle Jobs",
          rationale: "Version-controlled pipeline-as-code allows peer review, easy rollbacks, reproducible builds, and seamless integration with GitHub branch policies.",
        },
      ],
      artifacts: [
        { label: "Jenkins Pipeline Repository", url: "https://github.com/Maleesha29", type: "github" },
        { label: "Dockerfile & App Code", url: "https://github.com/Maleesha29", type: "action" },
      ],
      github: "https://github.com/Maleesha29",
      demo: "https://github.com/Maleesha29",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80",
      featured: true,
    },
    {
      id: "aws-terraform-webstack",
      title: "AWS Web Stack Provisioning with Terraform (IaC)",
      tagline: "High-availability VPC, EC2 bootstrapping & ALB provisioning via code",
      category: "Cloud / AWS",
      tags: ["Terraform", "AWS VPC", "EC2", "ALB", "S3", "Bash"],
      metrics: "Zero Manual Drift • Fully Automated AWS Infrastructure",
      description: "Provisioned a resilient AWS cloud infrastructure using Terraform, configuring custom VPC networking, automated EC2 bootstrapping with user-data scripts, and high-availability Application Load Balancer routing.",
      architecture: [
        "Custom AWS VPC architecture with public/private subnets, Internet Gateway, route tables, and strict Security Group rules",
        "Automated EC2 instance provisioning using Bash user-data scripts for Apache web server installation and app deployment",
        "Configured Application Load Balancer (ALB) with target groups and continuous health checks for high-availability traffic routing",
        "Applied Infrastructure as Code (IaC) principles to ensure version-controlled, repeatable, and scalable cloud provisioning",
      ],
      tradeoffs: [
        {
          decision: "Terraform Declarative Modules over AWS Management Console",
          rationale: "Eliminated configuration drift and human error, enabling rapid teardown, reproduction, and modular infrastructure maintenance.",
        },
        {
          decision: "Application Load Balancer with Health Check Target Groups",
          rationale: "Ensured seamless traffic distribution and automatic rerouting away from unhealthy instances with zero downtime.",
        },
      ],
      artifacts: [
        { label: "Terraform IaC Repository", url: "https://github.com/Maleesha29", type: "github" },
        { label: "Infrastructure Architecture Manifests", url: "https://github.com/Maleesha29", type: "registry" },
      ],
      github: "https://github.com/Maleesha29",
      demo: "https://github.com/Maleesha29",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      featured: true,
    },
    {
      id: "eks-fargate-alb-ingress",
      title: "EKS Fargate Application Deployment with ALB Ingress",
      tagline: "Serverless Kubernetes cluster with Helm-managed AWS Load Balancer Controller",
      category: "Kubernetes",
      tags: ["AWS EKS", "Fargate", "Kubernetes", "Helm", "IAM OIDC", "kubectl"],
      metrics: "Serverless K8s • Automated Ingress Provisioning via Controller",
      description: "Deployed containerized applications on Amazon EKS using AWS Fargate to eliminate EC2 worker node management, configuring IAM OIDC service accounts (IRSA) and AWS Load Balancer Controller via Helm for automated Ingress routing.",
      architecture: [
        "Serverless Kubernetes cluster creation and management using eksctl, kubectl, and AWS CLI",
        "Configured IAM OIDC Provider and Kubernetes Service Accounts (IRSA) for secure, least-privilege AWS service integration",
        "Installed and managed AWS Load Balancer Controller using Helm to automatically provision and sync ALBs with Ingress resources",
        "Declarative Kubernetes Ingress routing exposing external traffic securely to backend container pods",
      ],
      tradeoffs: [
        {
          decision: "AWS Fargate Serverless Compute over Self-Managed EC2 Nodes",
          rationale: "Eliminated OS patching, worker node maintenance, and instance provisioning overhead with automatic pod-level isolation and scaling.",
        },
        {
          decision: "AWS Load Balancer Controller via Helm over Static NodePort/LoadBalancer Services",
          rationale: "Enables Kubernetes-native ingress rules to automatically provision and manage AWS Application Load Balancers via declarative manifests.",
        },
      ],
      artifacts: [
        { label: "EKS & Helm Manifests Repository", url: "https://github.com/Maleesha29", type: "github" },
        { label: "Kubernetes Ingress Specs", url: "https://github.com/Maleesha29", type: "helm" },
      ],
      github: "https://github.com/Maleesha29",
      demo: "https://github.com/Maleesha29",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1200&q=80",
      featured: true,
    },
  ],

  experience: [
    {
      role: "Associate Data Analyst",
      company: "Port City BPO",
      period: "Aug 2026 – Present",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      summary: "Analyzing high-volume transaction records, player behavioral patterns, and multi-metric risk profiles to evaluate financial exposure, mitigate operational fraud, and automate cross-platform reporting.",
      accomplishments: [
        "Analyzed high-volume transactions including player deposits, withdrawals, bonus utilization, and historical gameplay records to identify behavioral patterns and evaluate net financial exposure.",
        "Evaluated multi-metric risk profiles (lifetime value, transaction velocity, wagering patterns) to flag suspicious anomalies, supporting fraud mitigation and operational compliance decisions.",
        "Architected a rule-based automation workflow to handle multi-platform logins and aggregate cross-company betting history records, significantly reducing manual data retrieval time and operational overhead.",
      ],
      skills: ["Data Analysis", "Risk Profiling", "Anomaly Detection", "Process Automation", "Transaction Analytics"],
    },
    {
      role: "Intern Fullstack Developer",
      company: "Gamage Recruiters",
      period: "Sep 2025 – Mar 2026",
      location: "Colombo, Sri Lanka",
      type: "Internship",
      summary: "Built and maintained end-to-end web applications using the MERN stack (MongoDB, Express.js, React, Node.js), delivering responsive user interfaces, secure RESTful APIs, and optimized database queries.",
      accomplishments: [
        "Built and maintained end-to-end web applications using the MERN stack (MongoDB, Express.js, React, Node.js), delivering responsive, accessible user interfaces and robust server-side services.",
        "Designed and integrated reusable React components, managing dynamic client-side state, form handling, and seamless RESTful API communication.",
        "Engineered secure RESTful APIs with Node.js and Express.js, implementing JWT-based authentication, role-based access control, input validation, and optimized CRUD operations.",
        "Modeled scalable MongoDB schemas, managed data relationships, and optimized indexing and query execution to improve retrieval speeds.",
        "Conducted comprehensive API testing, debugging, and validation using Postman, ensuring schema integrity and edge-case reliability.",
        "Managed branch workflows, pull requests, and code reviews using Git and GitHub within an Agile development environment.",
      ],
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Authentication", "Postman", "Git & GitHub"],
    },
  ],
};
