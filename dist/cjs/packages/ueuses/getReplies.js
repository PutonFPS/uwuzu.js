"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReplies = getReplies;
const error_1 = require("../../helper/error");
async function getReplies(userAgent, uniqId, limit, page) {
    if (!this.me) {
        throw new error_1.UwuzuError("ログインコマンドを実行していません", error_1.UwuzuErrorCode.UWUZU_LOGIN_03);
    }
    const data = await fetch(`https://${this.domain}/api/ueuse/replies`, {
        method: "POST",
        headers: {
            "User-Agent": userAgent,
        },
        body: JSON.stringify({
            token: this.token,
            uniqid: uniqId,
            limit: limit,
            page: page,
        }),
    }).then((res) => res.json());
    return data;
}
