const { SNSClient, PublishCommand } = require("@aws-sdk/client-sns");
const snsClient = new SNSClient({ region: process.env.Region });

exports.handler = async (event) => {
  const params = {
    Message: "Hello, this is a test message!",
    TopicArn: process.env.TOPIC_ARN,
  };

  try {
    console.log("process.env: ", process.env);
    const data = await snsClient.send(new PublishCommand(params));

    console.log(`Message sent to the topic ${params.TopicArn}`);
    console.log("MessageID is " + data.MessageId);

    return {
      statusCode: 200,
      body: JSON.stringify("Hello from Lambda!"),
    };
  } catch (err) {
    console.error(err, err.stack);
    return {
      statusCode: 500,
      body: JSON.stringify(
        "Not necessarily bad, but unexpected things happened :("
      ),
    };
  }
}
