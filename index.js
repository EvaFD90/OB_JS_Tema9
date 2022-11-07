const winston = require('winston');

const logger = winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
    ],
});


function throwError() {
    throw new Error("ERROR!")
}

try {
    throwError();
} catch(e) {
    logger.error(e.toString());
}