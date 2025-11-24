import { Uwuzu } from "..";
import { SimpleUserResponse, User } from "../helper/types";
export declare class UsersClient {
    private parent;
    private userAgent;
    constructor(parent: Uwuzu, userAgent: string);
    /**
     *
     * @param {string} userId - 検索するユーザーID
     * @returns {Promise<User>} ユーザー情報
     */
    get(userId: string): Promise<User>;
    /**
     *
     * @param {string} userId - 対象ユーザー
     * @param {boolean} status - フォロー状態（trueでフォロー、falseでフォロー解除）
     * @returns {Promise<SimpleUserResponse>}
     */
    setFollow(userId: string, status: boolean): Promise<SimpleUserResponse>;
}
//# sourceMappingURL=UersClient.d.ts.map