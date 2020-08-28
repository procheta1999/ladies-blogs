import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Typography from "@material-ui/core/Typography"
import Link from 'next/link'
import Date from '../components/date'


export default function Home({ allPostsData }) {
  return (<><Head><title>DSC NSEC Blogs!</title>
  <meta charset="UTF-8"></meta>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <link rel="icon" href="/images/favicon.ico" /></Head>
    <Layout home>
      <i><Typography variant="h3"><center><div id="pr">Write Your Own Story!</div></center></Typography></i>
      <br></br>
<center>      <img src="https://media3.giphy.com/media/pOZhmE42D1WrCWATLK/200w.webp?cid=ecf05e47v7hnpk4dp49owbh0iputoj6ml3naebla8karkx0g&rid=200w.webp"></img></center>

<br></br>   
<div id="p">     <section  className={utilStyles.headingMd}>We, at DSC NSEC, believe that everyone has a unique story to tell to the world- a story about them,how they reached success, how they never gave up, what challenges did they face, what was the final outcome. So we came up with our blog platform<span id="blue"> DSC NSEC blogs! </span>to help reach your stories to the world, to encourage more people in their journey. So, let's start writing !</section></div>
<br></br>
<div id="pro"><section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
  
<Typography variant="h2"><h2 className={utilStyles.headingLg}>Blog Section📖🖋</h2></Typography>
<center><img src="https://media4.giphy.com/media/l44Qqz6gO6JiVV3pu/200w.webp?cid=ecf05e47bjp24rpgyr100vziavsqfil200f2kvb81rj4hzyw&rid=200w.webp"></img></center>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, author, short }) => (
         <div className="card"><li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a><Typography variant="h5">{title}</Typography></a>
              </Link>
              <small className={utilStyles.lightText}>
              {short}
              <br></br>
                <Date dateString={date} />
                <br></br>
<i>{author}</i>
<br></br>

              </small>
            </li></div>
          ))}
        </ul>
      </section></div>
      <style jsx>{`
      #pro{
        background-color: #f9f9f9;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    padding:1em 1em 1em 1em;
font-size:20px;
      }
      #p{
        background:rgb(74,76,120);
        padding:1em 1em 1em 1em;
        color:white;
        border: 2px;
        border-radius: 3px;
}
      }
        #blue{
          color:white;
        }
        .card {
          width:auto;
          height:auto;
          margin: 1rem 1rem 1rem 1rem;
          flex-basis:30%;
          padding: 1rem 1rem 1rem 1rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid black;
          border-radius: 12px;
          background color:white;
          transition: color 0.15s ease, border-color 0.15s ease;
          -webkit-box-shadow: 3px 3px 5px 6px grey;  
  -moz-box-shadow:    3px 3px 5px 6px grey;  
  box-shadow:         3px 3px 5px 6px grey;
        }`}</style>
    </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}