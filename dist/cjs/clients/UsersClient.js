"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersClient = void 0;
const users_1 = require("../packages/users");
class UsersClient {
    parent;
    userAgent;
    constructor(parent, userAgent) {
        this.parent = parent;
        this.userAgent = userAgent;
    }
    /**
     *
     * @param {string} userId - 検索するユーザーID
     * @returns {Promise<User>} ユーザー情報
     */
    get(userId) {
        return users_1.get.call(this.parent, userId, this.userAgent);
    }
    /**
     *
     * @param {string} userId - 対象ユーザー
     * @param {boolean} status - フォロー状態（trueでフォロー、falseでフォロー解除）
     * @returns {Promise<SimpleUserResponse>}
     */
    setFollow(userId, status) {
        return users_1.setFollow.call(this.parent, userId, this.userAgent, status);
    }
}
exports.UsersClient = UsersClient;
