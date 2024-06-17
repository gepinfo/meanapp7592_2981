module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "tickets-2981",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-meanapp7592-2981-tickets:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8145",
                    "protocol": "tcp",
                    "hostPort": "8145"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@meanapp7592.local:27017/meanapp7592_2981?authSource=admin"},{"name":"MONGO_DOMAIN","value":"meanapp7592.local"},{"name":"CAMUNDAPOD_URL","value":"http://meanapp7592.local:8080"},{"name":"SECURITYURL","value":"http://meanapp7592.local:8003"},{"name":"AUTHPROXYURL","value":"http://meanapp7592.local:8001"},{"name":"ADMINURL","value":"http://meanapp7592.local:8004"},{"name":"CAMUNDAURL","value":"http://meanapp7592.local:8002"},{"name":"GCAMURL","value":"http://meanapp7592.local:8007"},{"name":"APIGATEWAY","value":"http://meanapp7592.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "meanapp7592"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/meanapp7592",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "types-2981",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-meanapp7592-2981-types:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8146",
                    "protocol": "tcp",
                    "hostPort": "8146"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@meanapp7592.local:27017/meanapp7592_2981?authSource=admin"},{"name":"MONGO_DOMAIN","value":"meanapp7592.local"},{"name":"CAMUNDAPOD_URL","value":"http://meanapp7592.local:8080"},{"name":"SECURITYURL","value":"http://meanapp7592.local:8003"},{"name":"AUTHPROXYURL","value":"http://meanapp7592.local:8001"},{"name":"ADMINURL","value":"http://meanapp7592.local:8004"},{"name":"CAMUNDAURL","value":"http://meanapp7592.local:8002"},{"name":"GCAMURL","value":"http://meanapp7592.local:8007"},{"name":"APIGATEWAY","value":"http://meanapp7592.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "meanapp7592"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/meanapp7592",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "severity-2981",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-meanapp7592-2981-severity:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8147",
                    "protocol": "tcp",
                    "hostPort": "8147"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@meanapp7592.local:27017/meanapp7592_2981?authSource=admin"},{"name":"MONGO_DOMAIN","value":"meanapp7592.local"},{"name":"CAMUNDAPOD_URL","value":"http://meanapp7592.local:8080"},{"name":"SECURITYURL","value":"http://meanapp7592.local:8003"},{"name":"AUTHPROXYURL","value":"http://meanapp7592.local:8001"},{"name":"ADMINURL","value":"http://meanapp7592.local:8004"},{"name":"CAMUNDAURL","value":"http://meanapp7592.local:8002"},{"name":"GCAMURL","value":"http://meanapp7592.local:8007"},{"name":"APIGATEWAY","value":"http://meanapp7592.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "meanapp7592"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/meanapp7592",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "servicetypes-2981",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-meanapp7592-2981-servicetypes:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8148",
                    "protocol": "tcp",
                    "hostPort": "8148"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@meanapp7592.local:27017/meanapp7592_2981?authSource=admin"},{"name":"MONGO_DOMAIN","value":"meanapp7592.local"},{"name":"CAMUNDAPOD_URL","value":"http://meanapp7592.local:8080"},{"name":"SECURITYURL","value":"http://meanapp7592.local:8003"},{"name":"AUTHPROXYURL","value":"http://meanapp7592.local:8001"},{"name":"ADMINURL","value":"http://meanapp7592.local:8004"},{"name":"CAMUNDAURL","value":"http://meanapp7592.local:8002"},{"name":"GCAMURL","value":"http://meanapp7592.local:8007"},{"name":"APIGATEWAY","value":"http://meanapp7592.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "meanapp7592"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/meanapp7592",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "studdetails-2981",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-meanapp7592-2981-studdetails:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8148",
                    "protocol": "tcp",
                    "hostPort": "8148"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@meanapp7592.local:27017/meanapp7592_2981?authSource=admin"},{"name":"MONGO_DOMAIN","value":"meanapp7592.local"},{"name":"CAMUNDAPOD_URL","value":"http://meanapp7592.local:8080"},{"name":"SECURITYURL","value":"http://meanapp7592.local:8003"},{"name":"AUTHPROXYURL","value":"http://meanapp7592.local:8001"},{"name":"ADMINURL","value":"http://meanapp7592.local:8004"},{"name":"CAMUNDAURL","value":"http://meanapp7592.local:8002"},{"name":"GCAMURL","value":"http://meanapp7592.local:8007"},{"name":"APIGATEWAY","value":"http://meanapp7592.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "meanapp7592"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/meanapp7592",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "ticket-2981",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-meanapp7592-2981-ticket:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8150",
                    "protocol": "tcp",
                    "hostPort": "8150"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@meanapp7592.local:27017/meanapp7592_2981?authSource=admin"},{"name":"MONGO_DOMAIN","value":"meanapp7592.local"},{"name":"CAMUNDAPOD_URL","value":"http://meanapp7592.local:8080"},{"name":"SECURITYURL","value":"http://meanapp7592.local:8003"},{"name":"AUTHPROXYURL","value":"http://meanapp7592.local:8001"},{"name":"ADMINURL","value":"http://meanapp7592.local:8004"},{"name":"CAMUNDAURL","value":"http://meanapp7592.local:8002"},{"name":"GCAMURL","value":"http://meanapp7592.local:8007"},{"name":"APIGATEWAY","value":"http://meanapp7592.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "meanapp7592"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/meanapp7592",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
    ],
    "volumes": [
        {
        "fsxWindowsFileServerVolumeConfiguration": null,
        "efsVolumeConfiguration": {
            "transitEncryptionPort": null,
            "fileSystemId": `${process.env.EFS_ID}`,
            "authorizationConfig": {
            "iam": "DISABLED",
            "accessPointId": null
            },
            "transitEncryption": "DISABLED",
            "rootDirectory": "/"
        },
        "name": "meanapp7592",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "meanapp75920",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
