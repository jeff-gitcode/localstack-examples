import { SQSConsumerFactory } from './infra/sqs.consumer.factory';
import config from './config';

const isJson = (str: string) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

const messageHandler = async (message: any) => {
  const body = isJson(message.Body) ? JSON.parse(message.Body) : message.Body;

  // todo: business logic here
  console.log({ body });
};

const startConsume = async () => {
  try {
    console.log('queue consumer start');
    const { queueUrl, region } = config.sqs;

    const pilotQueue = SQSConsumerFactory.create(
      {
        queueUrl,
        region,
      },
      messageHandler,
    );

    pilotQueue
      .handleError((err) => {
        console.error(err);
      })
      .start();
  } catch (error) {
    console.error(error);
  }
};

startConsume();
// eslint-disable-next-line no-console
// console.log('Hello world!');
