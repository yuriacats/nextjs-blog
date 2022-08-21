import Layout from "../components/layout";
import Head from "next/head";

export  const profile = ():JSX.Element => {

    return(
        <Layout>
            <Head>
               <title>"yuriacatsのプロフィール"</title>
           </Head> 
            <h1>職務経歴書</h1>
            <h2>基本情報</h2>
            <p>
                通称：ゆりあ<br/>
                性別：女<br/>
                誕生日：5月16日<br/>
            </p>
            <h2>SNS/情報発信媒体</h2>
                <p> <a href="https://twitter.com/yuria_cats">Twitter(@yuria_cats)</a> </p>
                <p> <a href="https://connpass.com/user/yuria_cats/">connpass(@yuria_cats)</a> </p>
                <p> <a href="https://github.com/yuriacats">Github(yuriacats)</a> </p>
                <p> <a href="https://qiita.com/yuriacats">Qiita(yuriacats)</a> </p>
                <p> <a href="https://zenn.dev/yuriacats">Zenn(yuriacats)</a> </p>
                <p> <a href="https://nextjs-myblog-xi.vercel.app/">ブログ</a> </p>
            <h3>Q and A</h3>
            <p>Q.ペットは飼っていますか？ <br/>A.数年前にハムスターをなくして以来動物は飼っていないですね。</p>
            <p>Q.好きな言語は何ですか？<br/>A.思想的にはC#などの静的型の言語が、手癖で書くのはJSですね </p>
            <p>Q.趣味はなんですか <br/>A.料理動画を見ること・料理を作ること・部屋を改造すること</p>
        </Layout>
    )
}
export default  profile