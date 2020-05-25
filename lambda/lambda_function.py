import json

import boto3
from botocore.exceptions import ClientError
from config import * 

def lambda_handler(event, context):
    if 'body' in event:
        email = event['body']['workEmail']
        message = event['body']['message']
        firstName = event['body']['firstName']
        lastName = event['body']['lastName']
        companyName = event['body']['companyName']
        phoneNumber = event['body']['phoneNumber']
        sendEmail(email,firstName,lastName,"Thanks for contacting us",WE_RECEIVED_YOUR_MESSAGE_HTML,"Thanks for reaching out!")
        subject = SUBJECT_PREFIX + " " + firstName + " " +lastName
        htmlMessage = BODY_HTML.format(firstName=firstName,lastName=lastName,companyName=companyName,message=message,phoneNumber=phoneNumber)
        sendEmail(email,firstName,lastName,message,htmlMessage,subject)
        saveToDynamoDB(message, email,firstName,lastName,companyName)
        return {
            'statusCode': 200,
            'body': json.dumps('Email Sent!')
        }
    return {
        'statusCode': 400,
        'body': json.dumps('Empty request!')
    }

def saveToDynamoDB(message, RECIPIENT,firstName,lastName,companyName):
    dynamodb = boto3.client('dynamodb')
    dynamodb.put_item(TableName='ContactoForm', Item={
        'message':{'S':message},
        'email':{'S':RECIPIENT},
        'firstName':{'S':firstName},
        'lastName':{'S':lastname},
        'companyName':{'S':companyname},
    })
    
def sendEmail(RECIPIENT,firstName,lastName,message,html, subject):
    client = boto3.client('ses',region_name=AWS_REGION)
    
    try:
        response = client.send_email(
            Destination={
                'ToAddresses': [
                    RECIPIENT,
                ],
            },
            Message={
                'Body': {
                    'Html': {
                        'Charset': CHARSET,
                        'Data': html,
                    },
                    'Text': {
                        'Charset': CHARSET,
                        'Data': message,
                    },
                },
                'Subject': {
                    'Charset': CHARSET,
                    'Data': subject,
                },
            },
            Source=SENDER,
        )
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        print("Email sent! Message ID:"),
        print(response['MessageId'])
        
  
