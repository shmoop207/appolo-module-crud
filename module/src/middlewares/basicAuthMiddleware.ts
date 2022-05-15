import {define, inject, singleton} from "@appolo/inject";
import {StaticMiddleware, IResponse, IRequest, NextFn, IRouteOptions, BadRequestError} from "@appolo/route";
import {Strings, Arrays} from "@appolo/utils";

export abstract class BasicAuthMiddleware extends StaticMiddleware {

    async run(req: IRequest, res: IResponse, next: NextFn, route: IRouteOptions) {
        try {
            let authHeader = req.headers["authorization"];

            if (!authHeader) {
                throw new Error('no authorization')
            }

            let match = /^ *(?:[Bb][Aa][Ss][Ii][Cc]) +([A-Za-z0-9._~+/-]+=*) *$/.exec(authHeader)

            if (!match) {
                throw new Error("invalid auth")
            }

            let decoded = Buffer.from(match[1], 'base64').toString()

            let userPass = /^([^:]*):(.*)$/.exec(decoded)

            if (!userPass) {
                throw new Error("invalid auth")
            }

            let auth = {user: userPass[1], password: userPass[2]}

            let isValid = await this.isValidAuth(auth);

            if (!isValid) {
                throw new Error("invalid auth")
            }

            next();


        } catch (e) {
            res.status(401);
            res.setHeader('WWW-Authenticate', 'Basic realm="api"')
            res.end('Access denied')
        }


    }

    protected abstract isValidAuth(auth: { user: string, password: string }): Promise<boolean>
}

