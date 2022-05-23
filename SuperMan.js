"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SuperMan = void 0;
var Flyer_1 = require("./Flyer");
var SuperMan = /** @class */ (function (_super) {
    __extends(SuperMan, _super);
    function SuperMan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SuperMan.prototype.fly = function () {
        return "super man flying";
    };
    SuperMan.prototype.takeOff = function () {
        return "super man taking off";
    };
    SuperMan.prototype.land = function () {
        return 'superman is: ' + _super.prototype.land.call(this);
    };
    return SuperMan;
}(Flyer_1.Flyer));
exports.SuperMan = SuperMan;
