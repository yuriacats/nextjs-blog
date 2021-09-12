import fs from 'fs';
import path from 'path';
import matter from "gray-matter";
import remark from "remark";
import math from "remark-math";
import html from "remark-html";
import katex from "rehype-katex";
import remark2rehype from 'remark-rehype';
import stringify from 'rehype-stringify';
import highlight from 'remark-highlight.js';


const postsDirectory =path.join(process.cwd(),'posts')

export function getSortedPostData(){
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName =>{
    const id = fileName.replace(/\.md$/,'')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath,'utf-8')

    const matterResult =matter(fileContents)
        return{
            id,
            ...matterResult.data
        }
    })
    return allPostsData.sort((a,b) =>{
        if (a.date < b.date){
            return 1}else{
            return -1
        }
    })
}

export function getAllPostIds(){
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName =>{
        return{
            params:{
                id: fileName.replace(/\.md$/,'')
            }
        }
    })
}
export async function getPostData(id){
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const readTimes = Math.round(fs.readFileSync(fullPath,'utf-8').length/400)
    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        .use(math)
        .use(remark2rehype)
        .use(katex)
        .use(stringify)
        .use(highlight)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return{
        id,
        contentHtml,
        readTimes,
        ...matterResult.data
    }
}