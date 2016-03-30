'use strict';

var events = require('events');


/**
 * Allows internal objects and services to exchange messages.
 *
 * @constructor
 */
class zoneEmitter extends events.EventEmitter {

    emitMessage(errorName, errorData) {
        this.emit( [errorName], errorData );
    }
}

module.exports = zoneEmitter;