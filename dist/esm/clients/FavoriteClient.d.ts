import { Uwuzu } from "..";
import { FavoriteResponse } from "../helper/types";
export declare class FavoriteClient {
    private parent;
    private userAgent;
    constructor(parent: Uwuzu, userAgent: string);
    /**
     * ユーズのいいねを追加・削除します。
     * @param {string} uniqId - 対象のユーズのユニークID
     * @returns {Promise<FavoriteResponse>}
     */
    change(uniqId: string): Promise<FavoriteResponse>;
    /**
     * ユーズのいいね情報を取得します。
     * @param {string} uniqId - 対象のユーズのユニークID
     * @returns {Promise<FavoriteResponse>}
     */
    get(uniqId: string): Promise<FavoriteResponse>;
}
//# sourceMappingURL=FavoriteClient.d.ts.map