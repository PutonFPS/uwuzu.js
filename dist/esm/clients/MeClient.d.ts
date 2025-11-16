import { Uwuzu } from "..";
import { NotificationResponse, SimpleResponse, UeuseResponse, User } from "../helper/types";
export declare class MeClient {
    private parent;
    private userAgent;
    constructor(parent: Uwuzu, userAgent: string);
    /**
     * トークンを利用してユーザーの情報にアクセスできるようにします。
     * 現状、トークンを利用してどの範囲まで読み取りが可能かを判断することはできないので、
     * 必ずすべての権限が付与されたトークンを利用してください。
     * @param {string} token - ユーザートークンを入力してください。
     * @returns {Promise<User>} ユーザー情報
     */
    login(token: string): Promise<User>;
    /**
     * ユーザーに向けて送信された通知を取得します。
     * * @param {object} [params] - 通知取得のためのパラーメータ（オプション）
     * @param {number} [params.limit=5] - 取得する通知の最大件数。デフォルトは5です。
     * @param {number} [params.page=1] - 取得する通知のページ番号。デフォルトは1です。
     * @returns {Promise<NotificationResponse>} 通知
     */
    getNotification({ limit, page, }?: {
        limit?: number;
        page?: number;
    }): Promise<NotificationResponse>;
    /**
     * 通知を一括で既読します。
     * @returns {Promise<SimpleResponse>}
     */
    setNotificationRead(): Promise<SimpleResponse>;
    /**
     * ユーザーの設定を変更します。
     * * @param {object} [props] - 変更する設定（どれか一つは必要）
     * @param {string} [props.username] - ユーザー名
     * @param {string} [props.profile] - プロフィール
     * @param {string} [props.icon] - ユーザーアイコン（Base64でエンコードされたもの）
     * @param {string} [props.header] - ユーザーヘッダー（Base64でエンコードされたもの）
     * @returns {Promise<SimpleResponse>}
     */
    setConfig(props: {
        userName?: string;
        profile?: string;
        icon?: string;
        header?: string;
    }): Promise<SimpleResponse>;
    /**
     * ユーザーのブックマークを取得します。
     * * @param {object} [params] - ブックマーク取得のためのパラーメータ（オプション）
     * @param {number} [params.limit=5] - 取得するブックマークの最大件数。デフォルトは5です。
     * @param {number} [params.page=1] - 取得するブックマークのページ番号。デフォルトは1です。
     * @returns {Promise<NotificationResponse>} ブックマーク一覧
     */
    getBookmark({ limit, page, }?: {
        limit?: number;
        page?: number;
    }): Promise<UeuseResponse[]>;
}
//# sourceMappingURL=MeClient.d.ts.map