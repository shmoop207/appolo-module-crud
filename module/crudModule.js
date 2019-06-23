"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
let CrudModule = class CrudModule extends appolo_1.Module {
    constructor(options) {
        super(options);
        this.Defaults = {};
    }
    get exports() {
        return [];
    }
};
CrudModule = tslib_1.__decorate([
    appolo_1.module()
], CrudModule);
exports.CrudModule = CrudModule;
//# sourceMappingURL=crudModule.js.map