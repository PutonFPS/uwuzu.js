import { UwuzuError, UwuzuErrorCode } from "../../helper/error";
export async function remove(userAgent, uniqId) {
    if (!this.me) {
        throw new UwuzuError("ログインコマンドを実行していません", UwuzuErrorCode.UWUZU_LOGIN_03);
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
