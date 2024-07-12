# デザインのサンプル集

## 開発環境
- Next12.js
- Next.jsのサーバーを起動
```
npm run dev
```
- ローカルサーバー
http://localhost:3000/

- Vscodeの機能拡張
  - Next.js snippers(Pulikit Fangway)
  - nafeで補完
```js
const sample = () => {
    return (
        <div>
            Enter
        </div>
    );
}

export default sample;
```

## CSSフレームワーク
- BootStrap5のインストール
```
yarn add bootstrap@next
```

- _app.jsに適応(グローバルに適応)
```js
import 'bootstrap/dist/css/bootstrap.min.css'
```

## document
- _document.js
```js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return(
        <Html lang="ja">
            <Head>
            </Head>
            <body>
                <Main/>
                <NextScript />
            </body>
        </Html>
    )
}
```

## sample01

## sample02