exports.handler = async (event) => {
  console.log("event: ", event);
  for (const record of event.Records) {
    const snsMessage = JSON.parse(record.body);
    console.log("Mensaje de SNS recibido:", snsMessage.Message);
  }
  throw new Error("probando DLQ!");
  return {
    statusCode: 500,
    body: JSON.stringify("probando DLQ!"),
  };
};
