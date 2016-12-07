'use strict';

const config = require('./config/config'),
    express = require('./config/express'),
    app = express();

app.listen(config.port, config.ip);