import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Function, Runtime, Code } from 'aws-cdk-lib/aws-lambda';


// L3 Construct
class LambdaWithS3 extends Construct {
  constructor(scope: Construct, id: string, bucketName: string) {
    super(scope, id);

    const bucket = new Bucket(this, 'MyBucket', { bucketName, versioned: true });

    const lambda = new Function(this, 'MyLambda', {
      runtime: Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: Code.fromAsset('lambda'),
      environment: { BUCKET_NAME: bucket.bucketName },
    });

    bucket.grantReadWrite(lambda);
  }
}

export class FirstAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // L1 Construct
    new CfnBucket(this, 'MyL1Bucket', {
      lifecycleConfiguration: {
        rules: [{
          expirationInDays: 3,
          status: 'Enabled',
        }],
      },
    });

    // L2 Construct
    new Bucket(this, 'MyL2Bucket', {
      lifecycleRules: [{
        expiration: cdk.Duration.days(3),
      }],
    });

    // L3 Construct
    new LambdaWithS3(this, 'MyLambdaS3Pattern', 'l3-lambda-bucket');

  }
}
