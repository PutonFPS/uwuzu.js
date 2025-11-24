## 詳細

uwuzu.js はオープンソースソフトウェアのマイクロブログ SNS である uwuzu の API ラッパーです。

## インストール

```bash
$ npm i uwuzu.js
```

```html
<script
  type="module"
  src="https://raw.githubusercontent.com/PutonFPS/uwuzu.js/refs/heads/main/dist/browser/uwuzu.js"
></script>
```

## API

### Constructor

Uwuzu のインスタンス作成には`new Uwuzu("Server List")`を使用します。

> [!IMPORTANT]
> コンストラクター作成時に選択するサーバーリストは動作が確認できているサーバーのみになります。
> サーバー管理者は API の仕様がデフォルトの uwuzu と同じ時のみ追加の申請ができます。

### getServerInfo()

サーバー情報を取得します。`ServerInfoResponse`を返します。

<ins>**唯一**</ins>ログインを必須としないコマンドです。

```ts
interface ServerInfoResponse {
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
```

```ts
interface ServerNotice {
  title: string;
  note: string;
  editor: string;
  datetime: string;
}
```

### user.login(TOKEN)

与えられたトークンのユーザーにログインします。`User`を返します。

```ts
interface User {
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
```

```ts
interface Role {
  name: string;
  color: string;
  effect: string;
  id: string;
}
```

### user.getNotification(option)

通知を取得します。オプションは指定必須ではありません。

```ts
{
  limit?: number;
  page?: number;
}
```

`NotificationResponse`を返します。

```ts
interface NotificationResponse {
  success: boolean;
  data: Notification[];
}
```

```ts
interface Notification {
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
```

### user.setNotificationRead()

通知を一括既読にします。

### user.setConfig(option)

ユーザー設定を変更します。オプションは一つ以上指定してください。

```ts
{
  userName?: string;
  profile?: string;
  icon?: string;
  header?: string;
}
```

### user.getBookmark(option)

ユーザーのブックマークを取得します。
オプションは指定必須ではありません。

```ts
{
  limit?: number;
  page?: number;
}
```

`UeuseResponse`を返します。

```ts
interface UeuseResponse {
  success: boolean;
  data: Ueuse[];
}
```

```ts
interface Ueuse {
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
```
