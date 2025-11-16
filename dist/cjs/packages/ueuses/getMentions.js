"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMentions = getMentions;
const error_1 = require("../../helper/error");
async function getMentions(userAgent, limit, page) {
    if (!this.me) {
        throw new error_1.UwuzuError("ログインコマンドを実行していません", error_1.UwuzuErrorCode.UWUZU_LOGIN_03);
    }
    const data = await fetch(`https://${this.domain}/api/ueuse/mentions`, {
        method: "POST",
        headers: {
            "User-Agent": userAgent,
        },
        body: JSON.stringify({
            token: this.token,
            limit: limit,
            page: page,
        }),
    }).then((res) => res.json());
    return data;
}
