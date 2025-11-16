import { UwuzuError, UwuzuErrorCode } from "../../helper/error";
export async function search(userAgent, keyword, limit, page) {
    if (!this.me) {
        throw new UwuzuError("ログインコマンドを実行していません", UwuzuErrorCode.UWUZU_LOGIN_02);
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
