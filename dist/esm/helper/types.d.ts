/**
 * for user data
 */
export interface Role {
    name: string;
    color: string;
    effect: string;
    id: string;
}
export interface User {
    success: boolean;
    username?: string;
    userid?: string;
    profile?: string;
    user_icon?: string;
    user_header?: string;
    registered_date?: string;
    followee?: string[];
    followee_cnt?: number;
    follower?: string[];
    follower_cnt?: number;
    ueuse_cnt?: number;
    isBot?: boolean;
    isAdmin?: boolean;
    role?: Role[];
    language?: string;
    error_code?: string;
}
/**
 * for server response
 */
export interface ServerNotice {
    title: string;
    note: string;
    editor: string;
    datetime: string;
}
export interface ServerInfoResponse {
    server_info: {
        server_name: string;
        server_icon: string;
        server_description: string;
        adminstor: {
            name: string;
            email: string;
        };
        terms_url: string;
        privacy_policy_url: string;
        max_ueuse_length: number;
        invitation_code: boolean;
        account_migration: boolean;
        usage: {
            users: number;
            ueuse: number;
        };
    };
    software: {
        name: string;
        version: string;
        repository: string;
    };
    server_notice: ServerNotice[];
}
/**
 * for user notification
 */
export interface Notification {
    from: {
        username: string;
        usreid: string;
        user_icon: string;
        user_header: string;
    };
    category: string;
    title: string;
    text: string;
    datetime: string;
    valueid: string;
    is_checked: boolean;
}
export interface NotificationResponse {
    [key: string]: Notification | boolean;
    success: boolean;
}
/**
 * for simple response
 */
export interface SimpleResponse {
    success: boolean;
}
export interface SimpleUserResponse {
    userid: string;
    success: boolean;
}
/**
 * for ueuse
 */
export interface UeuseResponse {
    uniqid: string;
    replyid: string;
    reuseid: string;
    text: string;
    account: {
        username: string;
        userid: string;
        user_icon: string;
        user_header: string;
        is_bot: boolean;
    };
    photo1: string;
    photo2: string;
    photo3: string;
    photo4: string;
    video1: string;
    favorite: string[];
    favorite_cnt: string;
    datetime: string;
    abi: string;
    abidatetime: string;
    nsfw: boolean;
}
/**
 * for ueuse create
 */
export interface SimpleUeuseResponse {
    uniqid: string;
    userid: string;
    success?: boolean;
}
/**
 * for favorite
 */
export interface FavoriteResponse {
    favorite_list: string;
    success: boolean;
}
//# sourceMappingURL=types.d.ts.map