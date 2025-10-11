#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkAppStack } from '../lib/aws-cdk-app-stack';
import { SecondStack } from '../lib/second-stack';

const app = new cdk.App();
const awsAppStack =  new AwsCdkAppStack(app, 'AwsCdkAppStack');
new SecondStack(app, 'SecondStack', {
  tagetBucketArn: awsAppStack.photoBucketArn
});