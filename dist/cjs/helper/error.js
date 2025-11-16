"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UwuzuError = exports.UwuzuErrorCode = void 0;
var UwuzuErrorCode;
(function (UwuzuErrorCode) {
    UwuzuErrorCode["UWUZU_LOGIN_01"] = "UWUZU_TOKEN_INVALID";
    UwuzuErrorCode["UWUZU_LOGIN_02"] = "UWUZU_ALREADY_LOGGED_IN";
    UwuzuErrorCode["UWUZU_LOGIN_03"] = "UWUZU_NOT_LOGGED_IN";
    UwuzuErrorCode["UWUZU_CONFIG_1"] = "UWUZU_CONFIG_OPTION_INVALID";
})(UwuzuErrorCode || (exports.UwuzuErrorCode = UwuzuErrorCode = {}));
class UwuzuError extends Error {
    code;
    constructor(message, code) {
        super(message);
        this.name = "UwuzuError";
        this.code = code;
    }
}
exports.UwuzuError = UwuzuError;
