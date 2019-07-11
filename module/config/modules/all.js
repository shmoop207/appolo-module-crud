"use strict";
const logger_1 = require("@appolo/logger");
const validator_1 = require("@appolo/validator");
module.exports = async function (app) {
    if (!app.injector.hasDefinition("logger")) {
        await app.module(logger_1.LoggerModule);
    }
    await app.module(new validator_1.ValidationModule());
};
//# sourceMappingURL=all.js.map