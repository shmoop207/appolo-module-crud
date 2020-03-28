import {App} from 'appolo';

import {LoggerModule} from '@appolo/logger';
import {ValidationModule} from '@appolo/validator';


export = async function (app: App) {

    if (!app.injector.hasDefinition("logger")) {
        await app.module(LoggerModule)
    }

    await app.module(new ValidationModule({convert: true, stripUnknown: true}));

}
