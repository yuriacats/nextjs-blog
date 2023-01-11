import Layout from "../../components/layout";
import Head from "next/head";
import {getAllPostIds, getPostData} from "../../lib/posts";
import Date from '../../atoms/date';
import utilStyles from '../../styles/utils.module.scss';
import ReadTimeDescriber from "../../atoms/ReadTimeDescriber";
export async function getStaticPaths(){
    const paths = getAllPostIds()
    return{
        paths,
        fallback:false
    }
}


export async function getStaticProps({params}){
    const postData = await getPostData(params.id)
    return{
        props:{
            postData
        }
    }
}
export default function Post({postData}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <h1 className={utilStyles.headingXl}> {postData.title}</h1>
            <div className={utilStyles.lightText}>
                <Date dateString={postData.date}/>
            </div>
            <ReadTimeDescriber readTimes={postData.readTimes}/>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml}} />
        </Layout>
    )
}