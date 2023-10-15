import { IAspect } from 'aws-cdk-lib';
import { IConstruct } from 'constructs';

export class BucketTagger implements IAspect {
  constructor(private key: string, private value: string) {}

  visit(node: IConstruct): void {
    throw new Error('Method not implemented');
  }
}
