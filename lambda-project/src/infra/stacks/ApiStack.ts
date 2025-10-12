import { Construct } from "constructs";
import * as cdk from "aws-cdk-lib";
import { RestApi, LambdaIntegration } from "aws-cdk-lib/aws-apigateway";

interface ApiStackProps extends cdk.StackProps {
    helloLambdaIntegration: LambdaIntegration;
}


export class ApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: ApiStackProps) {
    super(scope, id, props);
    
    // The code that defines your stack goes here
    const api = new RestApi(this, 'ApiGateway');
    const apiResource = api.root.addResource('spaces');
    apiResource.addMethod('GET', props.helloLambdaIntegration);
  } 
} 