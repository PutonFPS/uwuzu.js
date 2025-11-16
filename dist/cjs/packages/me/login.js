"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
const error_1 = require("../../helper/error");
async function login(token, userAgent) {
    if (token === "") {
        throw new error_1.UwuzuError(`トークンが入力されていません`, error_1.UwuzuErrorCode.UWUZU_LOGIN_01);
    }
    if (this.token !== null) {
        throw new error_1.UwuzuError(`あなたはすでにログインコマンドを実行しています`, error_1.UwuzuErrorCode.UWUZU_LOGIN_02);
    }
    const data = await fetch(`https://${this.domain}/api/me/`, {
        method: "POST",
        headers: {
            "User-Agent": userAgent,
        },
        body: JSON.stringify({
            token: token,
        }),
    }).then((res) => res.json());
    if (data.success === false) {
        throw new error_1.UwuzuError(`トークンが存在しないか、無効です`, error_1.UwuzuErrorCode.UWUZU_LOGIN_01);
    }
    else {
        this.token = token;
        this.me = data;
        return data;
    }
}
