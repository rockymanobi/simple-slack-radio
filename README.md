
# Simple Slack Radio

特定のSlackチャネルの発言を音声化して流してくれる。
`#random`チャネルなどをゆるりと聞いていると面白いのでは

## Requirements

* `say`コマンド : 直接使用しているのでMac推奨です
* node.js(10.xx or later推奨)


## Cloneと依存関係インストール

```
git clone ${このリポジトリ}
cd slack-radio
npm install
```

## 必要情報の収集

起動に必要な情報を取得する

* Botトークン
  * [こちら](https://www.utakata.work/entry/2017/11/18/100000) を参照
* SlackChannelID - 起動メッセージなど通知用
  * [こちら](https://qiita.com/unsoluble_sugar/items/603e51106d9632f3ea4f) で確認

## 起動

↑で取得した情報を環境変数に入れて起動する

```
APP_CHANNEL_ID=${SlackChannelID} SLACK_BOT_TOKEN=${Botトークン} npm start
```

SlackChannelIDに「起動したよ」とBotからメッセージが届けば成功


## 使い方 / 挙動

Botを招待したチャネルで何かを発言すればOK．ガンガン垂れ流してくれる。
まだメッセージ再生をキューでさばいたりする処理は入れていないので
長文を連続で投下すると声が被って死にそうになる
