const userAgent = "uwuzu.js/beta";
import { MeClient, UeuseClient, UsersClient, FavoriteClient } from "./clients";
import { getServerInfo } from "./packages/getServerInfo";
export class Uwuzu {
    userAgent;
    domain;
    token;
    me;
    user;
    users;
    ueuse;
    favorite;
    constructor(domain) {
        this.userAgent = userAgent;
        this.domain = domain;
        this.token = null;
        this.me = null;
        this.user = new MeClient(this, this.userAgent);
        this.users = new UsersClient(this, this.userAgent);
        this.ueuse = new UeuseClient(this, this.userAgent);
        this.favorite = new FavoriteClient(this, this.userAgent);
    }
    /**
     * サーバー情報を取得します。
     * login()は不要です。
     * @returns {Promise<ServerInfoResponse>} サーバー情報
     */
    getServerInfo() {
        return getServerInfo.call(this, this.userAgent);
    }
}
