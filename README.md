# CSSについて

- [Bootstrap4](https://getbootstrap.com/)を利用しています。

# HTMLについて

- [Pug](https://pugjs.org/api/getting-started.html)を利用しています
- Pugについてのわかりやすい解説
    - [【Pug】ゴリラでもわかるJade改めPug入門](https://blog.mismithportfolio.com/web/20160326pugbegin)
    - [Pugと仲良くする方法](https://qiita.com/garakuta/items/c83548c74e45838e3fe0)

# コンパイルについて

- npmを利用します。
- コマンドは以下の通り


## 作業中のコマンド
cssについてminifyする作業をとばしています。

```
npm run watch

SassファイルおよびHTMLファイルをWatchし、変更があれば、ブラウザを更新します。

最終的にcssはdist/css/app.cssに書き出されます。
```


## 作業完了時のコマンド
cssをminifyします。
最終的なcssの読み込みを`.min.css`に変更する必要があります。

```
npm run build

dist/css/app.min.cssを書き出します。
```
