import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box';
import styles from '../styles/News.module.css'
import { useState } from 'react'

export default function News(){

  return (
    <>
    <Box 
    border={2} 
    borderColor="black"
    height={580} 
    width={440}
    bgcolor='#4B5D67'
    color="black"
    alignItems="center"
    ml={130} >
      <a className={styles.link}
            href="https://www.epicdope.com/top-10-countries-where-anime-is-most-popular-and-why/"
          >
            <Image src="/img1.jpeg" alt="one-piece" width={500} height={250} className={styles.img}/>
            <h4>Top 10 countries where anime is most popular and why &rarr;</h4>
          </a>
          <hr></hr>
          <a className={styles.link}
            href="https://animecollective.com/anime-releasing-in-2022/"
          >
            <Image src="/img2.webp" alt="one-piece" width={500} height={250} className={styles.img}/>
            <h4>All of the Upcoming Anime Confirmed for 2022 So Far &rarr;</h4>
          </a>
    </Box>
    </>
  );
}