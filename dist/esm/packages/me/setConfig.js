import { UwuzuError, UwuzuErrorCode } from "../../helper/error";
export async function setConfig(userAgent, props) {
    if (!this.me) {
        throw new UwuzuError("ログインコマンドを実行していません", UwuzuErrorCode.UWUZU_LOGIN_03);
    }
    const request = {};
    request.token = this.token;
    if (props.userName)
        request.username = props.userName;
    if (props.profile)
        request.profile = props.profile;
    if (props.icon)
        request.icon = props.icon;
    if (props.header)
        request.header = props.header;
    if (Object.keys(request).length === 0) {
        throw new UwuzuError("変更する項目を最低でも一つは入力してください", UwuzuErrorCode.UWUZU_CONFIG_1);
    }
    const data = await fetch(`https://${this.domain}/api/me/settings`, {
        method: "POST",
        headers: {
            "User-Agent": userAgent,
        },
        body: JSON.stringify(request),
    }).then((res) => res.json());
    return data;
}
