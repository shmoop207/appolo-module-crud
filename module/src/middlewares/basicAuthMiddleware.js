"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicAuthMiddleware = void 0;
const route_1 = require("@appolo/route");
class BasicAuthMiddleware extends route_1.StaticMiddleware {
    async run(req, res, next, route) {
        try {
            let authHeader = req.headers["authorization"];
            if (!authHeader) {
                throw new Error('no authorization');
            }
            let match = /^ *(?:[Bb][Aa][Ss][Ii][Cc]) +([A-Za-z0-9._~+/-]+=*) *$/.exec(authHeader);
            if (!match) {
                throw new Error("invalid auth");
            }
            let decoded = Buffer.from(match[1], 'base64').toString();
            let userPass = /^([^:]*):(.*)$/.exec(decoded);
            if (!userPass) {
                throw new Error("invalid auth");
            }
            let auth = { user: userPass[1], password: userPass[2] };
            let isValid = await this.isValidAuth(auth);
            if (!isValid) {
                throw new Error("invalid auth");
            }
            next();
        }
        catch (e) {
            res.status(401);
            res.setHeader('WWW-Authenticate', 'Basic realm="api"');
            res.end('Access denied');
        }
    }
}
exports.BasicAuthMiddleware = BasicAuthMiddleware;
//# sourceMappingURL=basicAuthMiddleware.js.map