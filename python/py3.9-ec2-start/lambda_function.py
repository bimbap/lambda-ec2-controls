import boto3  
region = 'us-east-1'
instances = ['i-<YOUR-INSTANCE-ID>']
ec2 = boto3.client('ec2', region_name=region)

def lambda_handler(event, context):
    ec2.start_instances(InstanceIds=instances)
    print('started your instances: ' + str(instances))