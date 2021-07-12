---
title: 'KaTexをブログに導入した話'
date: '2021-06-12'
---

##　動機
今回のブログはAWS Lambda＋React製ブログの避難用ブログな訳ですが、
実際のブログでは、数学系の式を使った勉強記録も書きたかったため、数学系ライブラリーが導入されている。避難用とはいえこちらにもライブラリーの導入の必要性があった。

## 環境
[QiitaのNextJSチュートリアルの翻訳記事]("https://qiita.com/thesugar/items/01896c1faa8241e6b1bc") の終わった直後の環境
ここをベースにMath系ライブラリーを加えて動かせるようにしよう。

```json
{
  "dependencies": {
    "remark-math": "^4.0.0",
    "rehype-katex": "^5.0.0",
    "remark-rehype": "^8.1.0",
    "rehype-stringify": "^8.0.0"
  }
}
```
上記のようにJsonに追記をし、``components/layout.js``
にも以下のような追記をしていく

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
      integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
      crossOrigin="anonymous"/>
```
最後に``lib/post.js`` のgetPostData関数のremark()関数を使っている部分に数学関係のライブラリーの
利用の記述をすることで無事利用ができるようになる。

```js
export async function getPostData(id){
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')

    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        //ここからの部分を追記する
        .use(math)
        .use(remark2rehype)
        .use(katex)
        .use(stringify)
        //ここまで追記
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return{
        id,
        contentHtml,
        ...matterResult.data
    }
}
```
このStyleseetはKatex用のスタイルの秘伝のタレが溢れている。Katexを用いるようなライブラリーにはちらっと追記されてたりするので注意して
自分で導入していこう。

## 実際に計算式を書いてみる。
Texを書きたい部分は、``$$`` で囲むことによりTexのコードとして認識される。例えば以下のように書くことで
一番下に書いたようなものが出力される。
```
$$
L = \frac{1}{2} \rho v^2 S C_L
$$
```
$$
L = \frac{1}{2} \rho v^2 S C_L
$$

