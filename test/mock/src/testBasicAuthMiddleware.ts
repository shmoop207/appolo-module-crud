import {define, singleton} from '@appolo/inject';
import {BasicAuthMiddleware} from "../../../module/src/middlewares/basicAuthMiddleware";

@define()
@singleton()
export class TestBasicAuthMiddleware extends BasicAuthMiddleware {

    protected async isValidAuth(auth: { user: string, password: string }): Promise<boolean> {
        return (auth.user == "test" && auth.password == "reporting")
    }

}
