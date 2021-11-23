const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { WinstonInstrumentation } = require('@opentelemetry/instrumentation-winston');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');

const provider = new NodeTracerProvider();
provider.register();

registerInstrumentations({
  instrumentations: [
    new WinstonInstrumentation({
      // Optional hook to insert additional context to log metadata.
      // Called after trace context is injected to metadata.
      logHook: (record: any, span: any) => {
        record['resource.service.name'] = provider.resource.attributes['service.name'];
      },
    }),
    // other instrumentations
  ],
});

const winston = require('winston');
const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
})

export default logger