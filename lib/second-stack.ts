import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Code, Function as LambdaFucntion } from 'aws-cdk-lib/aws-lambda';

interface SecondStackProps extends cdk.StackProps {
  tagetBucketArn: string;
}

export class SecondStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: SecondStackProps) {
    super(scope, id, props);

    
    new LambdaFucntion(this, 'handler', {
      runtime: cdk.aws_lambda.Runtime.NODEJS_22_X,
      handler: 'index.handler',
      code: Code.fromInline('exports.handler = async function(event, context) { return "Hello from Lambda : " + process.env.TARGET_BUCKET ; }'),
      environment: {
        TARGET_BUCKET: props.tagetBucketArn
      }
    });

  }   
}
