# 秀和システム「フロントエンド開発入門 プロフェッショナルな開発ツールと設計・実装 」の実践編をやってみる

- [フロントエンド開発入門 プロフェッショナルな開発ツールと設計・実装](https://www.shuwasystem.co.jp/book/9784798061771.html)

## 実行環境

本アプリケーションは下記環境を想定して実装されています。
ご自身の環境で利用する場合は各種ツールのバージョンをご確認の上で利用してください。

- Docker: 19.x
- Node.js: 12.x
- Yarn: 1.22.x

### API の環境構築手順

```bash
git clone git@github.com:n05-frontend/shuwa-frontend-book-app.git
cd shuwa-frontend-book-app
docker-compose build # 2回目以降は不要
docker-compose up -d # Docker コンテナ起動
```

### コミットメッセージ
- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes 
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing or correcting existing tests
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

引用元: [Developing AngularJS](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits)
