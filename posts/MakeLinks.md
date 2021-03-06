---
title: 'Ergo EZをレイヤー機能を駆使してWinとMacに最適化した話'
date: '2021-06-10'
---

## 課題
メインキーボードとして[ErgoEZ](https://ergodox-ez.com/) を使っているが、
Windowsで最適なキーバインドとマックで最適なキーバインドだと大きな差がありその部分を埋めたい
せっかくレイヤー機能もあることだしWindowsとMacでキー配列を独自に入れ替えたらいいのではないだろうか
という仮説に至った。

## レイアウトで工夫した点
[レイアウトURL](https://configure.zsa.io/ergodox-ez/layouts/GZqEw/latest/0) \
レイアウトでは、ワンクリックである程度長い時間レイヤーを変えるという操作が必要になってきた。
この時に使うのが「TT（レイヤー番号）」というキーバインドである。
キーバインドには以下の５種類のキーバインドがある。
- MO 押している間だけ別のレイヤーに動く。
- TG　タップでレイヤーの切り替えを行う。
- OSL　次のキー動作を動作先レイヤーのキーバインドで操作する
- TT　タップが長い時はMO、短い時はTG
- TO　レイヤースイッチを次のレイヤーに移す

ざっくり書くと以上になるが実際にコンパイルして使ったところ、
TGの時の動きよりもTTの時の動きの方が自分にはしっくりきたため
（TGはうまくレイヤーのチェンジができていない感じがしたのも大きかった）
今回はTTでのレイヤーチェンジを採用している。この時はダブルクリックの要領で
軽く２回タップするとレイヤーの移動が行われる。ErgoEZはレイヤーの状態をライト
で示す使用があるため今のレイヤーの状態がわかる点は特に自分が気に入っている箇所だ。

## 今後の展望
しばらくはこのレイアウト＋改良をやっていって気になる点をベンチマークしていこうと思う。
- レイヤー０を完全にWindows用レイアウトにすること
- Mac環境で”\”が現状Ergoだと打てない状態になっていることの対処

また、Cでコンパイルすることが意外と簡単ということを風の噂で耳にしたので、そのあたりにも手を出して
また知見をBlogなどで書いていけたらなとおもう。

---

参考サイト
- [Getting Started With Your New ErgoDox EZ](https://ergodox-ez.com/pages/getting-started)