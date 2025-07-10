import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb'

const client = new DynamoDBClient({})
const dynamodb = DynamoDBDocumentClient.from(client)

export const handler = async (event) => {
  console.log('Event received:', JSON.stringify(event, null, 2))

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  }

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers }
  }

  try {
    console.log('Event body:', event.body)

    let name, email

    // Handle both proxy and non-proxy integration
    if (event.body) {
      // Lambda proxy integration
      const parsed = JSON.parse(event.body)
      name = parsed.name
      email = parsed.email
    } else if (event.name && event.email) {
      // Direct integration
      name = event.name
      email = event.email
    } else {
      console.log('No valid data in event')
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Request data is missing' }),
      }
    }

    console.log('Parsed data:', { name, email })

    if (!name || !email) {
      console.log('Validation failed: missing name or email')
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Name and email are required' }),
      }
    }

    const item = {
      email,
      name,
      timestamp: new Date().toISOString(),
    }

    console.log('Saving to DynamoDB:', item)

    await dynamodb.send(
      new PutCommand({
        TableName: 'aws-community-day-emails',
        Item: item,
      })
    )

    console.log('Successfully saved to DynamoDB')

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Email registered successfully' }),
    }
  } catch (error) {
    console.error('Error:', error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' }),
    }
  }
}
