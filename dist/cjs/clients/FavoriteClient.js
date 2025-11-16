"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteClient = void 0;
const favorite_1 = require("../packages/favorite");
class FavoriteClient {
    parent;
    userAgent;
    constructor(parent, userAgent) {
        this.parent = parent;
        this.userAgent = userAgent;
    }
    /**
     * ユーズのいいねを追加・削除します。
     * @param {string} uniqId - 対象のユーズのユニークID
     * @returns {Promise<FavoriteResponse>}
     */
    change(uniqId) {
        return favorite_1.change.call(this.parent, this.userAgent, uniqId);
    }
    /**
     * ユーズのいいね情報を取得します。
     * @param {string} uniqId - 対象のユーズのユニークID
     * @returns {Promise<FavoriteResponse>}
     */
    get(uniqId) {
        return favorite_1.get.call(this.parent, this.userAgent, uniqId);
    }
}
exports.FavoriteClient = FavoriteClient;
