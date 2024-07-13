## 開発環境について
### Next12.js
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

### UIフレームワーク
- BootStrap5のインストール
```
yarn add bootstrap@next
```

- _app.jsに適応(グローバルに適応)
```js
import 'bootstrap/dist/css/bootstrap.min.css'
```

## Next.jsの各種設定

### document
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

### image
- 外部からの画像を参照する場合はドメインを指定
- next.config.js
```js
const nextConfig = {
  images:{
    domains: ['i.gyazo.com'],
  }
}
```

- js
```js
import Image from "next/image";
<Image src="Image_url.png" width="60" height="60" className="" alt="Logo"/>
```

- ローカルの画像を参照する場合
- publicフォルダ配下にimgファイルを入れる
```js
import Image from "next/image";
<Image src='/santa.jpg' alt='ローカルの写真' width={400} height={400} />
```
