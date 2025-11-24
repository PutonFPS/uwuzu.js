import { UwuzuError, UwuzuErrorCode } from "../../helper/error";
export async function get(userAgent, uniqId) {
    if (!this.me) {
        throw new UwuzuError("ログインコマンドを実行していません", UwuzuErrorCode.UWUZU_LOGIN_03);
    }
    const raw = await fetch(`https://${this.domain}/api/ueuse/get`, {
        method: "POST",
        headers: {
            "User-Agent": userAgent,
        },
        body: JSON.stringify({
            token: this.token,
            uniqid: uniqId,
        }),
    }).then((res) => res.json());
    const entries = Object.entries(raw);
    const success = raw?.success ?? false;
    const items = entries
        .filter(([key]) => !isNaN(Number(key)))
        .map(([, value]) => value);
    const data = items[0];
    return { success, data };
}
