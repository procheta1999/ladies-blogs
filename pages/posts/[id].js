import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({ postData }) {
  return (<>
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article id="b">
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText} style={{fontSize:"20px"}}>
          <Date dateString={postData.date} />
          <br></br>
          <br></br>
          <figure className="fir-image-figure">
<center style={{color:'#2196f3'}}>Author Profile</center>
<br></br>
<br></br>
    <img className="fir-author-image fir-clickcircle" src={postData.image} alt="author"></img>

  <figcaption>
    <div className="fig-author-figure-title" style={{fontSize:"30px",color:"#0C264E"}}>{postData.author}</div>
    <div className="fig-author-figure-title" style={{color:"grey",fontSize:"22px"}}>{postData.intro}</div>
    <div className="fig-author-figure-title" style={{fontSize:"25px"}}><a href={postData.linkedin} target="_blank"><i className="fa fa-linkedin-square"></i></a><a href={postData.github} target="_blank"><i className="fa fa-github"></i></a><a href="mailto: {postData.mail}" ><i className="fa fa-envelope"></i></a></div>
  </figcaption>
</figure>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
    <style jsx>{`
    .fir-clickcircle,.fig-author-figure-title a {
      margin-right: 30px;
   } 
  
   figure {
     font-size:20px;
    display: flex;
  }
  
  .fir-clickcircle {
    height: 100px;
    width: 100px;
    border-radius: 100px;
  }
  
  .fir-image-figure {
    margin: 0;
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    position: relative;
    text-decoration: none;
  }
  
  .fir-image-figure .caption, .fir-image-figure figcaption {
    padding-left: 20px;
    padding-right: 15px;
  }
  
  html.wf-active .fir-image-figure .fig-author-figure-title {
    font-family: var(--fir-font-header);
    font-size: 20px;
  }
  
  .fir-image-figure .fig-author-figure-title {
    color: var(--fir-color-grey);
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-weight: 400;
    font-size: 20px;
    margin-top: 2px;
  }
  
  
      `}</style>
    </>
  )
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}