const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  QueryCommand,
} = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

exports.handler = async (event) => {
  console.log("env: ", process.env.EVENTS_TABLE_NAME);
  for (const record of event.Records) {
    const snsMessage = record.Message;
    console.log("Mensaje de SNS recibido:", snsMessage);
    // const command = new QueryCommand({
    //   ExpressionAttributeValues: {
    //     ":id": restaurantId,
    //   },
    //   KeyConditionExpression: "restaurantId = :id",
    //   TableName: process.env.EVENTS_TABLE_NAME,
    //   Limit: limit,
    //   ExclusiveStartKey: lastKey,
    // });
    // const response = await docClient.send(command);
  }
  return {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
};
