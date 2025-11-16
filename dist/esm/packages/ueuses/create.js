import { UwuzuError, UwuzuErrorCode } from "../../helper/error";
export async function create(userAgent, props) {
    if (!this.me) {
        throw new UwuzuError("ログインコマンドを実行していません", UwuzuErrorCode.UWUZU_LOGIN_03);
    }
    const request = {};
    request.token = this.token;
    request.text = props.text;
    if (props.nsfw)
        request.nsfw = props.nsfw;
    if (props.image1)
        request.image1 = props.image1;
    if (props.image2)
        request.image2 = props.image2;
    if (props.image3)
        request.image3 = props.image3;
    if (props.image4)
        request.image4 = props.image4;
    if (props.replyId)
        request.replyid = props.replyId;
    if (props.reuseId)
        request.reuseid = props.reuseId;
    const data = await fetch(`https://${this.domain}/api/ueuse/create`, {
        method: "POST",
        headers: {
            "User-Agent": userAgent,
        },
        body: JSON.stringify(request),
    }).then((res) => res.json());
    return data;
}
