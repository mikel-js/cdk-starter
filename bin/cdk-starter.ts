#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PhotoStack } from '../lib/PhotoStack';
import { PhotosHandlerStack } from '../lib/PhotosHandlerStack';

const app = new cdk.App();
const photoStack = new PhotoStack(app, 'PhotoStack');
new PhotosHandlerStack(app, 'PhotosHandlerStack', {
  targetBucketArn: photoStack.photoBucketArn,
});
