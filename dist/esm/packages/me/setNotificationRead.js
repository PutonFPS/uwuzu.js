import { UwuzuError, UwuzuErrorCode } from "../../helper/error";
export async function setNotificationRead(userAgent) {
    if (!this.me) {
        throw new UwuzuError("ログインコマンドを実行していません", UwuzuErrorCode.UWUZU_LOGIN_03);
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
