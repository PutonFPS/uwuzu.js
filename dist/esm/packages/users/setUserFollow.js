import { UwuzuError, UwuzuErrorCode } from "../../helper/error";
export async function setUserFollow(userId, userAgent, status) {
    if (!this.me) {
        throw new UwuzuError("ログインコマンドを実行していません", UwuzuErrorCode.UWUZU_LOGIN_03);
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
