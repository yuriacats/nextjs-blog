import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import {getSortedPostData, allPostsData} from '../lib/posts'
import Link from 'next/link'
import Date from '../atoms/date'


export const getStaticProps = () => {
    const allPostsData = getSortedPostData();
    return{
        props:{
            allPostsData,
        }
    }
}

const Home = ({ allPostsData }
    :{ allPostsData:allPostsData}
    ):JSX.Element => {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>SFC卒/Web系エンジニア/料理が好き/どちらかというと犬派</p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}) =>(
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br/>
                            <small className={utilStyles.lightText}>
                                <Date dateString={date}/>
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}
export default Home;