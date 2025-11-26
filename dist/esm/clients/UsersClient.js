import { get, setFollow } from "../packages/users";
export class UsersClient {
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
        return get.call(this.parent, userId, this.userAgent);
    }
    /**
     *
     * @param {string} userId - 対象ユーザー
     * @param {boolean} status - フォロー状態（trueでフォロー、falseでフォロー解除）
     * @returns {Promise<SimpleUserResponse>}
     */
    setFollow(userId, status) {
        return setFollow.call(this.parent, userId, this.userAgent, status);
    }
}
