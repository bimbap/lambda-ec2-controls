const AWS = require('aws-sdk');

exports.handler = (event, context, callback) => {
    const ec2 = new AWS.EC2({ region: event.instanceRegion });
    
    ec2.startInstances({ InstanceIds: [event.instanceId] }).promise()
        .then(() => callback(null, `Successfully started ${event.instanceId}`))
        .catch(err => callback(err));
};

// Test Event JSON

// {
//     "instanceId": "i-0bac2b903e9fff5ea",
//     "instanceRegion": "us-east-1"
// }