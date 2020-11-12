import {App} from '@appolo/core';

import {LoggerModule} from '@appolo/logger';
import {ValidationModule} from '@appolo/validator';


export = async function (app: App) {

    if (!app.injector.hasDefinition("logger")) {
        await app.module.load(LoggerModule)
    }

    app.module.use(ValidationModule.for({convert: true, stripUnknown: true}));

}
