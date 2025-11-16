"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = remove;
const error_1 = require("../../helper/error");
async function remove(userAgent, uniqId) {
    if (!this.me) {
        throw new error_1.UwuzuError("ログインコマンドを実行していません", error_1.UwuzuErrorCode.UWUZU_LOGIN_03);
    }
    const data = await fetch(`https://${this.domain}/api/ueuse/delete`, {
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
