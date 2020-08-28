import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import ContainedButtons from './button'
import ButtonAppBar from '../pages/tab'

const name = 'DSC NSEC Blogs!'
export const siteTitle = 'DSC NSEC Blogs!'

export default function Layout({ children, home }) {
  return (<>
    <ButtonAppBar/>
    <br></br>
    <br></br>
    <div className={styles.container}>
      
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="DSC NSEC Blogs!"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <center><h1 className="google-font mb-1 light-font-color" className={utilStyles.heading2Xl}>{name}</h1></center>
          </>
        ) : (
          <>
            
          </>
        )}
      </header>
      <main id= "t" style={{color:"#1E1E1E", fontSize:"25px"}}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
            <ContainedButtons/>
        </div>
      )}
      <style jsx>{`
      `}</style>
    </div>
    </>
  )
}