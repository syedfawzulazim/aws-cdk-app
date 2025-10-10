import * as cdk from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

class L3Bucket extends Construct {
  constructor(scope: Construct, id: string, expirationInDays: number) {
    super(scope, id);

    // L3 Bucket
    new Bucket(this, 'L3Bucket', {
      lifecycleRules: [
        {
          expiration: cdk.Duration.days(expirationInDays)
        }
      ]
    });
  }
}



export class AwsCdkAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // L1 Bucket 
    new CfnBucket(this, 'MyL1Bucket', {
      lifecycleConfiguration: {
        rules: [
          {
            status: 'Enabled',
            expirationInDays: 2,
            id: 'MyL1BucketRule'
          }
        ]
      }
    });


    // L2 Bucket
    const myL2Bucket = new Bucket(this, 'MyL2Bucket', {
      lifecycleRules: [
        {
          expiration: cdk.Duration.days(2)
        }
      ]
    });

    console.log('L2 Bucket Name:', myL2Bucket.bucketName);

     const duration = new cdk.CfnParameter(this, 'duration', {
      default: 7,
      maxValue: 30,
      minValue: 1,
      type: 'Number',
      description: 'A sample parameter'
    });

    // L3 Bucket
    new L3Bucket(this, 'MyL3Bucket', duration.valueAsNumber);

    new cdk.CfnOutput(this, 'L2BucketName', {
      value: myL2Bucket.bucketName,
      description: 'The name of the L2 S3 Bucket',
      exportName: 'L2BucketName'
    });

   

  }
}
