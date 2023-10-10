import * as cdk from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new Bucket(this, 'L2Bucket', {
      lifecycleRules: [
        {
          expiration: Duration.days(2),
        },
      ],
    });
  }
}
