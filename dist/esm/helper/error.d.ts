export declare enum UwuzuErrorCode {
    UWUZU_LOGIN_01 = "UWUZU_TOKEN_INVALID",
    UWUZU_LOGIN_02 = "UWUZU_ALREADY_LOGGED_IN",
    UWUZU_LOGIN_03 = "UWUZU_NOT_LOGGED_IN",
    UWUZU_CONFIG_1 = "UWUZU_CONFIG_OPTION_INVALID"
}
export declare class UwuzuError extends Error {
    code: UwuzuErrorCode;
    constructor(message: string, code: UwuzuErrorCode);
}
//# sourceMappingURL=error.d.ts.map