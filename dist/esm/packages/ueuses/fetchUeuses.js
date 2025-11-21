import { UwuzuError, UwuzuErrorCode } from "../../helper/error";
export async function fetchUeuses(userAgent, limit, page) {
    if (!this.me) {
        throw new UwuzuError("ログインコマンドを実行していません", UwuzuErrorCode.UWUZU_LOGIN_03);
    }
    const data = await fetch(`https://${this.domain}/api/ueuse?token=${this.token}`, {
        method: "POST",
        headers: {
            "User-Agent": userAgent,
        },
        body: JSON.stringify({
            limit: limit,
            page: page,
        }),
    }).then((res) => res.json());
    /*
    const data = await fetch(`https://${this.domain}/api/ueuse`, {
      method: "POST",
      headers: {
        "User-Agent": userAgent,
      },
      body: JSON.stringify({
        token: this.token,
        limit: limit,
        page: page,
      }),
    }).then((res) => res.json() as Promise<UeuseResponse[]>);
    */
    return data;
}
