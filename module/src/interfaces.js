"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateGroups = exports.MethodsDic = void 0;
const route_1 = require("@appolo/route");
exports.MethodsDic = {
    [route_1.Methods.GET]: route_1.get,
    [route_1.Methods.POST]: route_1.post,
    [route_1.Methods.DELETE]: route_1.del,
    [route_1.Methods.PATCH]: route_1.patch
};
var ValidateGroups;
(function (ValidateGroups) {
    ValidateGroups["Update"] = "update";
    ValidateGroups["Create"] = "create";
})(ValidateGroups = exports.ValidateGroups || (exports.ValidateGroups = {}));
//# sourceMappingURL=interfaces.js.map