import { UwuzuError, UwuzuErrorCode } from "../../helper/error";
export async function login(token, userAgent) {
    if (token === "") {
        throw new UwuzuError(`トークンが入力されていません`, UwuzuErrorCode.UWUZU_LOGIN_01);
    }
    if (this.token !== null) {
        throw new UwuzuError(`あなたはすでにログインコマンドを実行しています`, UwuzuErrorCode.UWUZU_LOGIN_02);
    }
    const data = await fetch(`https://${this.domain}/api/me/`, {
        method: "POST",
        headers: {
            "User-Agent": userAgent,
        },
        body: JSON.stringify({
            token: token,
        }),
    }).then((res) => res.json());
    if (data.success === false) {
        throw new UwuzuError(`トークンが存在しないか、無効です`, UwuzuErrorCode.UWUZU_LOGIN_01);
    }
    else {
        this.token = token;
        this.me = data;
        return data;
    }
}
