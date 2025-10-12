import { Construct } from "constructs";
import * as cdk from "aws-cdk-lib";
import { AttributeType, ITable, Table } from "aws-cdk-lib/aws-dynamodb";
import { getSuffixFromStack } from "../utils";


export class DataStack extends cdk.Stack {
    public readonly spacesTable: ITable;
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const suffix = getSuffixFromStack(this);
    
        // The code that defines your stack goes here
        this.spacesTable = new Table(this, 'SpacesTable', {
             partitionKey: { 
                name: 'id', 
                type: AttributeType.STRING 
            },
            tableName: `SpaceTable-${suffix}`
        });

  } 
}