import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "./nav.js";
import Cards from "./cards.js";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AniZone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <marquee><h1>Welcome to AniZone!</h1></marquee>
      <Cards />
    </div>
  )
}
