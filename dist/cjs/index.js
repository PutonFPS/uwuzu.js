"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uwuzu = void 0;
const userAgent = "uwuzu.js/beta";
const clients_1 = require("./clients");
const getServerInfo_1 = require("./packages/getServerInfo");
class Uwuzu {
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
        this.user = new clients_1.MeClient(this, this.userAgent);
        this.users = new clients_1.UsersClient(this, this.userAgent);
        this.ueuse = new clients_1.UeuseClient(this, this.userAgent);
        this.favorite = new clients_1.FavoriteClient(this, this.userAgent);
    }
    /**
     * サーバー情報を取得します。
     * login()は不要です。
     * @returns {Promise<ServerInfoResponse>} サーバー情報
     */
    getServerInfo() {
        return getServerInfo_1.getServerInfo.call(this, this.userAgent);
    }
}
exports.Uwuzu = Uwuzu;
