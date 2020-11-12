"use strict";
const logger_1 = require("@appolo/logger");
const validator_1 = require("@appolo/validator");
module.exports = async function (app) {
    if (!app.injector.hasDefinition("logger")) {
        await app.module.load(logger_1.LoggerModule);
    }
    app.module.use(validator_1.ValidationModule.for({ convert: true, stripUnknown: true }));
};
//# sourceMappingURL=all.js.map