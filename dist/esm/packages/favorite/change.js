import { UwuzuError, UwuzuErrorCode } from "../../helper/error";
export async function change(userAgent, uniqId) {
    if (!this.me) {
        throw new UwuzuError("ログインコマンドを実行していません", UwuzuErrorCode.UWUZU_LOGIN_03);
    }
    const raw = await fetch(`https://${this.domain}/api/favorite/change`, {
        method: "POST",
        headers: {
            "User-Agent": userAgent,
        },
        body: JSON.stringify({
            token: this.token,
            uniqid: uniqId,
        }),
    }).then((res) => res.json());
    const success = raw?.success ?? false;
    const list = raw?.favorite_list;
    const data = list.split(",").filter((str) => str !== "");
    return { success, data };
}
