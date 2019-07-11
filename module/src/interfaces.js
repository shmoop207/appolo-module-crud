"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appolo_1 = require("appolo");
exports.MethodsDic = {
    [appolo_1.Methods.GET]: appolo_1.get,
    [appolo_1.Methods.POST]: appolo_1.post,
    [appolo_1.Methods.DELETE]: appolo_1.del,
    [appolo_1.Methods.PATCH]: appolo_1.patch
};
var ValidateGroups;
(function (ValidateGroups) {
    ValidateGroups["Update"] = "update";
    ValidateGroups["Create"] = "create";
})(ValidateGroups = exports.ValidateGroups || (exports.ValidateGroups = {}));
//# sourceMappingURL=interfaces.js.map