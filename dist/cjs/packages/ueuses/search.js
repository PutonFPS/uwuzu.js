"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = search;
const error_1 = require("../../helper/error");
async function search(userAgent, keyword, limit, page) {
    if (!this.me) {
        throw new error_1.UwuzuError("ログインコマンドを実行していません", error_1.UwuzuErrorCode.UWUZU_LOGIN_02);
    }
    const data = await fetch(`https://${this.domain}/api/ueuse/search`, {
        method: "POST",
        headers: {
            "User-Agent": userAgent,
        },
        body: JSON.stringify({
            token: this.token,
            keyword: keyword,
            limit: limit,
            page: page,
        }),
    }).then((res) => res.json());
    return data;
}
