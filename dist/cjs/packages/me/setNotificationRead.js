"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setNotificationRead = setNotificationRead;
const error_1 = require("../../helper/error");
async function setNotificationRead(userAgent) {
    if (!this.me) {
        throw new error_1.UwuzuError("ログインコマンドを実行していません", error_1.UwuzuErrorCode.UWUZU_LOGIN_03);
    }
    const data = await fetch(`https://${this.domain}/api/me/notification/read`, {
        method: "POST",
        headers: {
            "User-Agent": userAgent,
        },
        body: JSON.stringify({
            token: this.token,
        }),
    }).then((res) => res.json());
    return data;
}
