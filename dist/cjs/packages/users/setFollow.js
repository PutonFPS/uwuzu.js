"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFollow = setFollow;
const error_1 = require("../../helper/error");
async function setFollow(userId, userAgent, status) {
    if (!this.me) {
        throw new error_1.UwuzuError("ログインコマンドを実行していません", error_1.UwuzuErrorCode.UWUZU_LOGIN_03);
    }
    let data;
    if (status === true) {
        data = await fetch(`https://${this.domain}/api/users/follow`, {
            method: "POST",
            headers: {
                "User-Agent": userAgent,
            },
            body: JSON.stringify({
                token: this.token,
                userid: userId,
            }),
        }).then((res) => res.json());
    }
    else {
        data = await fetch(`https://${this.domain}/api/users/unfollow`, {
            method: "POST",
            headers: {
                "User-Agent": userAgent,
            },
            body: JSON.stringify({
                token: this.token,
                userid: userId,
            }),
        }).then((res) => res.json());
    }
    return data;
}
