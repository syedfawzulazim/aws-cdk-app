#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { FirstAppStack } from '../lib/first-app-stack';

const app = new cdk.App();
new FirstAppStack(app, 'FirstAppStack');