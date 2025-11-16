import { ServerList } from "./helper/servers";
import { MeClient, UeuseClient, UsersClient, FavoriteClient } from "./clients";
import { User, ServerInfoResponse } from "./helper/types";
export declare class Uwuzu {
    private userAgent;
    domain: ServerList;
    token: string | null;
    me: User | null;
    user: MeClient;
    users: UsersClient;
    ueuse: UeuseClient;
    favorite: FavoriteClient;
    constructor(domain: ServerList);
    /**
     * サーバー情報を取得します。
     * login()は不要です。
     * @returns {Promise<ServerInfoResponse>} サーバー情報
     */
    getServerInfo(): Promise<ServerInfoResponse>;
}
//# sourceMappingURL=index.d.ts.map