#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkAppStack } from '../lib/aws-cdk-app-stack';

const app = new cdk.App();
new AwsCdkAppStack(app, 'AwsCdkAppStack');