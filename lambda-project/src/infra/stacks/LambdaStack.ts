import { Construct } from "constructs";
import * as cdk from "aws-cdk-lib";
import {  aws_lambda as lambda } from "aws-cdk-lib";
import { Code } from "aws-cdk-lib/aws-lambda";
import { join } from "path";
import { LambdaIntegration } from "aws-cdk-lib/aws-apigateway";
import { ITable } from "aws-cdk-lib/aws-dynamodb";


interface LambdaStackProps extends cdk.StackProps {
    spacesTable: ITable;
}   


export class LambdaStack extends cdk.Stack {

    public readonly helloLambdaIntegration: LambdaIntegration;

  constructor(scope: Construct, id: string, props:LambdaStackProps ) {
    super(scope, id, props);
    
    // The code that defines your stack goes here
    const helloLambda = new lambda.Function(this, 'HelloLambda', {
        runtime: lambda.Runtime.NODEJS_22_X,
        handler: 'hello.main',
        code: Code.fromAsset(join(__dirname, '..', '..', 'service')),
        environment: {
            TABLE_NAME: props.spacesTable.tableName
        }
    });

    this.helloLambdaIntegration = new LambdaIntegration(helloLambda);

  } 
}