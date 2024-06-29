exports.handler = async (event ) => {
  console.log("event: ", event);
  for (const record of event.Records) {
    const snsMessage = JSON.parse(record.body);
    console.log('Mensaje de SNS recibido:', snsMessage.Message); 
  }
    return {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda!'),
    };
  };
  