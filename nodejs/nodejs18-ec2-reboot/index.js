const AWS = require('aws-sdk');

exports.handler = (event, context, callback) => {
    const ec2 = new AWS.EC2({ region: event.instanceRegion });
    
    ec2.rebootInstances({ InstanceIds: [event.instanceId] }).promise()
        .then(() => callback(null, `Successfully rebooted ${event.instanceId}`))
        .catch(err => callback(err));
};