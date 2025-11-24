import { UwuzuError, UwuzuErrorCode } from "../../helper/error";
export async function getReplies(userAgent, uniqId, limit, page) {
    if (!this.me) {
        throw new UwuzuError("ログインコマンドを実行していません", UwuzuErrorCode.UWUZU_LOGIN_03);
    }
    const raw = await fetch(`https://${this.domain}/api/ueuse/replies`, {
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
    const entries = Object.entries(raw);
    const success = raw?.success ?? false;
    const data = entries
        .filter(([key]) => !isNaN(Number(key)))
        .map(([, value]) => value);
    return { success, data };
}
