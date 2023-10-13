import * as cdk from 'aws-cdk-lib';
import { Function as LambdaFunction } from 'aws-cdk-lib/aws-lambda';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class PhotosHandlerStack extends cdk.Stack {
  private targetBucket = cdk.Fn.importValue('photos-bucket');
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new LambdaFunction();
  }
}
