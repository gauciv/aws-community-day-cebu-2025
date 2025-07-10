import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb'

const client = new DynamoDBClient({})
const dynamodb = DynamoDBDocumentClient.from(client)

export const handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
  }

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers }
  }

  try {
    const result = await dynamodb.send(
      new ScanCommand({
        TableName: 'aws-community-day-emails',
        Select: 'COUNT',
      })
    )

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ count: result.Count || 0 }),
    }
  } catch (error) {
    console.error('Error:', error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to get count' }),
    }
  }
}
