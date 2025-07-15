import boto3  
region = 'us-east-1'
instances = ['i-0bac2b903e9fff5ea']
ec2 = boto3.client('ec2', region_name=region)

def lambda_handler(event, context):
    ec2.stop_instances(InstanceIds=instances)
    print('stopped your instances: ' + str(instances))