import { Uwuzu } from "..";
import { SimpleUeuseResponse, UeuseResponse } from "../helper/types";
export declare class UeuseClient {
    private parent;
    private userAgent;
    constructor(parent: Uwuzu, userAgent: string);
    /**
     * サーバー内のユーズ一覧を取得します。
     * * @param {object} [params] - ユーズ取得のためのパラメータ（オプション）
     * @param {number} [params.limit] - 取得するユーズの最大件数。デフォルトは5です。
     * @param {number} [params.page] - 取得するユーズのページ番号。デフォルトは1です。
     * @returns {Promise<UeuseResponse[]>} ユーズ一覧
     */
    fetchUeuses({ limit, page, }?: {
        limit?: number;
        page?: number;
    }): Promise<UeuseResponse[]>;
    /**
     * 単一ユーズを取得します。
     * @param {string} uniqId - ユーズのユニークID
     * @returns {Promise<UeuseResponse>} ユーズ
     */
    getUeuse(uniqId: string): Promise<UeuseResponse>;
    /**
     * ユーズの返信を取得します。
     * @param {string} uniqId - 取得したいユーズのユニークID
     * * @param {object} [params] - 返信取得のためのパラメータ（オプション）
     * @param {number} [params.limit] - 取得する返信の最大件数。デフォルトは5です。
     * @param {number} [params.page] - 取得する返信のページ番後。デフォルトは1です。
     * @returns {Promise<UeuseResponse[]>} 返信
     */
    getReplies(uniqId: string, { limit, page }?: {
        limit?: number;
        page?: number;
    }): Promise<UeuseResponse[]>;
    /**
     * メンションされたユーズを取得します。
     * * @param {object} [params] - メンション取得のためのパラメータ（オプション）
     * @param {number} [params.limit] - 取得するユーズの最大件数。デフォルトは5です。
     * @param {number} [params.page] - 取得するユーズのページ番後。デフォルトは1です。
     * @returns {Promise<UeuseResponse[]>} ユーズ一覧
     */
    getMentions({ limit, page, }?: {
        limit?: number;
        page?: number;
    }): Promise<UeuseResponse[]>;
    /**
     * ユーズを検索します。
     * @param {string} keyword - 検索キーワード
     * * @param {object} [params] - ユーズ取得のためのパラメータ（オプション）
     * @param {number} [params.limit] - 取得するユーズの最大件数。デフォルトは5です。
     * @param {number} [params.page] - 取得するユーズのページ番後。デフォルトは1です。
     * @returns {Promise<UeuseResponse[]>} 検索結果
     */
    search(keyword: string, { limit, page }?: {
        limit?: number;
        page?: number;
    }): Promise<UeuseResponse[]>;
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
    create(props: {
        text: string;
        nsfw?: boolean;
        image1?: string;
        image2?: string;
        image3?: string;
        image4?: string;
    }): Promise<SimpleUeuseResponse>;
    /**
     * ユーズを削除します。
     * @param {string} uniqId - 削除するユーズのユニークID
     * @returns {Promise<SimpleUeuseResponse>}
     */
    remove(uniqId: string): Promise<SimpleUeuseResponse>;
}
//# sourceMappingURL=UeuseClient.d.ts.map