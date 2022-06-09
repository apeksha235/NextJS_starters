import React from 'react'
import Image from 'next/image'
import styles from '../styles/cards.module.css'

const Cards = () => {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>My Top 6 Anime</h2>
        <div className={styles.grid}>
          <a href="https://onepiece.fandom.com/wiki/One_Piece_Wiki" className={styles.card}>
            <h3>One Piece &rarr;</h3>
            <Image src="/one_piece.jpg" alt="one-piece" width={800} height={500} />
          </a>

          <a href="https://naruto.fandom.com/wiki/Narutopedia" className={styles.card}>
            <h3>Naruto &rarr;</h3>
            <Image src="/naruto.jpg" alt="one-piece" width={800} height={500} />
          </a>

          <a
            href="https://attackontitan.fandom.com/wiki/Attack_on_Titan_Wiki"
            className={styles.card}
          >
            <h3>Attack on Titan &rarr;</h3>
            <Image src="/aot.jpg" alt="one-piece" width={800} height={500} />
          </a>

          <a
            href="https://bleach.fandom.com/wiki/Bleach_Wiki"
            className={styles.card}
          >
            <h3>Bleach &rarr;</h3>
            <Image src="/bleach.jpg" alt="one-piece" width={800} height={500} />
          </a>
          <a
            href="https://haikyuu.fandom.com/wiki/Haikyuu!!_Wiki"
            className={styles.card}
          >
            <h3>Haikyuu &rarr;</h3>
            <Image src="/haikyuu.jpg" alt="one-piece" width={800} height={500} />
          </a>
          <a
            href="https://kimetsu-no-yaiba.fandom.com/wiki/Kimetsu_no_Yaiba_Wiki"
            className={styles.card}
          >
            <h3>Demon Slayer &rarr;</h3>
            <Image src="/demon.jpg" alt="one-piece" width={800} height={500} />
          </a>
        </div>
        </main>
  )
}

export default Cards;