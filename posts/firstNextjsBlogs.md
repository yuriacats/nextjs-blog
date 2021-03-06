---
title: 'NextJSで自作ブログをとりあえず作ってみた'
date: '2021-06-09'
---

## 課題
今作っている[自作ブログプロジェクト](https://github.com/users/yuriacats/projects/2) の進捗が芳しくなく、\
新しいブログを避難所として使いたい。この際、TypeScriptとの親和性の高いフルスタックフレームワークを使っていいのではと思い
NextJSでブログを書くことにした。

作るにあたっては、[Qiita](https://qiita.com/) の [NextJSのチュートリアルの翻訳記事](https://qiita.com/thesugar/items/01896c1faa8241e6b1bc) 
を参考にさせていただいている。現状ではそれに従って、Markdownでブログを書いているところだ。この部分をできるだけ早くDBに移していきたいと考えている。\
最終的にAPIサーバーを直さないといけないのでIssueを殺していくしかないわけだが、それまでの勉強や苦戦記録を残せないのはもったいないと思い、別なブログに避難したという次第である。
## 今後の展望
最終的な目標としてはNuxtJS側も自作のReact側も同じDBを参照して記事としては同じ内容を配信するようなアーキテクチャーを作っていきたい。\
この場合、おそらくNextJS側がミラーサーバとしての役割を果たすだろう。

NextJS側では、別ブログも書いて行けたらなということを考えている。こちらは読書日誌もしくは、便利なグッズ紹介といったところだろうか。ポートフォリオのメインや軽いゲームなどもこちらで紹介して行けたらなということは思っている。
つらつらと書いてしまったが、やりたいことは山積みなので一つ一つ消化していくしかないなという覚悟を決めたいと思う。