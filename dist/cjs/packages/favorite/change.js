"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.change = change;
const error_1 = require("../../helper/error");
async function change(userAgent, uniqId) {
    if (!this.me) {
        throw new error_1.UwuzuError("ログインコマンドを実行していません", error_1.UwuzuErrorCode.UWUZU_LOGIN_03);
    }
    const data = await fetch(`https://${this.domain}/api/favorite/change`, {
        method: "POST",
        headers: {
            "User-Agent": userAgent,
        },
        body: JSON.stringify({
            token: this.token,
            uniqid: uniqId,
        }),
    }).then((res) => res.json());
    return data;
}
