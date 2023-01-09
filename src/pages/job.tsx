import Layout from "../components/layout";
import Head from "next/head";
import React from "react";
import exp from "constants";

const simpleList ={
    "list-style": "none", 
}
const job = ():JSX.Element => {
return(
        <Layout>
            <Head>
               <title>yuriacatsの職務経歴書</title>
           </Head> 
            <h1>職務経歴書</h1>
            <h2>基本情報</h2>
            <p>
                氏名：土田妃華<br/>
                性別：女<br/>
                生年月日：1998年5月16日<br/>
            </p>
            <h2>SNS/情報発信媒体</h2>
            <p> <a href="https://twitter.com/yuria_cats">Twitter(@yuria_cats)</a> </p>
                <p> <a href="https://connpass.com/user/yuria_cats/">connpass(@yuria_cats)</a> </p>
                <p> <a href="https://github.com/yuriacats">Github(yuriacats)</a> </p>
                <p> <a href="https://qiita.com/yuriacats">Qiita(yuriacats)</a> </p>
                <p> <a href="https://zenn.dev/yuriacats">Zenn(yuriacats)</a> </p>
                <p> <a href="https://nextjs-myblog-xi.vercel.app/">ブログ</a> </p>
            <h2>略歴</h2>
              <p> 2017年4月　慶應義塾大学環境情報学部　入学 </p>
              <p> 2022年3月　慶應義塾大学環境情報学部  卒業　 </p>
              <p> 2022年4月　████████ 入社 </p>
            <h2>資格等</h2>
            <p>
                2018年　普通運転免許
            </p>
            <h2>スキルセット</h2>
            <h3>業務でので使用経験あり</h3>
            <li>Python </li>
            <li>Django</li>
            <h3>業務以外でので使用経験あり</h3>
            <li>JavaScript/TypeScript</li>
            <li>Swift</li>
            <h2>職務経歴</h2>
            <p>
                 2022年4月　████にて自社WEBアプリケーションの開発・運用チームに配属。
            </p>

        </Layout>
    )}
export default job;