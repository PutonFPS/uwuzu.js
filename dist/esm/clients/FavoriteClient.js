import { change, get } from "../packages/favorite";
export class FavoriteClient {
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
        return change.call(this.parent, this.userAgent, uniqId);
    }
    /**
     * ユーズのいいね情報を取得します。
     * @param {string} uniqId - 対象のユーズのユニークID
     * @returns {Promise<FavoriteResponse>}
     */
    get(uniqId) {
        return get.call(this.parent, this.userAgent, uniqId);
    }
}
