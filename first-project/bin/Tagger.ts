import { IAspect } from "aws-cdk-lib";
import { CfnBucket } from "aws-cdk-lib/aws-s3";
import { IConstruct } from "constructs";

export class Tagger implements IAspect {
    private key: string;
    private value: string;

    constructor(key: string, value: string) {
        this.key = key;
        this.value = value;
    }
    visit(node: IConstruct): void {
        console.log(`Visiting node: ${node.node.id}`);
        if( node instanceof CfnBucket ) {
            console.log(`Tagging bucket: ${node.node.id}`);
            const cfnBucket = node as CfnBucket;
            cfnBucket.tags.setTag(this.key, this.value);   
        }
    }
}