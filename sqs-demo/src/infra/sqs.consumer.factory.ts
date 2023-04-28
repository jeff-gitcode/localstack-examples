import { Consumer, ConsumerOptions } from 'sqs-consumer';

export type SQSErrorHandler = (err: any) => any;
export class SQSConsumerFactory {
  private _queueConsumer: Consumer;
  private _config: ConsumerOptions;
  private constructor(config: ConsumerOptions) {
    this._config = config;
    this._queueConsumer = Consumer.create(this._config);
  }

  get queueConsumer() {
    return this._queueConsumer;
  }

  static create(
    config: Partial<ConsumerOptions>,
    messageHandler: (message: unknown) => Promise<void>,
  ) {
    // const sqsConfig: ConsumerOptions = {
    //   ...config,
    //   handleMessage: messageHandler,
    // };

    const sqsConfig: ConsumerOptions = {
      queueUrl: config.queueUrl || '',
      region: config.region,
      handleMessage: messageHandler,
    };

    return new SQSConsumerFactory(sqsConfig);
  }

  handleError(errHandlerFn: SQSErrorHandler): SQSConsumerFactory {
    this.queueConsumer.on('error', errHandlerFn);
    return this;
  }

  start(): SQSConsumerFactory {
    this.queueConsumer.start();
    return this;
  }
}