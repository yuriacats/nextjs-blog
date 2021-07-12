import Layout from "../components/layout";
import Head from "next/head";

export default function profile(){

    return(
        <Layout>
           <Head>
               <title>"上原ゆりあのプロフィール"</title>
           </Head>
            <h1>プロフィール</h1>
            <h2>基本情報</h2>
            <p>所属：慶應義塾大学環境情報学部<br/>
                生まれ：1998年5月16日<br/>
                趣味：読書、レザークラフト、自室改造<br/>
                大切にしていること：日々の生活に希望を与える。<br/>

            </p>
        </Layout>
    )
}