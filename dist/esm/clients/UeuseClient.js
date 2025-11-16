import { fetchUeuses, get, getReplies, getMentions, search, create, remove, } from "../packages/ueuses";
export class UeuseClient {
    parent;
    userAgent;
    constructor(parent, userAgent) {
        this.parent = parent;
        this.userAgent = userAgent;
    }
    /**
     * サーバー内のユーズ一覧を取得します。
     * * @param {object} [params] - ユーズ取得のためのパラメータ（オプション）
     * @param {number} [params.limit] - 取得するユーズの最大件数。デフォルトは5です。
     * @param {number} [params.page] - 取得するユーズのページ番号。デフォルトは1です。
     * @returns {Promise<UeuseResponse[]>} ユーズ一覧
     */
    fetchUeuses({ limit = 5, page = 1, } = {}) {
        return fetchUeuses.call(this.parent, this.userAgent, limit, page);
    }
    /**
     * 単一ユーズを取得します。
     * @param {string} uniqId - ユーズのユニークID
     * @returns {Promise<UeuseResponse>} ユーズ
     */
    getUeuse(uniqId) {
        return get.call(this.parent, this.userAgent, uniqId);
    }
    /**
     * ユーズの返信を取得します。
     * @param {string} uniqId - 取得したいユーズのユニークID
     * * @param {object} [params] - 返信取得のためのパラメータ（オプション）
     * @param {number} [params.limit] - 取得する返信の最大件数。デフォルトは5です。
     * @param {number} [params.page] - 取得する返信のページ番後。デフォルトは1です。
     * @returns {Promise<UeuseResponse[]>} 返信
     */
    getReplies(uniqId, { limit = 5, page = 1 } = {}) {
        return getReplies.call(this.parent, this.userAgent, uniqId, limit, page);
    }
    /**
     * メンションされたユーズを取得します。
     * * @param {object} [params] - メンション取得のためのパラメータ（オプション）
     * @param {number} [params.limit] - 取得するユーズの最大件数。デフォルトは5です。
     * @param {number} [params.page] - 取得するユーズのページ番後。デフォルトは1です。
     * @returns {Promise<UeuseResponse[]>} ユーズ一覧
     */
    getMentions({ limit = 5, page = 1, } = {}) {
        return getMentions.call(this.parent, this.userAgent, limit, page);
    }
    /**
     * ユーズを検索します。
     * @param {string} keyword - 検索キーワード
     * * @param {object} [params] - ユーズ取得のためのパラメータ（オプション）
     * @param {number} [params.limit] - 取得するユーズの最大件数。デフォルトは5です。
     * @param {number} [params.page] - 取得するユーズのページ番後。デフォルトは1です。
     * @returns {Promise<UeuseResponse[]>} 検索結果
     */
    search(keyword, { limit = 5, page = 1 } = {}) {
        return search.call(this.parent, this.userAgent, keyword, limit, page);
    }
    /**
     * ユーズを作成します。
     * * @param {object} [props] - ユーズ作成のためのパラメータ（textは必須）
     *  @param {string} [props.text] - メッセージ
     * @param {boolean} [props.nsfw] - nsfwかどうか
     * @param {string} [props.image1] - 画像（Base64でエンコードされたもの）
     * @param {string} [props.image2] - 画像（Base64でエンコードされたもの）
     * @param {string} [props.image3] - 画像（Base64でエンコードされたもの）
     * @param {string} [props.image4] - 画像（Base64でエンコードされたもの）
     * @returns {Promise<SimpleUeuseResponse>}
     */
    create(props) {
        return create.call(this.parent, this.userAgent, props);
    }
    /**
     * ユーズを削除します。
     * @param {string} uniqId - 削除するユーズのユニークID
     * @returns {Promise<SimpleUeuseResponse>}
     */
    remove(uniqId) {
        return remove.call(this.parent, this.userAgent, uniqId);
    }
}
