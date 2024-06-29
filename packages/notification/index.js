exports.handler = async (event ) => {
  console.log("event: ", event);
  for (const record of event.Records) {
    console.log('Mensaje de SQS recibido:', snsMessage);
    const snsMessage = record.Sqs.Message;    
  }
    return {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda!'),
    };
  };
  