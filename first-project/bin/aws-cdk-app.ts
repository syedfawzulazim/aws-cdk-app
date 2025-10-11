#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkAppStack } from '../lib/aws-cdk-app-stack';
import { SecondStack } from '../lib/second-stack';
import { Tagger } from './Tagger';

const app = new cdk.App();
const awsAppStack =  new AwsCdkAppStack(app, 'AwsCdkAppStack');
new SecondStack(app, 'SecondStack', {
  tagetBucketArn: awsAppStack.photoBucketArn
});

const tagger = new Tagger('Project', 'AwsCdkApp');
cdk.Aspects.of(app).add(tagger);