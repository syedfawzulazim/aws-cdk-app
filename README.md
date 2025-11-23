# AWS CDK App

A TypeScript-based AWS CDK application demonstrating infrastructure as code patterns using AWS Cloud Development Kit (CDK).

## Overview

This project showcases AWS CDK constructs at different abstraction levels (L1, L2, and L3) for building cloud infrastructure. It includes:

- **S3 Buckets** - Multiple bucket implementations using different CDK construct levels
- **Lambda Functions** - Serverless compute with integration to S3
- **Infrastructure as Code** - Type-safe CloudFormation generation with TypeScript

## Project Structure

```
.
├── first-app/                    # Main CDK application
│   ├── bin/
│   │   └── first-app.ts         # CDK app entry point
│   ├── lib/
│   │   └── first-app-stack.ts   # Stack definition with L1, L2, and L3 constructs
│   ├── lambda/
│   │   └── index.ts             # Lambda function handler
│   ├── test/
│   │   └── first-app.test.ts    # Unit tests
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── cdk.json                     # CDK configuration
└── README.md                    # This file
```

## Prerequisites

- Node.js 18+
- AWS Account with credentials configured
- AWS CDK CLI installed globally: `npm install -g aws-cdk`
- TypeScript knowledge (recommended)

## Installation

```bash
# Install dependencies
cd first-app
npm install
```

## Available Scripts

```bash
# Compile TypeScript to JavaScript
npm run build

# Watch for changes and auto-compile
npm run watch

# Run unit tests
npm run test

# Deploy the stack to AWS
npx cdk deploy

# View differences between deployed and current stack
npx cdk diff

# Generate CloudFormation template
npx cdk synth
```

## What's Included

### CDK Constructs

The `FirstAppStack` demonstrates three levels of CDK constructs:

1. **L1 Constructs (CfnBucket)** - Low-level CloudFormation resources
   - Direct control over all properties
   - Most granular configuration options

2. **L2 Constructs (Bucket)** - Higher-level abstractions
   - Sensible defaults and helper methods
   - Easier to work with common scenarios

3. **L3 Constructs (LambdaWithS3)** - Custom patterns
   - Composite constructs combining multiple resources
   - Pre-configured best practices

### Resources Created

- **3 S3 Buckets** - Configured with different abstraction levels
- **1 Lambda Function** - Node.js 18.x runtime with S3 integration
- **Automatic IAM Permissions** - Lambda has read/write access to the L3 bucket

## Deployment

Deploy the CDK stack to your AWS account:

```bash
# Build the project first
npm run build

# Deploy to AWS
npx cdk deploy

# Approve the IAM changes when prompted
```

## Testing

Run the included test suite:

```bash
npm run test
```

## AWS CDK Documentation

For more information on AWS CDK:

- [AWS CDK Documentation](https://docs.aws.amazon.com/cdk/v2/)
- [AWS CDK API Reference](https://docs.aws.amazon.com/cdk/api/v2/)
- [CDK Workshop](https://cdkworkshop.com/)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues.
